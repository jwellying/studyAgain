//引入对象 
const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
let server = new koa();
let router = new Router();
server.use(bodyParser());
//使用进行路由
router.get('/',async (ctx)=>{
    ctx.body = 'hhh';
});
router.post('/post',async (ctx)=>{
    console.log(ctx.request.body);
    
    ctx.body = ctx.request.body;
})

server.use(router.routes());
// server.use(async (ctx)=>{
//     ctx.body = ctx.request.body;
// })
server.listen(8080,function(){
    console.log('服务器启动在8080端口');
})