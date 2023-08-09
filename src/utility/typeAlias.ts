//
// TS 中的类型别名, 这是一个可以灵活的定义出几乎所有类型的魔术
//

// 为内置类型使用新的别名
type int = number
// 自定义函数类型
type Fun = (str: string) => Array<string>
// 定义对象
type User = {
  name: string;
  age: number;
  nickname: NickName;
  money: StrOrNumber;
}

// 定义一个联合类型，联合类型的定义是类型别名的绝活
// 这是接口无法实现的
type StrOrNumber = number | string;
type NickName = string | string[];


// 使用到了上述定义的函数别名
const strsplit: Fun = (str) => {
  return str.split("");
}


const useAlias = () => {
  let x: int = 10;
  console.log("alias: ", x)

  const user: User = {
    name: "alze",
    age: 18,
    nickname: ["zlea", "alex"],
    money: "342424.023424",
  }
  console.log(`user alias: ${JSON.stringify(user)}`)

  const chars = strsplit("hello world");
  console.log("chars: ", chars)

}


export default { useAlias }
