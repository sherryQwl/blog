<template>
  <div class="home_img">
      <!-- 主体 -->
      <div class="top_main">
          <!-- 头部菜单部分 -->
          <topManu></topManu>

          <!-- 中间主体文字部分 -->
          <div class="top_theme">
              <P>我的博客你做主</P>
          </div>

          <!-- 输入框 -->
          <div class="top_input">
              <input type="text" name="" id="" placeholder="请输入你喜欢的">
          </div>

          <!-- 下面小字 -->
          <div class="top_subtitle">
              <ul>
                  <li>热门搜索</li>
                  <li v-for="(item,index) in searchList" :key="index">
                      <a href="#" @click="clickCard($event,index)">{{item}}</a>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import topManu from "./topManu";

export default {
  name: "myHome",
  components: {
    topManu
  },
  data(){
      return{
          searchList:['生活','爱好','影集','创新'],
          clickIndex:0
      }
  },
  methods:{
      clickCard($event,index){
          this.clickIndex = index;
      }
  }
};
</script>


<style lang="scss" scoped>
.home_img {
  position: static;
  width: 100%;
  height: 540px;
  background: url("../../assets/img/home.jpg") no-repeat center/100% 100%;
}
.top_main {
  .top_theme {
    font-size: 40px;
    font-family:'宋体'; 
    margin-top: 40px;
    color: #fff;
  }
  .top_input {
    margin-top: 30px;
    input {
      width: 340px;
      height: 40px;
      border-radius: 5px;
    }
  }
  .top_subtitle{
      display: flex;
      justify-content: space-around;
  }
}
</style>

