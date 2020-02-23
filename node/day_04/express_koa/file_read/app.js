//引入对象
const koa = require('koa');
const fs = require('fs');
// const router = require('Router');
//创建服务器
let server = new koa();

function asyncReadFile(){
    return new Promise(function(resolve,reject){
        fs.readFile('./index.html',(err,data)=>{
            if(err){ 
                //失败返回err
                reject(err);
                return ;
            }
            //成功返回数据
            resolve(data);
        })
    })
}

//响应页面
//报错，因为koa建议异步操作使用promise的写法
server.use( async (ctx)=>{
    try{
        if(ctx.url==='/'){
            //将异步函数封装成一个promise函数使用
            //调用封装函数
            // console.log('hhh');
            
            let data =await asyncReadFile();
            // console.log(data.toString());
            ctx.set('content-type','text/html;charset:utf-8')
            ctx.body = data;
    
        }else{
            ctx.body = 'err';
        }
}catch(err){
    console.log(err);
    
}
})
//监听端口
server.listen(8888,function(){
    console.log('服务器启动在8888端口');
})