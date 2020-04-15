const fs = require('fs');
// 创建文件
// fs.writeFile('msg.txt','hello node',(err)=>{
//     console.log(err); 
// })
// 删除文件
fs.unlink('msg.txt',(err)=>{
    console.log(err);
    
})
// 写入文件
// 将内容追加进去 原来的内容不会消失
// fs.appendFile('msg.txt','update news',(err)=>{
//     console.log(err);
    
// })
// 读取文件
fs.readFile('./msg.txt',(err,data)=>{
    console.log(err);
    // 如果不做任何处理的话，读出的数据将是一串二进制数据流
    console.log(data.toString('utf8'));
    
})
// 或者另外一种方法(利用内置选项)
fs.readFile('./msg.txt','utf8',(err,data)=>{
    console.log(err);
    console.log(data);
})