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
    }
}
