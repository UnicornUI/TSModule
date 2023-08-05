import utilUnion from "./union"
import typeAssertions from "./typeAssertions"


// 运行当前模块内的代码
const run = () => {
  // union
  utilUnion.useUnion();
  utilUnion.useScene();

  // assertion
  typeAssertions.useAssertion();
  typeAssertions.useScene();

}

export default { run };
