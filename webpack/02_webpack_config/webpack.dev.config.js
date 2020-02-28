//配置文件
// 入口
module.exports = {
    //入口
    entry:{
        "main":'./main.js'
    },
    output:{
        filename:'./build.js'
    },
    //文件监视，自动更新build.js
    watch:true
}