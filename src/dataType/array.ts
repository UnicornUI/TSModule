
// TS 定义数据
const declare = () => {
  //1. 数组的定义方法
  const arr: string[] = ["alex", "peek", "call", "for"];
  //2. 数组定义的方法
  // const arr: Array<number> = [1, 3, 2, 5, 7];
  console.log("arr: ", arr);


  // 定义一个可以存放多种类型数据的数组
  const zarr: any[] = [1, "hello", [122, [124]]]
  console.log("zarr: ", zarr)

  // 定义一个元组 tuple 
  const tuple: [number, string, boolean?] = [1, "alex", true];
  // 可以使用 ? 表示某个数据是可选的
  const tupleoption: [number, string, boolean?] = [1, "alex"];
  console.log(`tupleOption: ${tupleoption}, tuple : ${tuple}`)

  // 会校验到数组越界
  // tuple[3] =  true; 


  // 多维数组
  let multiLevel: number[][] = [[1,3], [2,4]]
  // 多维数组定义2
  let multi: Array<Array<number>> = [[1,2], [2,4]]

  console.log(`multiLevel: ${multiLevel}, multi: $[multi]`);

}

export default {
  declare,
}

