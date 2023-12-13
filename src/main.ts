import dataType from "./dataType/index"
import utility from "./utility/index";
import regex from "./regex/index";
import iofs from "./iofs/index";
import qsstr from "./qs/index";

const main = () => {
  dataType.run();
  utility.run();
  regex.run();
  iofs.run();
  qsstr.run();
}

main();
