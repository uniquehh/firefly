<template>
  <div class="hn-top-navbar">
    <van-nav-bar fixed placeholder z-index="99" :title="navTitle">
      <template #left>
        <van-icon @click="hnRouterBack" v-show="showLeftArrow" name="arrow-left" size="20" />
      </template>
      <template #right>
        <van-popover
          v-model="showPopover"
          trigger="click"
          :actions="actions"
          @select="onSelect"
        >
          <template #reference>
            <van-icon name="ellipsis" size="25" :dot="false" />
          </template>
        </van-popover>
        
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
      showPopover: false,
      actions: [{ text: '退出登录' }],
    }
  },
  methods: {
    onSelect(action) {
      // console.log(action.text)
      this.loginOut()
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