//获取express
const express = require('express');
//创建一个服务器
let server = express();
//注册一个模板引擎
//app.engine('.html',art-template)
server.engine('.html',require('express-art-template'));
//区分不同的开发环境
server.set('view options',{
    debug:process.env.NODE_ENV !=='production',
    imports:{
        num:1,
        reverse:function(str){
            return '^_^'+str+'^_^'
        }
    }
})
//配置一个默认引擎
server.set('view engine','.html');

let router = express.Router();
router.get('/list',(req,res)=>{
    res.render('index',{
        apples:[{name:'apple1'},{name:'apple2'},{name:'apple3'}]
    })
});

server.use(router);

//监听端口
server.listen(8080,function(){
    console.log('服务器运行在8080端口');
})