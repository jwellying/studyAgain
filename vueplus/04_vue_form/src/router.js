import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login'
// import Router from '../my-vueRouter'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
