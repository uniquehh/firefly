<template>
  <div>
    <van-nav-bar fixed placeholder z-index="999" :title="navTitle">
      <template #left>
        <van-icon @click="routerBack" v-show="showLeftArrow" name="arrow-left" size="20" />
      </template>
      <template #right>
        <van-icon name="ellipsis" size="25" dot />
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  props: {
    showLeftArrow: {
      default: true,
      type:Boolean,
    },
    navTitle: {
      default: '',
      type:String,
    }
  },
  data() {
    return {
      active: 0,
    }
  },
  methods: {
    routerBack() {
      this.$router.back()
    },
  }
}
</script>
<style lang="less" scoped>
.van-info--dot{
  transform: scale(0.8);
}
.van-icon{
  color: #333;
}
</style>