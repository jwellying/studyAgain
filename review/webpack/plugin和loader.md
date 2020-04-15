## webpack中常见的loader
- file-loader
- css-loader
- sass-loader
- style-loader
- babel-loader
- image-loader
- eslint-loader

## webpack中常见的plugin
- define-plugin                      定义环境变量
- html-webpack-plugin                简化html文件的创建
- uglifyjs-webpack-plugin            通过UglifyES压缩ES6代码
- webpack-parallel-uglify-plugin     多核压缩,提高压缩速度
- webpack-bundle-analyzer            可视化webpack输出文件的体积
- mini-css-extract-plugin            CSS提取到单独的文件中,支持按需加载

## Loader和Plugin的不同？
+ webpack只能解析js语言，loader让webpack拥有了加载和解析非js语言的能力
+ plugin(插件)让webpack拥有更多的扩展功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
+ 用法上的不同：loader配置在module中，plugin单独配置
+ 思想上：loader就像是一个翻译官，而plugin则是利用监听webpack声明周期中广播的许多事情来达到功能扩展的目的
