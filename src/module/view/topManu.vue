<template>
  <div class="top_manu">
      <ul>
        <li v-for="(item,index) in manu" :key="index">
          <a href="#" @click="clickLink($event,index)" :class="activeIndex==index?'active':''">{{item}}</a>
      </li>
      <li>………</li>
      </ul>
      <div>
        <button>注册</button>
        <button>登录</button>        
      </div>
  </div>
</template>

<script>
export default {
  name: "topManu",
  data() {
    return {
      manu: ["博客", "首页", "发现", "最新", "活动", "想法"],
      activeIndex: 0
    };
  },
  methods: {
    clickLink($event, index) {
      this.activeIndex = index;
    }
  }
};
</script>


<style lang="scss" scoped>
.top_manu {
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
  ul {
    display: flex;
    li {
      padding-left: 18px;
      a {
        color: #fff;
        padding-bottom: 4px;
      }
      .active {
        border-bottom: 1px solid #fff;
      }
    }
  }
  button {
    width:60px;
    height:30px;
    line-height:30px;
    background-color: transparent;
    border: 0;
    color:#fff;
    text-align: center;
    box-sizing: border-box;
  }
  button:nth-child(1){
    background-color:#AE0000;
  }
  button:nth-child(1):hover{
    background-color:#DC143C;
  }
  button:nth-child(2){
    border:1px solid #fff;
  }
  button:nth-child(2):hover{
    background-color: #fff;
    color:black;
  }
}
</style>
