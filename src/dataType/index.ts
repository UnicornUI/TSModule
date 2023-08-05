import modNumber from "./number";
import modString from "./string";
import modBoolean from "./boolean";
import modNone from "./none";
import modAny from "./any";

const run = () => {
  //  number
  modNumber.declare();
  // string
  modString.declare();
  // boolean
  modBoolean.declare();
  // undefined, null, void
  modNone.declare();
  modNone.voidMethod("void");
  // any, unknown
  modAny.declare();

  

}

export default { run };
