//引入核心对象http
const http = require('http');
//创建一个服务器
const server = http.createServer();
//基于js，node有许多on方法
// server.on('request',(req,res)=>{
    //req是客户端请求的请求对象（是只读的）
    //尝试获取请求数据
    //获取请求头
    // console.log(req.headers);
    // //获取请求行
    // console.log(req.url);
    // console.log(req.method);
    // //获取请求体
    // req.on('data',data=>{
    //     console.log(data.toString());
        
    // })    
    // res.end('现在你可以看到我了');

// })

 
server.on('request',(req,res)=>{
    //res是客户端返回数据(只写)
    //写什么
    //写头
    res.setHeader('a','a');
    res.setHeader('b','b');
    //写行
    res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    //写体
    res.write('地狱空荡荡,');
    res.write('恶魔在人间');
    res.end('!');

})

//指定一个端口打开
server.listen(8080,()=>{
    console.log('服务器启动在8080端口');
    
})