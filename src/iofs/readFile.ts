import fs from "fs";


// 读取文件内容
const readFileCallback = () => {

  fs.readFile("./temp/log.json", "utf8", (err, content) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(content);
  });
}


const readFileSync = () => {
  const content = fs.readFileSync("./temp/log.json", "utf8");
  console.log("content", content);

}


const read = () => {
  // 使用回調函數获取文件内容
  readFileCallback();
  // 同步读取文件
  readFileSync();
}

export default {
  read
}
