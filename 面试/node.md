# node项目搭建步骤
## 接口整理
+ 请求方式：同步请求 异步请求 get、post
+ 请求数据（用户名、密码等）
+ 请求url 
+ 处理返回数据为页面或者json对象 
+ 错误处理
## 依赖下载
npm 下载相关需要的依赖
## 后端代码
+ 引入对象
全局对象 process（环境变量等）
核心对象 path(路径拼接) fs(文件读写处理)
中间件 koa koa-art-template(页面渲染) koa-static(静态文件处理)
koa-router(处理路由) koa-bodyparser(处理文字信息) koa-session(session信息存储)
+ 创建服务器(new Koa())
+ 中间件的配置（render或session等）
+ 处理响应部分的代码
+ 中间件使用列表(app.use(...))
+ 监听端口
```node
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



```