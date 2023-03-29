<template>
  <div class="page">
    <topNav navTitle="报备列表"></topNav>
    <div class="hn-bblist-list">
      <div class="hn-bblist-item" @click="getList">
        <div class="hn-bblisti-left">
          <div class="hn-bblistil-name">杖罚参</div>
          <div class="hn-bblistil-tagtel">
            <van-tag size="medium" type="primary">报备客户</van-tag>
            <div class="hn-bblistilt-tel">13072835456</div>
          </div>
        </div>
        <div class="hn-bblisti-right">
          <div class="hn-bblistir-text">发布时间</div>
          <div class="hn-bblistir-time">2022-09-10 01:02:00</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Paging } from '../api/paging'
export default {
  data() {
    return {
      list:new Paging('/api/asd/dasd',{})
    }
  },
  methods: {
    getList() {
      console.log(this.list.getData())
      
    },
  }
}
</script>