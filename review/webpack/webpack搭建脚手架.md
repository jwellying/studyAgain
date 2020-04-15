## webpack 创建一个脚手架工具

+ 创建项目文件夹
npm init --yes
会生成一个package.json
+ 导入webpack依赖
npm install webpack -D
解释命令行指令
    -D开发依赖
    -S生产依赖
+ 引入vue.js
+ 创建main.js(入口文件)App.js(入口组件)index.html(渲染页面)
+ 命令行命令：webpack ./main.js ./build.js
+ webpack 会将vue.js main.js App.js 打包成build.js文件
+ 自添加命令行命令：
```json
"scripts": {
    "build": "webpack ./main.js ./build.js"
  },
```
+ 创建一个webpack.config.js
```js
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
```
+ 创建一个webpack.dev.config.js webpack.prod.dev.js
+ package.json 配置
```js
    "scripts": {
        "build": "webpack ",
        "dev":"webpack --config ./webpack.dev.config.js",
        "prod":"webpack --config ./webpack.prod.config.js"
    },
```
+ 下载各种loader
在webpack.dev.config.js中配置
```js
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
```
+ 生成到指定文件夹
```js
const path = require('path');
output:{
        // 为什么要自动生成dist文件夹呢
        // 在node和vue结合的时候
        // node可以读到dist静态目录下的文件
        // 利用核心对象path的resolve方法，转绝对路径
        path:path.resolve('./dist'),
        filename:'build.js'
    },
```
+ 自动打开(package.json中)
```js
"dev": "webpack-dev-server --open --hot --inline --config ./webpack.dev.config.js",

```
 