//引入对象(不需要写路径，会自动根据目录逐级上找)
const express = require('express');
//创建服务器
//let server = http.createServer();
//express框架封装了一些方法
let server = express();
//开启服务器监听
server.listen(8080);
//处理响应
server.use((req,res)=>{
    res.end('ok');
}); 
