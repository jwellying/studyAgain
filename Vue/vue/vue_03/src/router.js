import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home/index'
import login from './views/login/index'
import news from './views/news/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{
        auth:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/news',
      name:'news',
      component:news
    }
  ]
})
