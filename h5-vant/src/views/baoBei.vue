<template>
  <div class="page">
    <div class="main">
      <topNav navTitle="报备"></topNav>
      <!-- 表单区域 -->
      <div class="hn-bb-form">
        <inputPkPop :meta="laiYuan"></inputPkPop>
        <van-field label="姓名" required placeholder="请输入姓名" />
        <inputPkPop :meta="sex"></inputPkPop>
        <inputPkPop :meta="gjStatus"></inputPkPop>
        <inputPkPop :meta="zxShi"></inputPkPop>
        <inputPkPop :meta="yiYuan"></inputPkPop>
        <van-field label="年龄" placeholder="请输入年龄" />
        <van-field label="电话" required placeholder="请输入电话" />
        <van-field label="微信" placeholder="请输入微信" />
        <van-field label="QQ" placeholder="请输入QQ" />
        <van-field label="地区" placeholder="请输入地区" />
        <van-field label="项目" required placeholder="请输入项目" />
        <van-field label="备注" placeholder="请输入备注" />
        <van-field label="备注" placeholder="请输入备注" />
        <van-field label="备注" placeholder="请输入备注" />
      </div>
      <div class="hn-bnt-fixed">
        <van-button size="small" @click="routerPush({path:'/baoBeiList'})" round block type="primary">派单</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 各组件的配置
      laiYuan: {
        label: "来源",
        placeholder: "请选择客户来源",
        data: [
          {
            text: '浙江',
            children: [
              {
                text: '杭州',
                children: [{ text: '西湖区' }, { text: '余杭区' }],
              },
              {
                text: '温州',
                children: [{ text: '鹿城区' }, { text: '瓯海区' }],
              },
            ],
          },
        ],
        required:true
      },
      sex: {
        label: "性别",
        placeholder: "请选择性别",
        data: ["男","女"],
        required: true
      },
      gjStatus: {
        label: "跟进状态",
        placeholder: "请选择跟进状态",
        data: ["已跟进", "待跟进"],
        required: true
      },
      zxShi: {
        label: "咨询师",
        placeholder: "请选择咨询师",
        data: ["咨询师1", "咨询师2"],
      },
      yiYuan: {
        label: "医院",
        placeholder: "请选择医院",
        data: ["医院1", "医院2"],
        required: true
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
.main{
  padding-bottom: 50px;
}
</style>