const path = require('path');
// 引入插件模块
const htmlWebpackPlugin = require('html-webpack-plugin');

//配置文件
// 入口
module.exports = {
    //入口
    entry:{
        "main":'./src/main.js'
    },
    output:{
        // 为什么要自动生成dist文件夹呢
        // 在node和vue结合的时候
        // node可以读到dist静态目录下的文件
        // 利用核心对象path的resolve方法，转绝对路径
        path:path.resolve('./dist'),
        filename:'build.js'
    },
    //文件监视，自动更新build.js
    watch:true,
    module:{
        loaders:[
            {
                // 正则匹配以css为后缀名的模块
                test:/\.css$/,
                // 遇到css文件时webpack先用css-loader去解析css
                // 然后使用style-loader生成一个包含解析完成的css代码的style标签
                // 所以loader的使用时从右向左的一个顺序
                loader:'style-loader!css-loader'
            },
            {
                // 不能随便加空格
                test:/\.(jpg|jpeg|png|svg)$/,
                loader:'url-loader?limit=60000'
                // limit的数值单位为字节
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader'
            }
        ]
        
    },
    plugins:[
            // 配置插件
            // 插件的执行顺序与元素有关
            new htmlWebpackPlugin({
                // 作为参照的的文件
                template:'./src/index.html'
            })
    ]
}
