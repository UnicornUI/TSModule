import utilUnion from "./union"
import typeAssertions from "./typeAssertions"
import typeCross from "./typeCross";
import typeAlias from "./typeAlias"

// 运行当前模块内的代码
const run = () => {
  // union
  utilUnion.useUnion();
  utilUnion.useScene();

  // assertion
  typeAssertions.useAssertion();
  typeAssertions.useScene();

  // type cross 
  typeCross.useCross();

  // type alias 
  typeAlias.useAlias();

}

export default { run };
