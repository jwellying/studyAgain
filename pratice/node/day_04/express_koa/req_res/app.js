//引入对象
const koa = require('koa');
//创建服务器
let ser = new koa();
//处理响应
ser.use(function(context,next){
    console.log(context.url);
    console.log(context.method);
    console.log(context.header);
    next();
})
ser.use(function(ctx){
    ctx.set("my-text","123");
    ctx.status=200;
    ctx.body='<h1>hhh</h1>';
})
//监听端口
ser.listen(8080,function(){
    console.log('服务器启动在8080端口');
})