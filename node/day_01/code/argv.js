//process.argv属性可以用于获取命令行参数
// console.log(process.argv);
//简单的利用该属性制作一个计算器
let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);
console.log(num1);
console.log(num2);
let sum = num1 + num2;
//做个断点
console.log('计算中...');
//2秒后输出
setTimeout(()=>{
    console.log(`结果为：${sum}`);
},2000)


//全局变量filename和dirname
console.log(__dirname);
console.log(__filename);


