
// TS 中 使用 number 表示数值类型
// 与 JS 中 Number 数据类型对应
const declare = () => {

  // TS 中的 number 类型包含了多个进制的数据，按照前缀不同来区分
  // number 类型可以指代这些数据类型
  //
  let x: number = 10;        // 十进制数据没有前缀
  let y: number = 10.01;     // 浮点数
  let a: number = 0x199;     // 十六进制数据 (`0x`, `0X`)
  let b: number = 0b101010;  // 二进制数据前缀 (`ob`, `0B`)
  let c: number = 0o721232;  // 八进制数据前缀 (`0o`, `0O`) 
  let n: number = NaN;

  // 打印时都以十进制呈现
  console.log(`${x} - ${y} - ${a} - ${b} - ${c} - ${n}`)
}


// 数值的转换
const transfer = () => {

}


export default {
  declare,
  transfer
}

