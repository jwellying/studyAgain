<template>
  <div>
    <mt-swipe :auto='4000' class="lunbo" >
      <mt-swipe-item v-for='(img) in imgs' :key="img.id">
        <img :src='img.url' alt="">
      </mt-swipe-item>
    </mt-swipe>
    <myUl></myUl>
  </div>
</template>

<script>
export default {
    name:'home',
    data(){
      return{
        imgs:[]
      }
    },
    created(){
      this.$axios.get('/lunbo')
      .then((res)=>{
        console.log(res);
        this.imgs = res.data;
      })
      .catch((err)=>{
        console.log(err);
        
      })
    }
}
</script>

<style>
.lunbo{
  height: 270px;
  /* background-color: #ccc; */
}
.lunbo img{
  width:auto;
  height:auto;
  max-width:100%;
  max-height:100%;
}
.mint-swipe-indicators{
  bottom: 23px !important;
}

</style>