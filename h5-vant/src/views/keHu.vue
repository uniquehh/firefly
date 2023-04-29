<template>
  <div class="page">
    <topNav navTitle="客户"></topNav>
    <div class="hn-khlist-cont">

      <div class="hn-khlc-item" @click="hnRouterPush('/keHuInfo')">
        <div class="hn-khlci-bg">
          <div class="hn-khlci-left">
            <van-tag class="hn-mrr10" type="primary">同事转移</van-tag>
            <div class="hn-hn-khlcil-info">
              <div class="hn-hn-khlcili-name">
                <span>姓名&nbsp;</span>
                <span>|&nbsp;</span>
                <span>女&nbsp;</span>
                <span>|&nbsp;</span>
                <span>C</span>
              </div>
              <div class="hn-tip">电话：13072835455</div>
            </div>
          </div>
          <van-icon class="element-icons" class-prefix="el-icon" size="15" name="xiangyoujiantou" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { Paging } from '@/util/paging'
export default {
  data() {
    return {
      tableData:new Paging('/custom/getCustomPage', { order:"id DESC" },'post'),
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>