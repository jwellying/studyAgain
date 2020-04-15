<template>
  <div class="home">
    <h1>this is home page</h1>
    <!-- <tree></tree> -->
    <myTree :treeData='treeData'></myTree>
  </div>
</template>

<script>
// @ is an alias to /src
import Tree from '@/components/tree.vue'
import myTree from '@/components/myTree.vue'
export default {
  name: 'home',
  components: {
    Tree,
    myTree
  },
  data(){
      return {
          treeData:{
              id:1,
              title:'title-1',
              children:[{
                  id:2,
                  title:'title-1-1'
              },{
                  id:3,
                  title:'title-1-2'
              }]
          }
      }
  }
}
</script>
