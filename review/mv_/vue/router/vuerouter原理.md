# VueRouter的原理
+ 当我们全局配置 Vue.use(VueRouter)
-->Vue会找到VueRouter的入口文件( "main": "dist/vue-router.common.js",
                                 "module": "dist/vue-router.esm.js",)
moudule的级别高于main
这句话会让vue-router监听到hashChange或者popState事件
-->hashChange事件是hash模式的监听事件
-->popState事件是history模式的监听事件
+ 第一步Vue.use()初始化之后会给_route添加一个监视，更改后更新视图
+ 禁用组件的其他事件，只对click事件进行操作(<router-link to='/xxx'>点我跳转</router-link>)
+ 将'/xxx'匹配配置在router.js中的所有路由配置，match到路由响应的组件

+ 将match到的组件保存到_route中，供<router-view></router-view>使用
+ 触发更新，调用_router，获取到_router里面匹配到的组件，渲染页面

**hash模式总结**
1、Vue.use()之后会给_route绑定一个监视hashchange事件
2、router.js中定义的routes对象中定义了路由与组件的匹配关系
3、等待事件触发，在routes对象中的获得到的matched赋值给_route对象
4、触发绑定在_route对象上的hashchange事件，router-view会获取到_router来渲染页面

**history模式**
history模式的原理基于history.pushState()；
在我们点击a标签之后，如果不是hash模式(即/#),页面必定会进行跳转发起请求
使用history.pushState()可以实现url的改变，且不会触发页面的重新请求
js通过location.pathname的方式获取url值，进行页面的局部改变
而如果使用history.go\history.forward会根据历史记录切换页面
切换的过程中会触发popstate事件
