import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/index'
import hot from '@/pages/hot/index';
import shopcart from '@/pages/shopcart/index';
import vip from '@/pages/vip/index';
import news from '@/pages/home/children/news';
import music from '@/pages/home/children/music';
import fun from '@/pages/home/children/fun';
import sports from '@/pages/home/children/sports';
import show from '@/pages/home/children/show';
import life from '@/pages/home/children/life';
import '../../static/css/index.css'
// 此时的router是一个局部对象
// 所以需要挂载到vue实例上
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/hot',
      name: 'hot',
      component: hot
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: shopcart
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },{
      path:'/news/list',
      name:'news',
      component:news
    },
    {
      path:'/fun/list',
      name:'fun',
      component:fun
    },
    {
      path:'/music/list',
      name:'music',
      component:music
    },
    {
      path:'/sports/list',
      name:'sports',
      component:sports
    },
    {
      path:'/show/list',
      name:'show',
      component:show
    },
    {
      path:'/life/list',
      name:'life',
      component:life
    }
  ]
})
