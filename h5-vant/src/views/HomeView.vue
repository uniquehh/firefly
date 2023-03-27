<template>
  <div class="content">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item  color="#409EFF">
        <span>派单</span>
        <template #icon>
          <div class="test">
            <van-icon size="30" color="#1989fa" name="add"></van-icon>
          </div>
          <van-icon name="add"></van-icon>
          <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" @click="getList">导航</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("store_modular", ["name"]),
  },
  data() {
    return {
      num: 0,
      list: [],
      active: 0,
      icon: {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
      },
    };
  },
  methods: {
    ...mapMutations("store_modular", ["operation"]),
    getList() {
      console.log(this.$router)
      this.$router.push({name:'about'})
    },
  },
};
</script>

<style>
.test{
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