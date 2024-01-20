import fs from "fs";



// 文件的创建
const fileOpenAndWrite = () => {
  // 打开文件, 获取到文件描述符, 当我们使用写入模式打开
  // 文件的时候，如果文件不存在会自动创建, 如果目录不存在会报错
  fs.open("./temp/log.json", "w", (err, file) => {
    if (err) {
      console.error(`open file error: ${err} `);
      return;
    }
    // 利用文件描述符写入文件内容
    fs.write(file, '{"name":"alex"}', (err) => {
      if (err) {
        console.log("文件写入失败", err);
        return;
      }
      console.log("写入成功");
    });

  });
}

const fileWriteSync = () => {
  const file = fs.openSync("./temp/log.json", "w")
  fs.writeSync(file, `{"name":"maria"}`);
}


function write() {
  // 异步写入
  // fileOpenAndWrite()
  
  // 同步写入
  fileWriteSync()
}


export default {
  write
}
