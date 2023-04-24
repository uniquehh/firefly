<template>
  <div class="page">
    <div class="hn-baobei-main">
      <topNav navTitle="报备"></topNav>
      <!-- 表单区域 -->
      <div class="hn-bb-form">
        <inputPkPop label="来源" :meta="laiYuan" placeholder="请选择客户来源"></inputPkPop>
        <van-field label="姓名" required placeholder="请输入姓名" />
        <inputPkPop label="性别" :meta="sex" placeholder="请选择客户性别"></inputPkPop>
        <inputPkPop label="跟进状态" :meta="gjStatus" placeholder="请选择跟进状态"></inputPkPop>
        <inputPkPop label="医院" :meta="yiYuan" placeholder="请选择医院"></inputPkPop>
        <van-field label="电话" required placeholder="请输入电话" />
        <van-field label="项目" required placeholder="请输入项目" />
        <van-field label="备注" placeholder="请输入备注" />
      </div>
      <div class="hn-btn-fixed">
        <van-button size="small" @click="hnRouterPush('/baoBeiList')" round block type="info">提交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      laiYuan:{
        data:[
          {text:'laiyuan1',value:1},
          {text:'laiyuan2',value:2},
          {text:'laiyuan3',value:3},
        ],
        show:false,
      },
      sex:{
        data:[
          {text:'女',value:0},
          {text:'男',value:1},
        ],
        show:false,
      },
      gjStatus:{
        data:[
          {text:'status1',value:1},
          {text:'status2',value:2},
          {text:'status3',value:3},
        ],
        show:false,
      },
      yiYuan: {
        show: false,
        data: [],
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