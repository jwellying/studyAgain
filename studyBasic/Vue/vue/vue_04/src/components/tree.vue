<template>
  <div class="tree">
      <div @click='toggle'>
          <span v-if='isFolder'>[{{open?'+':'-'}}]</span>
          {{treeData.title}}
      </div>
      <ul v-show="open" v-if='isFolder'>
         <Tree class="item" v-for='treeData of treeData' :key='treeData.title'></Tree>
     </ul>
  </div>
</template>

<script>
export default {
    name:'Tree',
    data(){
        return {
            // isFolder:true,
            open:true,
            treeData:{
                title:'层级1',
                children:[{
                    title:"层级1-1",
                    children:[{
                        title:'层级1-1-1'
                    },{
                        title:'层级1-1-2'
                    }]
                },{
                title:"层级1-2",
                    children:[{
                        title:'层级1-2-1'
                    },{
                        title:'层级1-2-2'
                    }]
                },{
                title:"层级1-3",
                    children:[{
                        title:'层级1-3-1'
                    },{
                        title:'层级1-3-2'
                    }]
                }]
            }

        }
    },
    computed:{
        isFolder(){
            return this.treeData.children && this.treeData.children.length
        }
    },
    methods:{
        toggle(){
            if(this.isFolder){
                this.open = !this.open;
            }
        }
    }
}
</script>

<style>

</style>