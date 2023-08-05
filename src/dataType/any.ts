// TS 为了对 JS 做到完全兼容，用于指定一个类型放弃类型推断
// 一旦放弃了类型，则退化为 JS, 变量可以被赋予任何值
const declare = () => {

  let x: any = "alex";
  console.log(`x:${x}`)
  x = 13123;
  console.log(`x:${x}`)
  x = true;
  console.log(`x:${x}`)


  // unknow 类型, 表示对象内部属性不可修改，不可访问
  let obj: unknown = {
    name: "zele"
  }
  // 不可访问
  // console.log(obj.name)
  //
  // 不可新增
  // obj.age = 19;

  // 不可修改
  // obj.name = "maria";

  console.log(`unknown: ${JSON.stringify(obj)}`)
}

export default {
  declare,
}
