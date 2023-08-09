


interface DataType {
  name: string;
  age: number;
}

interface ResType<T> {
  code: number;
  msg: string;
  data: T[];
}

/*
let x = { "eid": "E2806995200050038F48BCC0" };
encrypt(JSON.stringify(x));

function encrypt(word) {
  let key = CryptoJS.enc.Utf8.parse("higklmnopqrstu12");
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
  return encrypted.toString();
}

function decrypt(word) {
  let key = CryptoJS.enc.Utf8.parse("higklmnopqrstu12");
  let encrypted = CryptoJS.AES.decrypt(word, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
  return encrypted.toString(CryptoJS.enc.Utf8);
}


let data = {
  "deviceId": 12313131,
  "portList": [
    {
      "id": 121122,
      "portRFID": "EEEEEEEEEEEEEEEEEEEEEEEE",
      "portValue": "EEEEEEEEEEEEEEEEEEEEEEEG",
    }
  ]
}
encrypt(JSON.stringify(x));

*/

/**
 * 常规用法
 */
const getDataList = async () => {
  return fetch(`./data/res.json`).then((res: Response) => res.json())
    .then((json: ResType<DataType>) => json);
}

const asyncDataList = async () => {
  let res: Response = await fetch(`./data/res.json`)
  let result: ResType<DataType> = await res.json()
  return result;
}


let result = await getDataList()
result.data.forEach(item => console.log(`name=${item.name}::age=${item.age}`))

let res = await asyncDataList()
console.log(res.data)


export { getDataList, asyncDataList }
