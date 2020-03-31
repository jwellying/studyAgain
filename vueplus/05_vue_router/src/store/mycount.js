import Vue from 'vue'
import myVuex from '../myVuex'

Vue.use(myVuex);

export default new myVuex.Store({
    state: {
        num:0
      },
      mutations: {
        add(state,n=1){
          state.num += n;
        }
      },
      actions: {
        addAsync({commit}){
          return new Promise((resolve,reject)=>{
            setTimeout(()=>{
              commit('add');
              resolve({ok:1});
            },1000)
          })
        }
      },
      getters: {
        getNum(state){
          return '获取num：' + state.num;
        }
      }
})
