//获取express
const express = require('express');
//创建服务器
let server = express();
//创建路由
let router = express.Router();

//判断路由
router.get('/login',(req,res)=>{
    res.end('login page');
    console.log('login page');
}).get('/register',(req,res)=>{
    res.end('register page')
    console.log('register page');
})

//使用路由
server.use(router);

//监听端口
server.listen(8080,function(){
    console.log('服务器在8080端口启动');
})
