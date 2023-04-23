<template>
  <div class="page">
    <!-- 顶部导航栏 -->
    <topNav :showLeftArrow="false" navTitle="OA"></topNav>
    <!-- 功能管理模块组件 -->
    <div v-show="tabActive==0">
      <GongNeng></GongNeng>
      <!-- 退出登录按钮 -->
      <div class="hn-logout-btn">退出登录</div>
    </div>
    <!-- 报表模块组件 -->
    
    <!-- 底部tabbar -->
    <van-tabbar v-model="tabActive">
      <van-tabbar-item icon="apps-o">
        功能
      </van-tabbar-item>
      <van-tabbar-item  color="#409EFF">
        <span>派单</span>
        <template #icon>
          <!-- 自定义突起图标样式 -->
          <div class="myMidTabbar">
            <van-icon size="30" color="#1989fa" name="add"></van-icon>
          </div>
          <!-- 占位的图标 -->
          <van-icon name="add"></van-icon>
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="chart-trending-o">
        报表
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import GongNeng from "@/components/GongNeng.vue";
export default {
  components:{ GongNeng, },
  computed: {

  },
  data() {
    return {
      tabActive: 0,
    };
  },
  methods: {

  },
  mounted() {

  },
};
</script>

<style lang="less" scoped>
.myMidTabbar{
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px -2px 10px -6px gray;
  position: absolute;
  top: -15px;
  left: -6px;
  z-index: 2;
}
.van-tabbar-item{
  position: relative;
}
</style>