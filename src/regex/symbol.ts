
// ------------------------------------------
// 正则中运用的符号
// ------------------------------------------


// 1. 选择符 `|` , 表示左右两边满足其中一个就可以
const selector = () => {

  let tel = "010-12345678";
  //错误结果：只匹配 | 左右两边任一结果
  console.log(tel.match(/010|020\-\d{7,8}/));
  //正确结果：所以需要放在原子组中使用
  console.log(tel.match(/(010|020)\-\d{7,8}/));

  // 检测文本中
  console.log(/houdunren|hdcms/.test("hdcms")); //true
  console.log(/houdunren|hdcms/.test("houddunren")); //true

}

// 2. 转义字符 `\`, 表示一些特殊字符需要恢复原始的字符含义
const convertMean = () => {

  const url = "https://www.houdunren.com";
  console.log(/https:\/\//.test(url)); //true

  let price: string = "12.23";
  //含义1: . 除换行外任何字符 	含义2: .普通点
  //含义1: d 字母d            	含义2: \d 数字 0~9
  console.log(/\d+\.\d+/.test(price));

  //字符串中 \d 与 d 是一样的，所以在 new RegExp 时\d 即为 d
  console.log("\d" == "d");

  //使用对象定义正则时，可以先把字符串打印一样，结果是字面量一样的定义就对了
  console.log("\\d+\\.\\d+");
  let reg = new RegExp("\\d+\\.\\d+");
  console.log(reg.test(price));


  // 下面是网址检测中转义符使用
  console.log(/https?:\/\/\w+\.\w+\.\w+/.test(url));

}


// 3. 字符边界 `^`, `$` (分别表示首位, 末尾)
const stringBorder = () => {

  // 限定字符的其实位置
  const hd = "www.houdunren.com";
  console.log(/^www/.test(hd)); //true

  //匹配内容必须以.com结束
  console.log(/\.com$/.test(hd)); //true

  // 限定一个用户名只能有多少 3 ~ 6 的小写字母组成
  validateName("ancion")
  validateName("234@hi")
}

const validateName = (name: string) => {
  let res = name.match(/^[a-z]{3,6}$/i);
  console.log(res ? "正确" : "失败");
}


// 4. 原子字符, 是正则表达式中最小元素，表示单一字符
const atomicItem = () => {

  /**
   * `\d` 	匹配任意一个数字 [0-9]
   * `\D` 	与除了数字以外的任何一个字符匹配[^0-9]
   * `\w` 	与任意一个英文字母,数字或下划线匹配 [a-zA-Z_]
   * `\W` 	除了字母,数字或下划线外与任何字符匹配 [^a-za-z_]
   * `\s` 	任意一个空白字符匹配，如空格，制表符\t，换行符\n [\n\f\r\t\v]
   * `\S` 	除了空白符外任意一个字符匹配 [^\n\f\r\t\v]
   * `.`  	匹配除换行符外的任意字符
   */

  // 匹配任意数字
  let hd: string = "houdunren 2010";
  console.log(hd.match(/\d/g)); //["2", "0", "1", "0"]

  // 匹配所有电话号码
  let attact = `
    张三:010-99999999,李四:020-88888888
  `;
  let mobiles: RegExpMatchArray | null = attact.match(/\d{3}-\d{7,8}/g);
  console.log(mobiles);

  // 获取所有的用户名
  let names: RegExpMatchArray | null = hd.match(/[^:\d-,]+/g);
  console.log(names);

  // 匹配任意非数字
  console.log(/\D/.test("2029")); //false


  // 匹配字母数字下划线
  let email: string = "hdcms@gmail.com";
  //["h", "d", "c", "m", "s","g", "m", "a", "i", "l", "c", "o", "m"]
  console.log(email.match(/\w/g));


  // 匹配除数字，字母下划线的所有字符
  console.log(/\W/.test("@.")); //true


  // 匹配空白字符
  console.log(/\s/.test(" ")); //true
  console.log(/\s/.test("\n")); //true


  // 匹配除了空白字符的所有字符
  console.log("h 2021@".match(/\S/g));  // ["h", 2", "0", "1", "0","@"]


  // 以`.` 代替任意字符，如果要匹配点的真实含义，需要转义
  console.log(/\w+.com/i.test(email)); //true
  console.log(/\w+\.com/i.test(email)); //false


  // `.` 除了换行符可以匹配任意字符, 因此只能匹配到一个
  const url = `
    https://www.houdunren.com
    hdcms.com
  `;
  console.log(url.match(/.+/)?.[0]);


  // 正则的模式修饰符 s 表示 单行模式(忽略了换行符), 这时候 `.` 匹配了所有
  let res = url.match(/.+/s);
  console.log(res?.[0]);


  // 正则中空格会按照普通的字符来对待
  let tel = `010 - 999999`;
  console.log(/\d+-\d+/.test(tel)); //false
  console.log(/\d+ - \d+/.test(tel)); //true


  // 正反组合的类型可以用来匹配所有的字符
  // [\s\S]+ [\w\W]+ [\d\D]+
  console.log("---------------------------------------------------------------------");
  console.log("[\\s\\S]+ [\\w\\W]+ [\\d\\D]+", "这样的反义词对组成的原子表可以匹配任意字符");
  let result = url.match(/[\s\S]+/);
  console.log(result?.[0]);

}

export default {
  selector,
  convertMean,
  stringBorder,
  atomicItem,
}
