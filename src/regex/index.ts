import { moduleSeparator } from "../utils";
import regexBuild from "./build";
import regexSymbol from "./symbol";
import regexMode from "./mode";
import regexTable from "./table";
import regexGroup from "./group";
import regexMatchNum from "./matchNum";
import regexMethod from "./method";

/**
 * 用于测试正则表达式使用
 */
const run = () => {

  moduleSeparator("regexp module")

  // 构建正则表达式的方式
  regexBuild.createRegexp();

  // js 中正则使用的符号
  regexSymbol.selector();

  // 原子字符
  regexSymbol.atomicItem();

  // 正则的修正模式
  regexMode.mode();

  // 正则原子表
  regexTable.table();

  //正则原子组
  regexGroup.group();

  // 重复匹配
  regexMatchNum.num();

  // 正则方法 
  regexMethod.methods();

}

export default {
  run
}
