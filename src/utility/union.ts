// TS 联合类型, 一个变脸可以是多种可能的类型
//
const use_union = () => {
  let x: string | number = "10";
  x = 10;
  console.log(`union:${x}`);
}

// 使用场景
const use_scene = () => {
  methodArgs("10");
  // getElement();
  returnValue();

}

const returnValue = () =>  {
  let x = setTimeout(() => {
    console.log(100);
  }, 100);
  // 由于 x 类型的值不确定，
  // 所有 clearTimeout 这个函数的参数定义使用的就是一个联合类型
  // function clearTimeout(id: number | undefined): void;
  clearTimeout(x);
}

// 使用 css 选择器选择某个对象的时候
const getElement = () => {
  // 当元素可以被取出来则是 HTMLElement, 取不出来就是 null
  return document.querySelector("img>.box")
}

// 用作函数的参数
const methodArgs: (num : string | number) => number = (num) => {
  console.log(typeof num)
  if (typeof num == "number") {
    return num
  }else {
    return num.length
  }
}

export default {
  useUnion: use_union,
  useScene: use_scene
}
