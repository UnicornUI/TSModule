import typeUnion from "./typeUnion"
import typeAssertions from "./typeAssertions"
import typeCross from "./typeCross";
import typeAlias from "./typeAlias"
import task from "./task"

// 运行当前模块内的代码
const run = () => {
  // union
  typeUnion.useUnion();
  typeUnion.useScene();

  // assertion
  typeAssertions.useAssertion();
  typeAssertions.useScene();

  // type cross 
  typeCross.useCross();

  // type alias 
  typeAlias.useAlias();

  // 执行并发任务
  // task.work();

}

export default { run };
