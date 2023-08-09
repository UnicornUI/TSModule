// TS 中的接口
//
interface Person {
  gender: number; // 0: 女, 1: 男， 2: 未知
}

// 同一个接口可以多次声明, 这些同一作用域中被多次声明的
// 接口内的属性会自动合并
//
interface Person {
  talk: () => void;
}

// 接口的继承
interface UserInfoFace extends Person {
  // 可读属性
  readonly id: number;
  name: string;
  age: number;
  // ? 表示可选的属性
  addr?: string;
  hobby?: string[];

  // 接口定义方法
  getName: () => string;

  setName: (name: string) => void;
}

const declare = () => {

  let alex: UserInfoFace = {
    id: 1002013,
    name: "alex",
    age: 18,
    gender: 0,
    getName: function() {
      return this.name;
    },
    setName: function(name: string) {
      this.name = name;
    },
    talk: function() {
      console.log("hello");
    }
  }
  console.log("alex'name is ", alex.name);
}

export default { declare }
