<template>
    <div class="card">
        <el-row>
           <div class="card_single">
                <el-col :span="8" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="../../assets/img/flower.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>好看的花花</span>
                            <div class="bottom clearfix">
                                <time class="time"></time>
                                <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
           </div>
        </el-row>
    </div>
</template>

<script>
import { row, card, Button } from "element-ui";
export default {
  name: "singleCard",
  data() {
    return {};
  },
  components: {
    row,
    card,
    Button
  }
};
</script>

<style lang="scss" scoped>
.card {
    max-width: 1240px;
    margin:0 auto;
  .card_single {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .el-col-8 {
      width: 24%;
    }
  }
}

.el-col-offset-2 {
  margin-left: 0;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
