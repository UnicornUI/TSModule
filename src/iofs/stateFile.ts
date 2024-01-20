import fs from "fs";


// 判断文件是否存在
const fileOrDirExists = () => {
  // 过时的方法
  fs.exists("./temp/log.json", (ok) => {
    // 这里直接返回的是结果, bool
    console.log(ok);
  });

  // 现在建议使用的方法, 这里与其他接口保持灵一致
  // 优先返回错误，优先处理错误
  fs.access("./temp/log.json", (err) => {
    if (!err) {
      console.log("成功访问");
    } else {
      console.log("访问文件异常", err.message)
    }
  });
}

const getFileState = () => {

  fs.stat("./src/iofs", (err, info) => {
    if (err) {
      console.log("获取文件信息错误", err);
      return;
    }
    console.info(info);
  })
}



const state = () => {
  fileOrDirExists();
  getFileState();
}


export default {
  state
}

