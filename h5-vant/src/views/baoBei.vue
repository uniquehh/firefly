<template>
  <div class="page">
    <topNav navTitle="报备"></topNav>
    <!-- 表单区域 -->
    <div class="hn-bb-form">
      <van-field is-link label="来源" required readonly input-align="right" placeholder="请选择客户来源" />
      <van-field label="姓名" required placeholder="请输入姓名" />
      <van-field is-link label="性别" required readonly input-align="right" placeholder="请选择性别" />
      <van-field is-link label="跟进状态" required readonly input-align="right" placeholder="请选择跟进状态" />
      <van-field is-link label="咨询师" readonly input-align="right" placeholder="请选择咨询师" />
      <van-field is-link label="医院" required readonly input-align="right" placeholder="请选择医院" />
      <van-field label="年龄" placeholder="请输入年龄" />
      <van-field label="电话" required placeholder="请输入电话" />
      <van-field label="微信" placeholder="请输入微信" />
      <van-field label="QQ" placeholder="请输入QQ" />
      <van-field label="地区" placeholder="请输入地区" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:0,
    }
  },
  methods: {
    
  }
}
</script>