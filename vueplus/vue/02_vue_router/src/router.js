import Vue from 'vue'
// import Router from 'vue-router'
import Router from './myRouter'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About 
    }
  ]
})
