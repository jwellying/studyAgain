//获取对象
const Koa = require('koa');
const Router = require('koa-router');
const session = require('koa-session');
const render = require('koa-art-template');
const path = require('path');
const bodyparser = require('koa-bodyparser');
//创建服务器
let app = new Koa();
let router = new Router();

render(app,{
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
})
//处理响应
//通过任意字符串作为计算的标准，进行加密算法
app.keys = ['some secret hurr'];
 
// const CONFIG = {
//   key: 'koa:sess', 
//   maxAge: 86400000,
//   autoCommit: true, 
//   overwrite: true, 
//   httpOnly: true, //为true的时候不允许客户端操作cookie
//   signed: true,  //数字签名，防止数据被篡改
//   rolling: false, 
//   renew: false, 
//   sameSite: null, 
// };

//让cookie保存在客户端
//store 中保存的是用户信息与cookie的对应关系
//通过key可以获取到用户的session，改变用户的session
const store = {
    storage:{},
    get(key){
        return this.storage[key];
    },
    set(key,sess){
        this.storage[key] = sess;
    },
    destroy(key){
        delete this.storage[key];
    }
}

app.use(session({store}, app));

router.get('/',async (ctx)=>{
    ctx.render('index');
});
router.post('/login',async (ctx)=>{
    //做个判断
    let userName = ctx.request.body.userName;
    let password = ctx.request.body.password;
    if(userName==='jwellying'&&password==='hhh'){
        ctx.session.users = {
            username:'jwellying'
        };
        ctx.body = '登录成功';
    }else{
        ctx.body = '用户不存在';
    }
});
router.get('/list',async (ctx)=>{
    ctx.body = `当前登录的用户是${ctx.session.users.username}`;
});

app.use(bodyparser());
app.use(router.routes());
app.use(router.allowedMethods());

//监听端口
app.listen(8080,function(){
    console.log('服务器启动在8080端口');
})
