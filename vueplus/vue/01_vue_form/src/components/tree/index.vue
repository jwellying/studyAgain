<template>
 <li>
     <div @click='toggle'>
         <span v-if='isFolder'>[{{open?'+':'-'}}]</span>
         {{model.title}}  
     </div>
     <ul v-show="open" v-if='isFolder'>
         <Tree class="item" v-for='model in model.children' :key='model.title'></Tree>
     </ul>
 </li>
</template>

<script>
export default {
    name:'Tree',
    props:{
        model:Object,
        required:true
    },
    data(){
        return {
            open:false,
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
            return this.model.children && this.model.children.length
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