
import { sectionSeparator } from "../utils"


// 这里主要探讨正则表达式每一个部分的重复匹配的问题
// 原则上如果没有重复匹配，每一个部分都只匹配一次
// 例如: \w 只会匹配一个字符， \d 只会匹配一个数字


// 多次匹配的规则, 
//
// ----------------------------------------
// *      :  [0-n]
// +      :  [1-n]
// ?      :  [0-1]
// {n}    :  n
// {n,}   :  n+
// {m, n} :  [m,n]
// ----------------------------------------
// 多次匹配的规则多见匹配原子字符, 如下:
//  \d+ : 表示匹配一个到多个数字
// 也可用于原子组的多次匹配, 如下`+` 就表示对前整个原子组的多次匹配
//  ([1-9]{3}-[0-9]{4})+
//
// 禁止贪婪，
//
// 如上所述,如果我们使用了多次匹配的规则，
// 那么这些规则在不加限制的情况下，会尽可能多的匹配满足规则的字符
// 这样的行为我们称之为 `贪婪匹配模式`
// 但是有时候我们想要匹配，但是只想要满足规则尽可能匹配较少的字符
// 这样的行为我们称之为 `禁止贪婪`, 通过 `?` 实现
// ----------------------------------------
// *?     : 重复任意次，但是尽可能少重复
// +?     ：重复一次或更多次，但是尽可能少重复
// ??     : 重复 0 - 1 次，但尽可能少重复
// {n,m}? : 重复 n,m 次, 但尽可能少重复
// {n,}?  : 重复 n 次以上，但尽可能少重复

const defaultBehavior = () => {
  sectionSeparator("match num")
  const hd = "hdddda";
  // 这里 `+` 只会对 d 有效，表示 h 匹配一次，d 多次匹配
  console.log(hd.match(/hd+/i)) // hdddd
}

// 验证座机号码
const validatePhone = () => {
  let phone = "010-1234556";
  console.log(/0\d{2,3}-\d{7,8}/.exec(phone));
}

// 验证用户名只能是 3-8 位的字母数字下划线，以字母开始
const validateName = () => {
  const name = "Hwe5alai"
  let state = /^[a-z][\w]{2,7}$/i.test(name);
  console.log("name validate result: ", state)
}

// 验证密码必须包含大写字母并在 5-10 位之间
const validatePassword = () => {
  let value = "Hawsca22ko"
  const regs = [/^[a-zA-Z0-9]{5,10}$/, /[A-Z]/];
  let state = regs.every(v => v.test(value));
  console.log("password validate result: ", state);
}


// 禁止贪婪匹配
const possibleLessReplicate = () => {
  let str = "aaaaa";
  console.log(str.match(/a+/)) // 尽可能多匹配 aaaaa
  console.log(str.match(/a+?/)) // 至少一个，尽可能少 a
  console.log(str.match(/a{2,3}?/))// 匹配2-3, 尽可能少 aa
  console.log(str.match(/a{2,}?/)) // 匹配2-n, 尽可能少 aa
}

// 禁止贪婪的应用
const hightlightSpan = () => {
  const body = `
    <body>
      <main>
        <span>houdunren</span>
        <span>hdcms.com</span>
        <span>houdunwang</span>
      </main>
    </body>
  `;

  // 将 span 替换为h4 并描红
  const reg = /<(span)>([\s\S]+?)<\/\1>/gi

  // 这里使用了 replace 函数的回调函数, 这是一个不定长参数
  // v 表示的是返回的完整匹配内容
  // p1 表示的是第一个原子组匹配的内容
  // p2 表示的是第二个原子组匹配的内容
  let result = body.replace(reg, (v, p1, p2) => {
    console.log(v);
    console.log(p1);
    console.log(p2);
    return `<h4 style="color:red">后盾人-${p2}</h4>`
  });

  console.log(result);
}

const matchTitle = () => {
  let html = `
    <body>
      <h1>
        Houdunren.com
      </h1>
      <h2>hdcms.com</h2>
      <h3></H3>
      <H1></H1>
    </body>
  `;
  let reg = /<(h[1-6])>[\s\S]*?<\/\1>/gi;
  console.table(html.match(reg));

}

const num = () => {
  defaultBehavior();
  validatePhone();
  validateName();
  validatePassword();
  possibleLessReplicate();
  hightlightSpan();
  matchTitle();
}

export default {
  num
}
