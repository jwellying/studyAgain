# webpack打包执行顺序
+ 将所有模块的代码放入一个自调用函数里面，用数组保存起来
+ 根据require传入的数组索引可以知道需要引入的是哪段代码
+ 从数组中根据索引取出包含需要代码的函数
+ 执行该函数，传入一个对象module.exports
+ 我们的代码按照规定正好是通过module.exports="xxx"进行赋值
+ 函数调用结束后，module.exports被赋值
+ 最后return该对象作为require的返回值


## webpack-dev-server 一个用自动打开页面自动刷新的工具（配置见webpack.dev.config）