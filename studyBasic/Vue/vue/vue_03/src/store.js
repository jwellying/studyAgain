import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num:999
  },
  mutations: {
    add(state){
      state.num++;
    }
  },
  actions: {
    addByAsync({commit}){
      // if(state.num!==1000){
      //   // commit('add');
      //   console.log(1);
        
      // }
      if(this.state.num!=1000){
        commit('add');
      }
      
      
    }
  },
  getters:{
    getNum(state){
      return state.num;
    }
  }
})
