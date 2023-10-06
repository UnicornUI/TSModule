import modNumber from "./number";
import modString from "./string";
import modBoolean from "./boolean";
import modNone from "./none";
import modAny from "./any";
import modArray from "./array"
import modFunc from "./function"
import modInterface from "./interface"
import modClass from "./class"

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
  // array, tuple
  modArray.declare();
  // function
  modFunc.declare();
  // interface 
  modInterface.declare();
  // class
  modClass.declare();
  modClass.staticMethod();
  modClass.classInterface();
}

export default { run };
