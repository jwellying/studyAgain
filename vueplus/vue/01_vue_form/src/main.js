import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/body.css'
import create from '@/utils/create'

// 自定义插件
Vue.prototype.$create = create;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
