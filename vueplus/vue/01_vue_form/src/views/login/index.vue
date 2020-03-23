<template>
  <div class="login">
    <div class="bg"></div>
    <header>
        <span>login</span>
    </header>
    <myForm></myForm>
  </div>
</template>

<script>
import myForm from '../../components/form/index'
export default {
    components:{
        myForm
    }
}
</script>

<style scoped>
    .bg{
        background-image: linear-gradient(#394cf5,#b9cfe9);
        max-width: 375px;  
        overflow: hidden;
        height: 100%;
        position: absolute;
        left: 0px;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        z-index: -99;
    }
    header{
        margin: 0 auto;
        text-align: center;
        width: 100px;
        height: 100px;
        line-height: 100px;
        border-radius: 100%;
        border: 1px solid beige;
        color: beige;
        font-family: Youyuan;
        font-size: 25px;
        position:relative;
        top:100px;
    }
</style>