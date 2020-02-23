//获取对象
const Koa = require('koa');
const static = require('koa-static');
const render = require('koa-art-template');
const Router = require('koa-router');
const path = require('path');
//创建服务器
let server = new Koa(); 
//创建路由
let router = new Router();
//响应
render(server,{
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
})

router.get('/',async (ctx)=>{
    ctx.render('index');
})
router.get('/login',async (ctx)=>{
    ctx.body = '登录成功';
    // ctx.redirect = 'www.baidu.com'
})
server.use(static('./js'))
server.use(router.routes());
//监听端口
server.listen(8080,function(){
    console.log('服务器启动在8080端口');
    
})

