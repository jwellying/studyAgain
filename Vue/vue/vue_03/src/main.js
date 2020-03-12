import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 配置插件
import myPlugin from './myPlugin'
Vue.use(myPlugin);

import './assets/css/gobal.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
