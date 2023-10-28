
// 在一组字符中匹配其中某个字符，在正则表达式中通过元字符表来完成，
// 就是放入到 [] 中


const charsequence = () => {
  const url = "houdunren.com";

  // 直接使用字符列表匹配的时候，需要完全匹配字符中的所有字符才能算匹配
  console.log(/ue/.test(url)); // false

  // 使用原子表的时候，只要匹配原子表中的任意一个字符都算匹配
  // 这里的含义是只要字符中含有 u 或者 e 字符都会通过，不要求出现ue这样的字符组合
  console.log(/[ue]/.test(url)) // true

}


// 指定原子表的时候，当使用数字或者字母范围的的时候，
// 可以使用范围符号表示一个范围内的所有数字或者字母
// >> 需要注意的是，需要升序表示范围，不能降序 <<
//
const charrange = () => {

  const num = "3";
  // 表示 0~3 的所有数字 0 1 2 3
  console.log(/[0-3]/.test(num)); // true


  // 表示 a~f 之间的所有字母 a b c d e f
  const char = 'e';
  console.log(/[a-f]/.test(char)); // true

  // [3-0] , [f-a] 这些都是错误的写法 SyntaxError

}

// 原子表中有些字符不需要转义，如果转义也没有问题，可以理解为在原子表中 `.` 就是 .
// 但是原子表中的 [], () 
const charconvert = () => {

  let str = '(houdunren.com)+';
  console.table(str.match(/[().+]/g))

  // 使用转义符号也没有问题
  console.table(str.match(/[\(\)\.\+]/g));

}

// 借助原子表和 反义字符组可以表示包括换行在内的所有字符
// [\s\S], [\d\D], [\W\w]
const allmatch = () => {
  const reg = /[\s\S]/;
}


// 原子表的开头使用 ^ , 表示排除原子表中指定的字符
// 其余字符都可匹配
const excludemode = () => {

  // 当需要匹配一些文本中有限的某个元素，可以使用排除法
  // 将其他几种元素全部排除
  const text = `张三:010-99999999,里斯:020-8888888`;
  let res = text.match(/[^:\d-,]/g)

  console.log(res)

}

// 使用示例
// 去除这段 html 文本中的所有 h 标题
const replaceHtmlTitle = () => {
  let text = `
      <body>
        <p>后盾人</p>
        <h1>houdunren.com</h1>
        <h2>hdcms.com</h2>
      </body>
    `;
  const reg = /<(h[1-6])>[\s\S]*?<\/\1>*/g;
  text = text.replace(reg, "");
  console.log(text)
}


const table = () => {
  charsequence();
  charrange();
  charconvert();
  allmatch();
  excludemode();
  replaceHtmlTitle();
}


export default {
  table
}
