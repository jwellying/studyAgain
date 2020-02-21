//获取核心对象
const http = require('http');
const fs = require('fs');

//创建接口
var server = http.createServer();
//监听接口
server.on('request',(req,res)=>{
    if(req.url==='/'){
        //请求路径为‘/’表示请求的是页面（返回index页面）
        fs.readFile('./index.html',(err,data)=>{
            // console.log(data);
            res.writeHead(200);
            res.end(data);
            
        })
    }else if(req.url==='/test'){
        //如果请求路径为‘/test’说明发送了ajax请求
        //数据会一点点输出（当加载量大时）
        res.writeHead(200,{'content-type':'application/octet-stream'})
        setInterval(() => {
            res.write(' '+Date.now()+'^_^');
        }, 2000);
    }
}).listen(8080)