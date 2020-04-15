//引入对象
const express = require('express');
//创建服务器对象
let server1 = express();
//处理响应
server1.use(function(req,res,next){

    res.send('express ok!');
});
//监听端口
server1.listen(8080,function(){
    console.log('服务器1启动在8080端口');
})


//koa使用
//引入对象
const koa = require('koa');
//创建服务器对象
let server2 = new koa();
//处理响应
server2.use(function(context){
    context.body = 'koa ok';
});
//监听端口
server2.listen(8888,function(){
    console.log('服务器2启动在8888端口');
})