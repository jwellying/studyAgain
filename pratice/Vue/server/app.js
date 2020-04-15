// 引入包
const Koa = require('koa');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');
// 创建服务器
let app = new Koa();
// 创建路由
let router = new Router();
// 处理响应
router.get('/lunbo',(ctx)=>{
    ctx.body = [
        {imgId:1,url:'./static/img/bg.jpg'},
        {imgId:2,url:'./static/img/bgi.jpg'},
        {imgId:3,url:'./static/img/mamamoo.jpg'},
        
    ]
})

// 跨域解决
app.use(async (ctx,next)=>{
    //跨域问题的处理
    //options复杂跨域会请求一个预检测
    // console.log(ctx.request.header.origin);
    ctx.response.set("Access-Control-Allow-Origin", "http://127.0.0.1");
    ctx.response.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    ctx.response.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,OPTIONS");
    ctx.response.set("Content-Type", "application/json;charset=utf-8");
    console.log(ctx.method);
    
    if(ctx.method==='OPTIONS'){
        ctx.body = 200
    }else{
        await next();
    }
})

// 中间件使用
app.use(bodyparser());
app.use(router.routes());
app.use(router.allowedMethods());
// 监听端口
app.listen(8888,function(){
    console.log('服务器启动在8888端口');
    
})