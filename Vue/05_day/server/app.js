// 引入模块
const Koa = require('koa');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');
const render = require('koa-art-template');
const path = require('path');
// 创建服务器
let app = new Koa();
// 创建路由对象
let router = new Router();
// 配置中间件
render(app,{
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
})
// 处理响应
router.get('/home',(ctx)=>{
    ctx.body = '我是首页'
})
router.get('/blog',(ctx)=>{
    ctx.body = '我是博客'
})
router.get('/user/:id',(ctx)=>{
    console.log(ctx.params);
    if(ctx.params.id==='1'){
        ctx.body = '我是用户一'
    }else{
        ctx.body = '我是用户二'
    }
})
// 使用中间件
app.use(async (ctx,next)=>{
    //跨域问题的处理
    //options复杂跨域会请求一个预检测
    console.log(ctx.request.header.origin);
    ctx.response.set("Access-Control-Allow-Origin", "*");
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
app.use(bodyparser());
app.use(router.routes());
app.use(router.allowedMethods());
// 监听端口
app.listen(8888,function(){
    console.log('服务器启动在8888端口');
    
})