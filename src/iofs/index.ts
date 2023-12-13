import fs from "fs"

/** 
 * > 此处用于展示 node 中内模块 fs 的使用
 */

// 判断文件是否存在
const fileOrDirExists = () => {
  // 过时的方法
  fs.exists("./src/iofs/temp/log.json", (ok) => {
    // 这里直接返回的是结果, bool
    console.log(ok);
  });

  // 现在建议使用的方法, 这里与其他接口保持灵一致
  // 优先返回错误，优先处理错误
  fs.access("./src/iofs/temp/log.json", (err) => {
    if (!err) {
      console.log("成功访问");
    } else {
      console.log("访问文件异常", err.message)
    }
  });
}

const fileState = () => {
  fs.stat("./src/iofs", (err, info) => {
    if (err) {
      console.log("获取文件信息错误", err);
      return;
    }
    console.info(info);
  })
}

// 文件的创建
const fileOpenAndWrite = () => {
  // 打开文件, 获取到文件描述符, 当我们使用写入模式打开
  // 文件的时候，如果文件不存在会自动创建, 如果目录不存在会报错
  fs.open("./src/iofs/temp/log.json", "w", (err, file) => {
    if (err) {
      console.error(`open file error: ${err} `);
      return;
    }
    // 利用文件描述符写入文件内容
    fs.write(file, "{'name','alex'}", (err) => {
      if (err) {
        console.log("文件写入失败", err);
        return;
      }
      console.log("写入成功");
    });
  });
}

// 读取文件内容
const readFile = () => {
   
}

// 用于演示 fs 操作
const run = () => {
  fileOrDirExists();
  fileState();
  fileOpenAndWrite();
  readFile();
}

// 导出当前组件
export default {
  run
}
