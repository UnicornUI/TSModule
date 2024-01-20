import openFile from "./openFile";
import stateFile from "./stateFile"
import readFile from "./readFile";
import writeFile from "./writeFile";

/** 
 * > 此处用于展示 node 中内模块 fs 的使用
 */

// 用于演示 fs 操作
const run = () => {
  // 打开文件
  // openFile.open();
  // 查看文件状态
  // stateFile.state();
  // 写入文件
  writeFile.write();

  // 读取文件
  readFile.read();
}

// 导出当前组件
export default {
  run
}
