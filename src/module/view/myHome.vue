<template>
  <div class="home_img">
      <!-- 主体 -->
      <div class="top_main">
          <topManu></topManu>
          <div class="top_theme"></div>
          <div class="top_input"></div>
          <div class="top_subtitle"></div>
      </div>
  </div>
</template>

<script>
import topManu from './topManu';

export default {
  name:'myHome',
  components:{
      topManu
  },
}
</script>


<style lang="scss" scoped>

.home_img{
    position:static;
    width:100%;
    height:540px;
    background: url('../../assets/img/home.jpg') no-repeat center/100% 100%;
}

</style>

