
// TS 类型断言
// -------------------------------------------------------------
// TS 为 JS 启用了一个比较智能的类型系统，但是由于联合类型
// 运行期的各种变量变化的存在，有时候编码的人比编译器更清楚
// 在什么情况下变量是什么类型，因此可以对某个变量进行断言
//
const useAssertion = () => {
  let reg = /success/
  // 将函数的返回值由 any 断言为 string
  let result: boolean = reg.test(getData() as string)
  console.log(`assertion: ${result}`)
}

const getData: any = () => {
  return Math.random() > 0.8 ? "success" : "failure";
}


// 使用场景
const useScene = () => {
  // getQueryDom();
  getLength("assertion");
}


const getQueryDom = () => {
  // 由于运行时的程序的不确定性，这是类型推断这个返回值是 HTMLElement | null
  // 但是编码的人可以确定这时候一定返回的是一个 HTMLImageElement, 因此可以断言，
  // 这样一来可以方便后面使用这个确定类型的对象
  let img = document.getElementById("#img") as HTMLImageElement
  // 如果不断言，将无法访问 src 属性
  img.src = "http://xxxx.xxx.img/images/1224235351nwkff.png";
}

// 使用 typeof 判断类型之后可以自动发生类型转换
const getLength: (input: number | string) => number = (input) => {
  if (typeof input === "string") {
    return input.length
  } else {
    return input.toString().length
  }

}

export default {
  useAssertion,
  useScene,
}
