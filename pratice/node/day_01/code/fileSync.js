//异步文件的IO
const fs = require('fs');
//同步读取文件(出错就catch)
let data = fs.readFileSync('./file','utf8');
console.log(data);
//同步写入文件(出错就catch)
fs.writeFileSync('./file',`${data}copy版本`);