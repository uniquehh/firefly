<template>
  <div class="page">
    <div class="main">
      <topNav navTitle="报备"></topNav>
      <!-- 表单区域 -->
      <div class="hn-bb-form">
        <inputPkPop :meta="laiYuan" label="来源" required placeholder="请选择客户来源"></inputPkPop>
        <van-field label="姓名" required placeholder="请输入姓名" />
        <inputPkPop :meta="sex" label="性别" required placeholder="请选择性别"></inputPkPop>
        <inputPkPop :meta="gjStatus" label="跟进状态" required placeholder="请选择跟进状态"></inputPkPop>
        <inputPkPop :meta="zxShi" label="咨询师" placeholder="请选择咨询师"></inputPkPop>
        <inputPkPop :meta="yiYuan" label="医院" required placeholder="请选择医院"></inputPkPop>
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
      },
      sex: {
        data: ["男","女"],
      },
      gjStatus: {
        data: ["已跟进", "待跟进"],
      },
      zxShi: {
        data: ["咨询师1", "咨询师2"],
      },
      yiYuan: {
        data: ["医院1", "医院2"],
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