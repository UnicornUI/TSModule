
class Human {
  // 共有属性, 可以在任意位置使用, 缺省修饰词的默认值
  public x: number;
  // 私有属性，在当前类中使用
  private y: number;
  // 当前类以及子类
  protected z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  // private, public, prototed 可以作用于属性和方法
  public getY() {
    return this.y;
  }
}



// 类的继承
class Person extends Human {

  // 静态属性通过类型访问
  public static className: string = "Person"

  // 在类中，成员变量在初始化的时候应该完成初始化赋值
  // 否则不会编译通过
  nickName: string;

  constructor(nickName: string) {
    super(10, 20, 30);
    this.nickName = nickName;
  }
  // 静态方法
  static checkLevel() {
    return true
  }

}
// 接口，用于定义一个类中具有哪些属性，具有哪些方法, 
// 只能公开的方法，不能定义私有的属性和方法
interface ConfigOption {
  name: string;
  age: number;
  getName: () => string;
}

class Config implements ConfigOption {
  name: string = "alex"
  age: number = 10
  getName() {
    // 共有属性, 可以在任意位置使用, 缺省修饰词的默认值
    return this.name;
  }
}


const declare = () => {
  const person = new Person("alex");
  console.log("Person: ", person)
}

const staticMethod = () => {
  // 静态方法通过类名直接调用
  let check = Person.checkLevel()
  console.log("user static method, ", check)
  console.log("user static property ", Person.className)
}

const classInterface = () => {
  const config = new Config()
  console.log("config: ", config.getName());
}


export default {
  declare,
  staticMethod,
  classInterface,
}
