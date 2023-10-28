import { sectionSeparator } from "../utils/index"
// ------------------------------------------------------
// js 中的元子组
// ------------------------------------------------------
// > 一次需要匹配多个原子
// > 原子组与原子表的产别在于源自组一次匹配多个原子，而原子表则
//   是匹配任意一个字符
// > 原子组使用 `()` 包裹



//  使用  match 原子组匹配的结果,
// --------------------------------------------
// 0.     匹配到的完整内容
// 1,2..  匹配到的原子组
// index  原始字符串中的位置
// input  原字符串
// group  命名分组

const match_result = () => {

  sectionSeparator("原子组匹配")
  let h = "houdunren.com,website location houdunren.com";
  // 只匹配第一个
  console.log(h.match(/houdun(ren)\.(com)/));
  // [
  //   'houdunren.com',
  //   'ren',
  //   'com',
  //   index: 0,
  //   input: 'houdunren.com,website location houdunren.com',
  //   groups: undefined
  // ]

  // 一旦进行了 `g` 模式修正，则返回的是一个数组，
  // 数组中的内容为完整匹配的结果
  console.log(h.match(/houdun(ren)\.(com)/g));
  // [ 'houdunren.com', 'houdunren.com' ]

}

// 引用分组
//
const reference_group = () => {

  sectionSeparator("原子组引用")

  let hd = `
    <h1>houdunren</h1>
    <span>后端人</span>
    <h2>hdcms</h2>
  `;

  // 这里的 \1 表示的是正则的前半部分定义的第一个原子组, 数字表示正则中定义的第几个原子组的表达式的引用(可以避免重复编写这部分正则)
  // 这里 $2 表示的是使用正则中第几个原子组的内容(具体在匹配的过程中匹配到的内容)
  let reg = /<(h[1-6])>([\s\S]*)<\/\1>/gi;
  console.log(hd.replace(reg, `<p>$2</p>`)) // ([\s\S]*) 匹配到的内容

  sectionSeparator("原子组忽略")

  // 正则表达式的分组匹配到的内容，会作为结果的一部分返回, 如果你想要的的是这部分原子组参与匹配
  // 但是并不关注这部分匹配的内容，可以让这些内容在结果中不进行返回，在原子组前加 `?:`
  // 下面是一个匹配全部域名的操作
  //

  let text = `
    https://www.houdunren.com
    https://www.github.com
    https://hdcms.com
  `;
  let regex = /https?:\/\/((?:\w+\.)?\w+\.(?:com|org|cn))/gi;
  let v;
  while (v = regex.exec(text)) {
    // 从返回的内容可以看出，这里只有 
    // v[1] 表示的第一个原子组(最外层的括号)返回了
    // v[2] 表示的(?:\w+\.)? 没有返回
    // v[3] 表示的(?:com|org|cn) 没有返回
    console.dir(v);
  }
}

// reference alias
const reference_alias = () => {

  sectionSeparator("原子组别名")

  // 如果希望返回的组数据更加清晰，可以为原子组编号，结果将保存在返回的 groups 字段中
  // 定义别名的格式 (?<alias>)
  let hd = "<h1>houdunren</h1>";
  let result = hd.match(/<(?<tag>h[1-6])[\s\S]*<\/\1>/)
  console.dir(result);
  console.log(result?.groups?.tag)

  // 使用内容进行替换, 
  // 将h 标签替换为 p 标签
  const html = `
    <h1>houdunren</h1>
    <span>后盾人</span>
    <h2>hdcms</h2>
  `;
  let reg = /<(?<tag>h[1-6])>(?<cont>[\s\S]*)<\/\1>/gi;
  console.log(html.replace(reg, `<p>$<cont></p>`));

  // 获取网站域名组成一个数组
  //
  const body = `
    <body>
      <a href="https://www.houdunren.com">后盾人</a>
      <a href="https://www.hdcms.com">hdcms</a>
      <a href="https://www.sina.com">新浪</a>
    </body>
  `;
  let regexp = /<a\s*.+?(?<link>https?:\/\/(\w+\.)+(com|oeg|cn|cc)).*>(?<title>.+)<\/a>/gi;
  const links = []
  for (const iterator of body.matchAll(regexp)) {
    links.push(iterator["groups"]);
  }
  console.log(links);
}


const demo = () => {

  sectionSeparator("原子组示例")

  // 原子组匹配 h1 标签
  let h = "<h1>houdunren</h1>";
  console.log(/<(h1)>.+<\/\1>/.test(h));

  // 匹配所有的标题元素
  let hd = `
    <h1>houdunren</h1>
    <span>后盾人</span>
    <h2>hdcms</h2>
  `;
  console.table(hd.match(/<(h[1-6])[\s\S]*<\/\1>/g));


  // 匹配 0~100 的数字
  console.log(/^(\d{1,2}|100)/.test("09"));


  // 匹配邮箱
  let text = "123423554@qq.com";
  let reg = /^[\w\-]+@[\w\-]+\.(com|org|cn|cc|net)$/i;
  console.log(text.match(reg))

  // 如果是下面这样的域有多个的时候就不再匹配，
  const email = "houdunren@hd.com.cn";
  reg = /^[\w\-]+@([\w\-]+\.)+(com|org|cn|cc|net)$/i;
  console.log(email.match(reg));

}


const group = () => {
  match_result();
  reference_group();
  reference_alias();
  demo();
}

export default {
  group,
}
