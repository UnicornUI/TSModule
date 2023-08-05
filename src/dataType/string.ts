// TS 中使用 string 表示字符串,
// 与 JS 中的 Number 类型对应
const declare = () => {
  // 使用单引号或者双引号包裹的字符
  let x: string = "alex";
  console.log(typeof x);
}


const strMethod = () => {

}

export default {
  declare,
  strMethod
}
