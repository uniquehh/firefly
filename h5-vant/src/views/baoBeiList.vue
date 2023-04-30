<template>
  <div class="page">
    <topNav navTitle="报备列表"></topNav>
    <div class="hn-bblist-list">
      <van-list
        v-model="pdList._loading"
        :finished="pdList._noMore"
        finished-text="没有更多了"
        @load="getList"
      >
        <div class="hn-bblist-item" v-for="(item,index) in pdList._list" :key="index">
          <div class="hn-bblisti-left">
            <div class="hn-bblistil-name">{{ item.customName }}</div>
            <div class="hn-bblistil-tagtel">
              <van-tag size="medium" type="primary">派单客户</van-tag>
              <div class="hn-bblistilt-tel">{{ item.phone }}</div>
            </div>
          </div>
          <div class="hn-bblisti-right">
            <div class="hn-bblistir-text">发布时间</div>
            <div class="hn-bblistir-time">{{item.dispatchTime}}</div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>
<script>
import { Paging } from '@/util/paging'
export default {
  data() {
    return {
      pdList:new Paging('/dispatch/getDispatchList', { order:"id DESC" },'post'),
    }
  },
  created(){

  },
  methods: {
    getList(){
      this.pdList.exec()
    },
  }
}
</script>
<style scoped>
.hn-bblist-list{
  padding: 5px 0;
}
</style>