//引入对象
const Koa = require('koa');
const render = require('koa-art-template');
const Router = require('koa-router');
const path = require('path');
const bodyparser = require('koa-bodyparser');
const fs = require('fs');
//创建服务器
let app = new Koa();
let router = new Router();
//配置中间件
render(app,{
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
})
//处理响应
router.get('/',async (ctx)=>{
    // ctx.render('01_axois.html');
    ctx.body = {
        msg:'ok',
        token:'user1'
    }
})
router.post('/post',async (ctx)=>{
    console.log(ctx.request.body);
    if(ctx.request.body.userName=='jack'){
        ctx.body = {
            msg:'你是jack'
        }
    }else{
        ctx.body='你是谁'
    }
})

//使用中间件
app.use(async (ctx,next)=>{
    //跨域问题的处理
    //options复杂跨域会请求一个预检测
    // console.log(ctx.request.header.origin);
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
app.use(router.allowedMethods);
//监听端口
app.listen(8888,()=>{
    console.log('服务器启动在8888端口');
    
})
