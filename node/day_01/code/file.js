//同步文件的IO
const fs = require('fs');
//读取文件就是Input
fs.readFile('./file.js','utf8',(err,data)=>{
    if(err) throw err;
    // console.log(data.toString('utf8'));
    
})
//修改文件就是Output
//flag:"a"表示追加
fs.writeFile('./file','我今天没吃晚饭',{flag:'a'},(err)=>{
    if(err) throw err;
    console.log('文件写入完成');
})
//fs.appendFile('文件路径'，'追加内容'，callback)