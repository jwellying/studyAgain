const fs = require('fs');

// 同步读取文件夹
try{
    let dir = fs.readdirSync('./node');
}catch(err){
    console.log(err);  
}
console.log(dir);

// 异步读取(回调)
// fs.readdir('./node',(err,data)=>{
//     console.log(data);
//     console.log(err);
// });

// 同步try catch
// 异步错误优先

