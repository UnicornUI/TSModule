
// TS 交叉类型，
// --------------------------------------------------------------
// 用于将多个接口或者类型交叉形成一个具有多个类型属性的一个新的类型
// (这种交叉行为一般发生在接口或者对象类型的别名之间)
//
interface Person {
  name: string;
}

interface UserInfo {
  password: string;
}

type Human =  {
  walk: boolean;
}

// TS 类型声明
//
const useCross = () => {
  let alex: Person & UserInfo = {
    name: "alex",
    password : "123456",
  }
  console.log(`user: ${JSON.stringify(alex)}`);

  // 接口与类型别名之间的交叉
  let maria: Person & Human  = {
    name: "maria",
    walk: true,
  }
  console.log(`maria: ${JSON.stringify(maria)}`)

  // 类型与类型之间也可交叉

}

export default {
  useCross
}
