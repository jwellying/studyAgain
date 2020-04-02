// 导入依赖
const Koa = require('koa');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');
const render = require('koa-art-template');
// 创建服务器
let serve = new Koa();
// 创建路由
let router = new Router();
// 处理响应
router.get('/get',(ctx)=>{
    console.log(ctx.request.query);
    let callback = ctx.request.query.callback;
    // console.log(callback);
    let returnData = {
        message:'ok'
    }
    let jsonpStr = `${callback}(${JSON.stringify(returnData)})`
    ctx.type = 'text';
    ctx.body = jsonpStr;
})
// 中间件的使用
serve.use(bodyparser());
serve.use(router.routes());
serve.use(router.allowedMethods());
// 监听端口
serve.listen(8888,function(){
    console.log('服务器启动在8888端口');
    
})