// TS 中承继了 JS 中对于空的定义 
// undefined 表示从未赋值或者没有值(missing value), 只是一个标识符
// null 表示空值(曾赋过值，但是目前没有值), 这是一个关键字，不能作为标识符使用
// void 表示没有，一般用作函数返回值
//
// >> undefined 和 null 是任意类型的子类型，因此作为值可以赋值给任何变量
// >> 在严格模式下，undefined 和 null 之间是不能互相赋值的

const declare = () => {

  let x: undefined = undefined;
  let y: null = null;

  console.log(`x:${x} != y:${y}`)

  // 非严格模式下，可以赋值
  // let k: number = undefined;
  // let j: string = null;
  // y = undefined;
  // k = null;
  // console.log(`k:${k} - j:${j}`)
}


// void 表示函数没有返回值，可以省略不写
const voidMethod: (name: string) => void = (name) => {
  console.log(name);
}


export default {
  declare,
  voidMethod
}
