export default {
    // 让这个模块有独立的命名空间
    namespaced:true,
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
}