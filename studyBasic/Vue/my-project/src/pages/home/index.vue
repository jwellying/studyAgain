<template>
  <div>
    <div>
    <mt-swipe :auto='4000' class="lunbo" >
      <mt-swipe-item v-for='(img) in imgs' :key="img.id">
        <img :src='img.url' alt="">
      </mt-swipe-item>
    </mt-swipe>
    <myUl></myUl>
    </div>
    <div>{{test}}</div>
    <p>{{test2}}</p>
  </div>
</template>

<script>
export default {
    name:'home',
    data(){
      return{
        // imgs:[],
        test:'12',
        test2:'34'
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
      console.log(this.$data);
      
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