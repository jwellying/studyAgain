
 //获取express
const express = require('express');
//创建服务器
let server = express();
//监听端口
server.listen(8080,function(){
    console.log('服务器启动在8080端口');
})
 //补充res.end只能响应两种数据：string和读取文件中的data
 //但express为我们提供了更多的方法
//json方法
server.use('/json',(req,res)=>{
    res.json({name:"jack"});
})
server.use('/redirect',(req,res,next)=>{
    res.redirect("http://www.baidu.com");
})
server.use('/jsonp',(req,res,next)=>{
    res.jsonp({name:'jack'});
})
server.use('/download',(req,res,next)=>{
    res.download('./app.js');
})