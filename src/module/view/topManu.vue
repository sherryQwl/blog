<template>
  <div class="top_manu">
      <li v-for="(item,index) in manu" :key="index">
          <a href="#" @click="clickLink($event,index)" :class="activeIndex==index?'active':''">{{item}}</a>
      </li>
      <li>………</li>
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
  li {
    padding-left: 6px;
    a {
      color: #fff;
      padding-bottom: 4px;
    }
    .active {
      border-bottom: 1px solid #fff;
    }
  }
}
</style>
