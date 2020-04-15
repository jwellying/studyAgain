const fs = require('fs');
// 增
// 创建文件夹，回调函数只有一个err参数
// 用于考量是否创建成功
// 并且只能创建一次
// fs.mkdir('./test',(err)=>{
//     console.log(err);
// })

// 删
fs.rmdir('./update',(err)=>{
    console.log(err);
    
})
// 改
// fs.rename('./test','./update',(err)=>{
//     console.log(err);
// })
// 查
// readdir