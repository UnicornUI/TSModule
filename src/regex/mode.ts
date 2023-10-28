
//  -----------------------------------------------------------------
//    js 中正则的匹配模式
//  -----------------------------------------------------------------
//  > 1. `i` : 忽略大小写
//  > 2. `g` : 采用全局搜索的模式匹配内容
//  > 3. `m` : 将内容视为多行文本进行匹配
//  > 4. `s` : 将内容视为单行(忽略换行符), . 可以匹配所有内容
//  > 5. `y` : 从 regex.lastIndex 开始匹配
//  > 6. `u` : 正确处理四个字符的 UTF-16 编码
//
//  -----------------------------------------------------------------


// 忽略大小写
const mode_ignore = () => {

  let str = "javascript is over best, NOT JAVASCRIPT";
  str.replace(/javascript/gi, 'javascript')

}

// 全局模式
const mode_global = () => {
  let str = "javascript";
  // 没有使用全局模式，只会替换第一个匹配的字符
  str = str.replace(/a/, "@");
  console.log(str)

  str = "javascript";
  str = str.replace(/a/g, "@")
  console.log(str)

}

// 将内容视为多行匹配, 主要是针对 `^` 和 `$`
const mode_multi = () => {
  let lesson = `
    #1. js 200 #
    #2. ts 300 #
    #3. tutorial # frontend
    #4. nodejs 100 #
  `;

  // 将每一行满足条件的内容匹配为这样的对象 {name: "js", price: 200}
  // 所有匹配的结果构成一个数组
  let lessonList = lesson.match(/^\s*#\d+\.\s+.+\s+#$/gm)?.map(v => {
    v = v.replace(/\s*#\d+\.\s*/, "").replace(/\s+#/, "");
    let [name, price] = v.split(" ");
    return { name, price }
  });
  console.log(JSON.stringify(lessonList, null, 2));

}


// 测试 `s` 模式的应用, 将多行看作单行进行匹配
// 忽略的 换行符号，`.` 可以匹配所有的字符
//
const mode_single = () => {
  let text = `
    javascript can make everything
    nodejs is not a language
    bun is a insteads of nodejs
  `;
  // 单行匹配
  const result = text.match(/.*/s);
  console.log(result)

  // 没有加 `s` 模式
  const res = text.match(/.*/);
  console.log(res)

}


// 每个字符都有属性，要匹配这些属性，需要结合 `u` 模式才能生效
//  > `L`属性表示是字母
//  > `P`属性表示是标点符号
//  > 其他属性的简写可以参考网站 https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt

const mode_unicode = () => {

  let str = "houdunren,网站上的教程都很实用,加油！！";
  // 使用 \p{L} 属性匹配字母
  console.log(str.match(/\p{L}+/u));

  // 使用 \p{P} 属性匹配标点
  console.log(str.match(/\p{P}+/gu));


  // 字符也有unicode 文字系统属性，`Script=文字系统`, 下面使用
  // \p{sc=Han} 获取中文字符，han 为中文系统
  // 其他语言查看 http://www.unicode.org/standard/supported.html
  let hd = `张三:01-9999999,里斯:020-8888888`;
  let res = hd.match(/\p{sc=Han}+/gu)
  console.log(res);


  // 使用 `u` 模式可以正确处理四个字符的 UTF-16字节编码
  let uchars = "𝒳𝒴";
  console.table(uchars.match(/[𝒳𝒴]/)); //结果为乱字符"�"
  console.table(uchars.match(/[𝒳𝒴]/u)); //结果正确 "𝒳"
}

// --------------------------------------------------------
// 正则表达式中的 lastIndex 属性 
//
// > 可以设置正则表达式返回或者开始匹配的位置
// > 必须配合 `g`, `y` 模式运行
// > 对 exec 方法有效, 
//    - 第一次开始匹配默认位置为 0 (可以设置一个值进行改变)
//    - 每次匹配之后会设置匹配位置的下一个字符位置到 lastIndex
//    - 没有匹配到内容时，lastIndex 会被重置为 0
//
const regex_lastIndex = () => {

  // 直到没有匹配 null, 则回到 0
  let hd = "undunren";
  let reg = /un/g;
  console.log(reg.exec(hd));
  console.log(reg.lastIndex); // 1
  console.log(reg.exec(hd));
  console.log(reg.lastIndex); // 3
  console.log(reg.exec(hd));  // null
  console.log(reg.lastIndex); // 0

  // 看以下 y 模式下的匹配结果, 
  // 第一次匹配从默认值 0 位置开始，可以在匹配前修改
  // 下一次匹配从lastindex 值指定的位置开始, 不匹配直接终止，不继续往后匹配
  // 在某些场景下相比 `g` 模式可以提高匹配效率，比如明确知道某个内容只会连续出现在某处
  const str = "hunununouren";
  let regexp = /un/y;
  console.log(regexp.lastIndex) // 默认值 0
  regexp.lastIndex = 1;  // 修改默认值 (修改开始匹配位置)
  console.log(regexp.exec(str));
  console.log(regexp.lastIndex); // 2
  console.log(regexp.exec(str));
  console.log(regexp.lastIndex); // 4
  console.log(regexp.exec(str)); // index=4 的位置与 /un/ 不匹配，直接终止
  console.log(regexp.lastIndex); // 0

}

// 末位匹配模式
const mode_yeild = () => {

  regex_lastIndex();

  // 示例
  let info = `javascript学习群: 11111111,20234335,45465674
    不断分享视频教程，可以进入学习的网站地址 www.javascript.len.com
  `;

  const ymode = /(\d+),?/y;
  ymode.lastIndex = 15; // 字符开始匹配的位置
  let res;
  while ((res = ymode.exec(info))) console.log(res[1])

}


// 测试匹配模式
const mode = () => {

  mode_ignore()
  mode_global()
  mode_multi()
  mode_single()
  mode_unicode()
  mode_yeild()

}

export default {
  mode
}
