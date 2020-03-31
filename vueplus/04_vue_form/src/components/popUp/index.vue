<template>
  <div class='pop' v-if='isShow'>
      <p>{{title}}</p>
      <p>{{message}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isShow:false
        }
    },
    props:{
        title:{
            type:String,
            default:''
        },
        message:{
            type:String,
            required:true
        },
        duration:Number,
        default:1000
    },
    methods:{
        show(){
            this.isShow = true;
            setTimeout(()=>{
                this.hide();
            },this.duration)
        },
        hide(){
            this.isShow = false
        }
    }

}
</script>

<style scope>
.pop{
    height: 50px;
    width: 150px;
    background-color: #ccc;
    border-radius: 8px;
    z-index: 99;
    text-align: center;
    position:absolute;
    top:50%;
    left:50%;
    margin-left: -75px;
    margin-top: -25px;
}
</style>