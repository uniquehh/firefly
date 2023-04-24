<template>
  <div class="page">
    <div class="hn-baobei-main">
      <topNav navTitle="报备"></topNav>
      <!-- 表单区域 -->
      <div class="hn-bb-form">
        <inputPkPop label="来源" placeholder="请选择来源"></inputPkPop>
        
        <van-field label="姓名" required placeholder="请输入姓名" />
        <div class="hn-input-cell">
          <div class="hn-inputc-left">
            <span class="hn-inputcl-star">*</span>
            <span>性别</span>
          </div>
          <div class="hn-inputc-right">
            <div class="hn-inputcr-plhd">请选择性别</div>
            <!-- <div class="hn-inputcr-val">这是选择的值</div> -->
            <van-icon name="arrow" size="15" />
          </div>
        </div>
        <div class="hn-input-cell">
          <div class="hn-inputc-left">
            <span class="hn-inputcl-star">*</span>
            <span>跟进状态</span>
          </div>
          <div class="hn-inputc-right">
            <div class="hn-inputcr-plhd">请选择跟进状态</div>
            <!-- <div class="hn-inputcr-val">这是选择的值</div> -->
            <van-icon name="arrow" size="15" />
          </div>
        </div>
        <div class="hn-input-cell">
          <div class="hn-inputc-left">
            <span class="hn-inputcl-star">*</span>
            <span>医院</span>
          </div>
          <div class="hn-inputc-right">
            <div class="hn-inputcr-plhd">请选择医院</div>
            <!-- <div class="hn-inputcr-val">这是选择的值</div> -->
            <van-icon name="arrow" size="15" />
          </div>
        </div>
        <!-- <van-field label="年龄" placeholder="请输入年龄" /> -->
        <van-field label="电话" required placeholder="请输入电话" />
        <!-- <van-field label="微信" placeholder="请输入微信" /> -->
        <!-- <van-field label="QQ" placeholder="请输入QQ" /> -->
        <!-- <van-field label="地区" placeholder="请输入地区" /> -->
        <van-field label="项目" required placeholder="请输入项目" />
        <van-field label="备注" placeholder="请输入备注" />
      </div>
      <div class="hn-btn-fixed">
        <van-button size="small" @click="hnRouterPush('/baoBeiList')" round block type="info">提交</van-button>
      </div>
      <!-- 弹窗 -->
      <van-popup v-model="yiyuan.show" round position="bottom">
        <van-picker
          show-toolbar
          :columns="yiyuan.data"
          :loading="yiyuan.loading"
          @cancel="yiyuan.show = false"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yiyuan: {
        show: false,
        data: [],
        loading:false,
      },
      // 存储表单数据
      formData: {
        
      }

    }
  },
  mounted() {

  },
  methods: {
    
  }
}
</script>
<style scoped>
.hn-baobei-main{
  padding-bottom: 50px;
}
</style>