import regexInit from "./regex";
import regexSymbol from "./symbol"

/**
 * 用于测试正则表达式使用
 */
const run = () => {
  regexInit.createRegexp();

  // js 中正则使用的符号
  regexSymbol.selector();
  regexSymbol.atomicItem();


}

export default {
  run
}
