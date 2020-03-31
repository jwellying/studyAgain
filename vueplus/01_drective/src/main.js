import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    console.log(1);
    console.log(el);
    
    // 聚焦元素
    el.focus();
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
