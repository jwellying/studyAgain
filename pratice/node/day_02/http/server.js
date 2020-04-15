//引入核心对象http
const http = require('http');
//创建一个服务器
const server = http.createServer();
//基于js，node有许多on方法
server.on('request',(req,res)=>{
    //req是客户端请求的请求对象（是只读的）
    res.end('现在你可以看到我了');
})

//指定一个端口打开
server.listen(8080,()=>{
    console.log('服务器启动在8080端口');
    
})