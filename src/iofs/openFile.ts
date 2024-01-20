import fs from "fs";


const fileOpen = () => {

  fs.open("./temp/log.json", "w", (err, file) => {
    if (err) {
      console.error(`open file error: ${err} `);
      return;
    }
    console.log("打开文件成功", file);
    // 打开成功之后可以进行下一步的操作
    // 写入内容等
  });
}

const open = () => {
  fileOpen()
}

export default {
  open
}
