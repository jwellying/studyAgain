import Vue from 'vue'
import App from './App.vue'
import router from './router'

// mixin的全局使用
import myMixin from './myMixin'
Vue.mixin(myMixin);

// 插件的使用
import myPlugin from './myPlugin'
Vue.use(myPlugin);
Vue.log();


Vue.config.productionTip = false

new Vue({
  directives:{
    log:{
      bind:function(el){
        console.log(el);
        
      }
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
