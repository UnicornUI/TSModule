import { sectionSeparator } from "../utils/index";

/**
 * 断言虽然写在括号中，但是他并不是原子组，不会出现在组匹配的结果中
 * 可以将断言理解为 正则中的条件
 */



// 1. 零宽先行断言 (?=exp),
// 匹配那些后面满足 exp 正则的内容
const beforeAssert = () => {

  sectionSeparator("regex asserts")

  // 将后面是 `教程` 的后端人汉字加上连接
  const body = `
    <body>
      <main>后盾人不断分享视频教程, 学习后盾人教程提升编程能力</main>
    </body>`;

  const reg = /后盾人(?=教程)/gi;
  let result = body.replace(reg, (v) => {
    return `<a href="https://houdunren.com/">${v}</a>`
  });
  console.log(result);

  // 例子2
  // 将所有的价格添加上 `.00` 的精确度
  let lessons = `
    js,200元,300次
    php,300.00元,100次
    java,200元,300次
    nod.js,100元,200次
    `;

  let regexp = /(\d+)(\.00)?(?=元)/gi;
  lessons = lessons.replace(regexp, (_v, ...args) => {
    console.log(_v);
    console.log(args[1]);
    args[1] = args[1] || ".00";
    return args.splice(0, 2).join("");
  });
  console.log(lessons);

  // 例子3
  // 验证用户名必须是五位, 由此说明断言不是组, 不会在结果中一记录出现
  const username = "aliasal";
  let re = /^(?=[a-z]{5}$)/i
  console.log(re.test(username));
}


// 零宽后向断言 (?<=exp)
// 匹配前面内容满足 exp 表达式规则的内容
const afterAsset = () => {
  // 匹配前面内容是 houdunren 的数字

  let hd = "houdunren789hdcms999";
  let reg = /(?<=houdunren)\d+/i
  console.log(hd.match(reg));

  // 匹配前后都是数字的内容
  reg = /(?<=\d)[a-z]+(?=\d{3})/i;
  console.log(hd.match(reg));

  // 将所有的超链接替换为 houdunren.com
  const html = `
    <body>
      <a href="https://baidu.com">百度</a>
      <a href="https://yahoo.com">雅虎</a>
      <a href="https://google.com">谷歌</a>
    </body>`;
  let regexp = /(?<=<a.*href=(['"])).+?(?=\1)/gi;
  let result = html.replace(regexp, "https://houdunren.com");
  console.log(result);

  // 视频添加上链接
  const body = `
    <body>
      <main>后端人视频不断录制案例丰富的视频</main>
    </body>`;

  const re = /(?<=后盾人)视频/gi;
  result = body.replace(re, (v) => {
    return `<a href="https://houdunren.com/">${v}</a>`
  });
  console.log(result);


  // 电话号码后四位模糊处理
  let users = `
    画师奎电话: 13245567870
    阴阳师电话: 14233567773
  `;

  reg = /(?<=\d{7})(\d+)/g;
  users = users.replace(reg, (_strj) => {
    return '*'.repeat(4);
  });

  console.log("users: ", users);

  // 获取标题内容
  const title = `<h1>hou dun ren record meaning video tutorial</h1>`;
  reg = /(?<=<h1>).*(?=<\/h1>)/g;
  console.log(title.match(reg));

}

// 3.


// 正则表达式中的断言
const asserts = () => {
  beforeAssert();
  afterAsset();
}

export default {
  asserts
}
