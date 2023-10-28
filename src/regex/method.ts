import { sectionSeparator } from "../utils"


/**
 * 本节中用于探讨
 *  > 1. 字符串中可以使用正则表达式作为参数的方法
 *  > 2. 正则表达式对象可以使用的方法
 */


// 1. 字符串的 match() 方法
const strMatch = () => {
  // 字符串匹配的时候，使用 match 方法，完成匹配，
  // 如果在正则表达式中没有著名全局匹配的模式，则只会匹配一次,返回匹配的完整信息
  // 如果在正则表达式中使用了全局匹配，则会返回匹配内容组成的数组,不会返回细节
  //
  let html = `
    <body>
      <h1>houdunren</h1>
      <h2>hdcms.com</h2>
      <h1>后盾人</h1>
    </body>
  `;
  let tag = "h1";
  // const reg = new RegExp("<(" + tag + ")>.+?<\.\\1>")
  const reg = new RegExp("<(" + tag + ")>.+?<\.\\1>", "g")
  console.log(html.match(reg))
}

// 2. 字符串的 strMatchAll() 方法
// 在新的浏览器中支持这个方法，返回一个可迭代对象
// 注意这里必须使用 `g` 模式，否则会报错

const strMatchAll = () => {
  // 
  let html = `
    <body>
      <h1>houdunren</h1>
      <h2>hdcms.com</h2>
      <h1>后盾人</h1>
    </body>
  `;
  // 必须要使用 `g` 模式，否则会报错
  let reg = /<(h[1-6])>.+?<\/\1>/gi;
  for (const iterator of html.matchAll(reg)) {
    console.log(iterator)
  }
}

// 我们可以自行为 String 原型添加 matchAll 方法
// 使得我们可以在老的浏览器中使用这个 matchAll 方法
// 由于我们在函数中进行了处理，所以这里的 reg 不能添加 g 模式
//
// String.prototype.matchAll = function(reg) {
//   let res = this.match(reg);
//   if (res) {
//     let str = this.replace(res[0], "^".repeat(res[0].length))
//     let match = str.matchAll(reg) || [];
//     return [res, ...match];
//   }
// }


// 3. 字符串的 search 方法
//  search 用于检索指定字符串中的子串，也可以使用正则表达式搜索，返回值为索引位置
const strSearch = () => {
  let str = "houdunren.com";
  console.log(str.search("com"))

  // 使用正则搜索
  console.log(str.search(/\.com/i))
}

// 4. split 
//  使用字符串或正则表达式分割字符串，下面使用字符串分隔日期
const strSplit = () => {
  // 
  let str = "2023-03-12";
  console.log(str.split("-")) // ["2023", "02", "12"]  返回数组

  // 如果日期的连接符不确定，那么就需要使用正则操作了
  let date = "2023/03-12";
  console.log(date.split(/-|\//))
}

// 5. replace 
//  不仅可以进行基本字符替换，也可以进行正则替换
//
const strReplace = () => {
  // 
  let str = "2023/02/12";
  console.log(str.replace(/\//g, "-")) // 2023-02-12

  // 替换字符串可以插入下面的特殊变量
  // $$ 表示插入一个正常的 `$`
  // $& 表示插入匹配的字串
  // $` 表示当前匹配字串左边的内容
  // $' 表示当前匹配字串右边的内容
  // $n 如果第一个参数是 RegExp 对象, 并且呢n 是一个 100 以内的非负整数
  //    表示插入第n个括号匹配的字符窜，提示，索引是从1 开始

  // 例如我们将匹配的内容前面和后端分别添加两个匹配内容前方,后方的字符
  // 结果将变成  ===后盾人===
  let hd = '=后盾人=';
  console.log(hd.replace(/后盾人/g, "$`$`$&$'$'"))

  // 将下方给出的电话示例使用 - 连接
  let phone = "(010)99999999 (020)88888888";
  console.log(phone.replace(/\((\d{3,4})\)(\d{7,8})/g, "$1-$2"))

  useReplaceCallBack();
}

// replace 中支持回调函数的形式完成复杂的替换逻辑,回调函数中的参数含义
// > 1 match : 第一个参数表示的是正则匹配的内容,
// > 2 p1,p1.... : 第二个参数为一个可变数据，对应的正则表达式中的原子表中的位置
// > 3 offset : 匹配的字串在原始字符串中的偏移量(index)
// > 4 string : 被匹配的原始字符串
// > 5 NamedCaptureGroup : 命名捕获组匹配的对象

const useReplaceCallBack = () => {
  // 为 html 内容添加连接
  const html = `<body>在线教育是一种高校的学习方式，教育是一生的事业</body>`;
  let result = html.replace(/教育/g, "<a href='https://www.houdunren.com'>$&</a>");
  console.log(result);

  // 为网页中的链接补全格式, https://www
  const content = `
    <body
      <main>
        <a stype="color:red" href="http://www.hdcms.com">
          开源系统
        </a>
        <a id="l1" href="http://houdunren.com">后盾人</a>
        <a href="http://yahoo.com">雅虎</a>
        <h4>http://hdcms.com</h4>
      </main>
    </body>`;
  const reg = /(<a.*href=['"])(http)(:\/\/)(www\.)?(hdcms|houdunren)/gi;
  result = content.replace(reg, (v, ...args) => {
    args[1] += "s";
    args[3] = args[3] || "www.";
    // splice(0,5) 会返回被删除的元素组成的新的数组
    return args.splice(0, 5).join("");
  });
  console.log(result);

  // 将标题标签全部替换为 p 标签
  const text = `
    <body>
      <h1>houdunren.com</h1>
      <h2>hdcms.com<h2>
      <h1>后盾人</h1>
    </body>`;
  const regexp = /<(h[1-6]>)(.*?)<\/\1>/g;
  //
  result = text.replace(regexp, (_str, _tag, content) => {
    return `<p>${content}</p>`
  });
  console.log(result);


  // 为所有的标题添加上 `hot` 类
  const body = `
    <body>
      <div class="content">
        <h1>后盾人</h1>
        <h2>houdunren.com</h2>
        <h1>后盾人</h1>
      </div>
    </body>`;

  let re = /<(h[1-6])>([\s\S]*?)<\/\1>/gi;

  result = body.replace(re, (
    _search, // matched value
    p1, // first group
    p2, // second group
    _index, // matched string index
    _source // original string
  ) => {
    return `<${p1} class="hot"> ${p2} </${p1}>`;
  });
  console.log(result);
}

// 字符串可以使用的方法
const stringMethod = () => {
  strMatch();
  strMatchAll();
  strSearch();
  strSplit();
  strReplace();
}

// 1. exec 方法
// -----------------------------------------
// > 不使用 `g` 修饰符使用与 match 类似, exec 返回的是匹配的详情信息，但是每次只会返回一个
// > 使用 `g` 修饰符, 多次操作使用同一个正则表达式, 配合循环, 可以实现全局匹配的效果,
//   最后匹配不到则返回一个 null.
//    > 
// 使用正则的 `g` 模式配合 exec 也可以实现返回 match all 时候的细节
const regexExec = () => {

  sectionSeparator("regex exec")

  const html = `
    <body>
    <h1>houdunren</h1>
    <h2>hdcms.com</h2>
    <h1>后盾人</h1>
    </body>
  `;

  // 最终是返回的一个数组, 并不是一个迭代器
  //
  function search(str: string, reg: RegExp) {
    const matchs = [];
    let data;
    while (data = reg.exec(str)) {
      matchs.push(data);
    }
    return matchs;
  }
  console.log(search(html, /<(h[1-6])>[\s\S]+?<\/\1>/gi))

  const content = `
    <body>
      <div class="content">
        后端人不断分享视频教程,后盾人网址是houdunren.com
      </div>
    </body>`;

  const reg = /(?<tag>后盾)人/g;
  let count = 0;
  let result;
  while (result = reg.exec(content)) {
    console.log(result);
    count++;
  }
  console.log(`文档中后盾人共出现${count}次`);

}


// 2. test 方法用于测试字符串是否满足正则匹配规则
const regexTest = () => {
  const reg = /^\w+@\w+\.\w+$/;
  const email = "hutol@gmail.com";
  console.log(reg.test(email));
}

// 正则表达式可以使用的方法
const regexMethod = () => {
  regexExec();
  regexTest();

}


const methods = () => {
  regexMethod();
  stringMethod();
}


export default {
  methods
}
