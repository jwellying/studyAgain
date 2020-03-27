<template>
  <div class="modules">
      <ul>
        <li v-for='(module) in modules' :key='module.id'>
          <router-link :to="module.route">
            <img :src='module.url'>
            <p>{{module.imgTitle}}</p>
          </router-link>
          <router-view></router-view>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      modules:[
        {id:1,url:'../../../static/img/news.png',imgTitle:'新闻',route:{name:'news'}},
        {id:2,url:'../../../static/img/goodsShow.png',imgTitle:'表演',route:{name:'show'}},
        {id:3,url:'../../../static/img/picShare.png',imgTitle:'娱乐',route:{name:'fun'}},
        {id:4,url:'../../../static/img/find.png',imgTitle:'运动',route:{name:'sports'}},
        {id:5,url:'../../../static/img/search.png',imgTitle:'音乐',route:{name:'music'}},
        {id:6,url:'../../../static/img/feedback.png',imgTitle:'养生',route:{name:'life'}}
      ]
    }
  }
}
</script>

<style>
  a{
    text-decoration: none;
    color: black;
  }
 ul{
      list-style: none;
      display: flex;
      flex-wrap: wrap;
  }
  .modules{
      height: 300px;
      width: 100%;
      /* background-color: blueviolet; */
  }
  .modules ul li{
      height: 100px;
      width: 33.3%;
      /* background-color: #ccc; */
      text-align: center;
      
  }
  .modules ul li img{
      height: 50px;
      width: 50px;
      position: relative;
  }
</style>