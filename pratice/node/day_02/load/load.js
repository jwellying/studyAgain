//了解包的加载机制
//当使用require加载包时，我们可以获得模块的变量、属性、函数的使用权
const jq = require('jquery');
console.log(require.resolve('jquery')); //获取入口文件的目录
console.log(jq);//[Function]
//jquery 自带的package.json文件中的main属性定义了入口文件
//如果main定义的入口文件不存在呢？
//报错
//如何自建一个入口文件
//创建一个index.js（在jquery的第一级目录）