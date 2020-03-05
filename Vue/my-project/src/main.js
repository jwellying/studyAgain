// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 声明处于开发环境
Vue.config.productionTip = true
// 配置mint-ui 开始
// 引入mint-ui
import MintUI from 'mint-ui'
// 使用插件
Vue.use(MintUI);
// 引入css
import '../node_modules/mint-ui/lib/style.css'
// 配置mint-ui 结束

// 配置axios 开始
import Axios from 'axios'
import Installer from '../src/plugin/installer'
Vue.use(Installer);
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'http://127.0.0.1:8888';
// 配置axios 结束

// 全局组件开始
import nineBox from '@/components/nineBox'
Vue.component('myUl',nineBox);
// 全局组件结束



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
