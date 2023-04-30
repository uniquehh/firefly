<template>
  <div class="page">
    <topNav navTitle="成单"></topNav>
    <div class="hn-cd-main">
      <van-list
        v-model="cdList._loading"
        :finished="cdList._noMore"
        finished-text="没有更多了"
        @load="getList"
      >
        <div class="hn-khlc-item">
          <div class="hn-khlci-bg">
            <div class="hn-khicd-info">
              <div class="hn-khlcili-name hn-mrb5">
                <span>医院</span>
                <span class="hn-sline12"></span>
                <span>项目</span>
              </div>
              <div class="hn-flex-jcbe">
                <div>￥20.00</div>
                <div class="hn-tip">2024-15-45</div>
              </div>
            </div>
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
      cdList:new Paging('/custom/getCustomPage', { order:"id DESC" },'post'),
    }
  },
  methods: {
    getList(){
      this.cdList.exec()
    },
  }
}
</script>