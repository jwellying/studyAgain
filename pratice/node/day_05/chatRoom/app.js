//获取对象
const Koa = require('koa');
const render = require('koa-art-template');
const path = require('path');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');
const static = require('koa-static');
const session = require('koa-session');
//假数据
let msg = [{
    userName:"小红",
    content:"hhh"
},{
    userName:"小明",
    content:"xxx"
}
]
//创建服务器
let app = new Koa();
//创建路由
let router = new Router();
//配置render
render(app,{
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
})
 
//通过任意字符串作为计算的标准，进行加密算法
app.keys = ['some secret hurr'];
 
//定义store对象
let store = {
    storage:{},
    get(key){
        return this.storage[key];
    },
    set(key,session){
        this.storage[key] = session;
    },
    destroy(key){
        delete this.storage[key];
    }
}

//处理响应
router.get('/', ctx =>{
    ctx.render('index.html');
});
router.post('/login', ctx =>{
    let {userName,password} = ctx.request.body;
    ctx.session.users = {
        userName
    }
    ctx.redirect('/list');
});
router.get('/list', ctx =>{

    ctx.render('list.html',{
        userName:ctx.session.users.userName,
        msg
    })
}).post('/add', ctx =>{
    let userName = ctx.session.users.userName;
    let content = ctx.request.body.msg;
    msg.push({
        userName,content
    })
    ctx.body = msgs;
})

//使用中间件
app.use(bodyparser());
app.use(session({store},app));
app.use(static('./public'));
app.use(router.routes());
app.use(router.allowedMethods);

//监听端口
app.listen(8080,function(){
    console.log('服务器启动在8080端口');
})
