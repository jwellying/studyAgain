import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store =  new Vuex.Store({
  state: {
    count:0
  },
  getters:{
    getNum:(state)=>{
      return state.count;
    }
  },
  mutations: {
    addNum:(state,num)=>{
      state.count += num;
    },
    // 当我们进行一个异步操作的时候
    // 数据会丢失
    // addNumAsync:(state,num)=>{
    //   setTimeout(()=>{
    //     state.count += num;
    //   },0)
    // }
  },
  actions: {
    // 接收参数$store.getters | commit | state 
    // 这里只接受一个commit所以用了解构赋值
    // 当我们需要一个异步请求时，我们只能通过actions
    // 去触发mutations
    addNumAsync:({commit},num)=>{
      setTimeout(() => {
        commit('addNum',num);
      }, 0);
    }
  }
})

export default store;
