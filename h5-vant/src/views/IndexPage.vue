<template>
  <div class="page">
    <!-- 顶部导航栏 -->
    <topNav :showLeftArrow="false" navTitle="OA"></topNav>

    <router-view></router-view>
    
    <!-- 底部tabbar -->
    <van-tabbar route v-model="tabActive">
      <van-tabbar-item to="/gongNeng" icon="apps-o">
        功能
      </van-tabbar-item>
      <van-tabbar-item to="/baoBei" color="#409EFF">
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
      <van-tabbar-item to="/baoBiao" icon="chart-trending-o">
        报表
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      tabActive: 0,

    };
  },
  methods: {

  },
  created(){
    this.hnRouterPush('/gongNeng')
  },
  mounted() {
    if(!localStorage.getItem('chinaArea'))this.getChinaAreaList();
    
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