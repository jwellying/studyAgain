//核心对象path(需要require导入)
const path = require('path');
//path.join()用于简单路径的拼接
let myPath = path.join(__dirname,'abc','gjh','my.txt');
console.log(myPath);
//path.resolve()用于相对转绝对
const realPath = path.resolve('./path.js');
console.log(realPath);
//path.parse()会将变量转换成一个对象
const pathObj = path.parse(myPath);
// console.log(pathObj);
//修改myPath.base 
pathObj.base = 'my.js';
myPath = path.format(pathObj);
console.log(myPath);

