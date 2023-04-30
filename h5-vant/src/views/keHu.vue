<template>
  <div class="page">
    <topNav navTitle="客户"></topNav>
    <div class="hn-khlist-cont">
      <van-list
        v-model="khList._loading"
        :finished="khList._noMore"
        finished-text="没有更多了"
        @load="getList"
      >

        <div class="hn-khlc-item" v-for="(item,index) in khList._list" @click="hnRouterPush('/keHuInfo')">
          <div class="hn-khlci-bg">
            <div class="hn-khlci-left">
              <van-tag class="hn-mrr10" type="primary">{{ item.whetherTransfer?'同事转移':'非转移' }}</van-tag>
              <div class="hn-khlcil-info">
                <div class="hn-khlcili-name">
                  <span>{{item.customName}}</span>
                  <span class="hn-sline12"></span>
                  <span>{{ item.gender==0?'女':item.gender==1?'男':'未知' }}</span>
                  <span class="hn-sline12" v-show="item.customLevel"></span>
                  <span>{{ item.customLevel }}</span>
                </div>
                <div class="hn-tip">电话：{{ item.phone }}</div>
              </div>
            </div>
            <van-icon class="element-icons" class-prefix="el-icon" size="15" name="xiangyoujiantou" />
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
      khList:new Paging('/custom/getCustomPage', { order:"id DESC" },'post'),
    }
  },
  created(){
    console.log(this.khList)
  },
  methods: {
    getList(){
      this.khList.exec()
    },
  }
}
</script>

<style scoped>

</style>