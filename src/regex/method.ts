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


}

// 字符串可以使用的方法
const stringMethod = () => {
  strMatch();
  strMatchAll();
  strSearch();
  strSplit();
  strReplace();
}


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

}

// 正则表达式可以使用的方法
const regexMethod = () => {
  regexExec();
}


const methods = () => {
  regexMethod();
  stringMethod();
}


export default {
  methods
}
