// -----------------------------------------
// 正则表达式 (文本处理)
// -----------------------------------------
// 1. 在 javascript 中的应用


// 构建正则对象
const createRegexp = () => {

  // 方式1: 适合直接构建的正则
  const regex = /^$/;
  console.log(regex.test("")) // true

  // 方式2: 适合正则需要使用到其他变量来构建
  let str = "u"
  const regexp = new RegExp(str)

  // 如果不使用对象来构建，需要借助 eval
  // const result = eval(`/${str}/`).test("true")
  //
  const result = regexp.test("true")
  console.log("正则构建测试", result)


  // 使用对象构建表达式的时候，传入的是一个字符串，可以带上其他参数一起
  const rep = new RegExp("\d{2,5}", "g");
  rep.test("id:13434545645555645,mobile:14516274568")

  // 示例
  highlightSearchContent("purple")

  // 抽取 Dom 中某种类标签
  extractElement("h1");

}


const highlightSearchContent = (content: string) => {
  let html = `
    <body>
      <div id="content">There is a firefox with purple color!!</div>
    </body>`;

  const reg = new RegExp(content, "g");
  html = html.replace(reg, str => {
    return `<span style="color:red">${str}</span>`;
  });
  console.log(html);
}

const extractElement = (element: string) => {
  const content = `
    <body>
      <h1>houdunren.com</h1>
      <h1>hdcms.com</h1>hashks
    </body>`;

  let reg = new RegExp("<(" + element + ")>.+</\\1>", "g")
  console.table(content.match(reg));
}


export default {
  createRegexp,
}


