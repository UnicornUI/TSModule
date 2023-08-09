//
// TS 中的函数类型
//

// 为函数限定类型
const fn: (x: number, y: number) => number = (x, y) => {
  return x + y
};

// 函数的参数是可选的时候, 在变量后天加 ?
const func: (x: number, y?: number) => number = (x, y) => {
  if (typeof y == "undefined") {
    return x
  } else {
    return x + y
  }
}

// 函数默认值 
const fun: (x: number, y?: number) => number = (x, y = 10) => {
  return x + y
}

function fc(x: number, y: string): number {
  return x + y.length
}


// 函数的重载, 这里 ts 语法会报错, 显示出现了重复的标识符
// FIXME: 不知道是不是版本的问题
//function fc(x: number): number {
//  return x
//}

const declare = () => {
  fn(1, 3);
  func(10)
  fun(10, 2)
  fc(19, "aled")
}

export default { declare }
