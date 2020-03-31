import Vue from 'vue'
import App from './App.vue'
// vuex通过一个store仓库来进行数据管理
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
