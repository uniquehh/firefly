<template>
  <div class="content">
    <div>{{ name }}</div>
    <div>
      <van-button type="primary" @click="operation('点赞关注')"
        >点我更改信息</van-button
      >
    </div>
    <div>
      <van-field v-model="num" label="数量" /><van-button
        type="primary"
        @click="getList"
        >发送请求获取笑话</van-button
      >
    </div>
    <div style="width: 100%">
      <van-list>
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </div>
    <van-button loading type="info" loading-text="加载中..." />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import testApi from "@/api/test";
export default {
  computed: {
    ...mapState("store_modular", ["name"]),
  },
  data() {
    return {
      num: 0,
      list: [],
    };
  },
  methods: {
    ...mapMutations("store_modular", ["operation"]),
    getList() {
      if(this.num==0){
        this.$toast.fail("数量不能为0");
        return
      }
      this.$toast.loading({
  message: '加载中...',
  forbidClick: true,
  duration:0
});
      testApi
        .getListAPI({ num: this.num })
        .then((res) => (this.list = res.data.data))
        .catch((err) => console.log(err))
        .finally(()=>{this.$toast.clear()});
    },
  },
};
</script>

<style>
</style>