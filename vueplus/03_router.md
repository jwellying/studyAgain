# 动态路由实现权限管理
思路：当我们在实现分角色登录的app时，不同的用户能看到的页面往往是不同；
后端提供一个接口根据不同的身份请求到的数据是不同的；
返回的数据是一个路由和组件的配置对象
[{
    path:'/home',
    name:'home',
    components:home
}]
拿到之后我们要如何
# vueRouter实现原理
hash模式
```js
import Router from './myRouter'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [{path: '/',component: Home}]
})
```
new一个router对象之后，跳进vuerouter文件中，
install方法接收到vue传进来的vue对象，将router对象挂载到vue的实例上并开始初始化
初始化第一步监听事件(hashchange事件)
初始化第二步解析option中传进来的routes对象，赋值一个路由组件映射对象routerMap
初始化第三步创建组件router-link、router-view
等待hashchange事件的触发，拿到新的路由地址根据路由映射对象的对应的component赋值给router-view

# history模式
监听的是popState事件，基于pushState()可以改变地址栏的路由；

# vueRouter是如何实现嵌套路由的
首先判断routes对象的深度,从router-view的向上找他的父组件，若父组件存在且找到的父组件不是根组件，深度加一；
继续向上找，知道找到根组件，求出当前组件的深度

