<template>
  <div class="page">
    <div class="hn-baobei-main">
      <topNav navTitle="报备"></topNav>
      <!-- 表单区域 -->
      <div class="hn-bb-form">
        <inputPkPop label="来源" valkey="dictName" @selectVal="selectLY" :data="laiYuan" placeholder="请选择客户来源"></inputPkPop>
        <van-field label="姓名" v-model="paiDanForm.customName" required placeholder="请输入姓名" />
        <inputPkPop label="性别" :data="sex" placeholder="请选择客户性别"></inputPkPop>
        <inputPkPop label="跟进状态" emitval="text" :data="gjStatus" placeholder="请选择跟进状态"></inputPkPop>
        <selectYiYuan label="医院" @selectYiYuan="selectYiYuan" placeholder="请选择医院"></selectYiYuan>
        <!-- <selectTime label="时间" @selectTime="selectTime" placeholder="请选择时间"></selectTime> -->
        <van-field label="电话" v-model="paiDanForm.phone" required placeholder="请输入电话" />
        <van-field label="项目" v-model="paiDanForm.project" required placeholder="请输入项目" />
        <!-- <van-field label="备注" v-model="paiDanForm.customName" placeholder="请输入备注" /> -->
      </div>
      <div class="hn-btn-fixed">
        <van-button size="small" @click="confirmPaiDan" block type="info">派单</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import selectYiYuan from '@/components/selectYiYuan.vue'
import selectTime from '@/components/selectTime.vue'

export default {
  components:{selectYiYuan,selectTime},
  data() {
    return {
      laiYuan:[],
      sex:[
        {text:'女',id:0},
        {text:'男',id:1},
        {text:'未知',id:2},
      ],
      gjStatus:[
        {text:'跟进',id:1},
        {text:'暂时不跟进',id:2},
      ],

      paiDanForm: {
        "customName": "",
        "dictId": "",
        "followStatus": "",
        "gender": "",
        "hospitalIdList": [],
        "phone": "",
        "project": ""
      },

    }
  },
  created() {
    this.getKeHuLaiYuan()
  },
  methods: {
    // 提交派单
    confirmPaiDan(){
      let rules = [
        {key:'customName',msg:"请输入客户姓名"},
        {key:'dictId',msg:"请选择客户来源"},
        {key:'followStatus',msg:"请选择跟进状态"},
        {key:'gender',msg:"请选择客户性别"},
        {key:'hospitalIdList',msg:"请选择医院"},
        {key:'phone',msg:"请输入客户电话"},
        {key:'project',msg:"请输入项目"},
      ]
      if(this.formValidate(this.paiDanForm,rules)){
        this.request("/dispatch/addDispatch",this.paiDanForm,'post').then((res)=>{
          if(res.code==0){
            this.$toast('派单成功')
            setTimeout(() => {
              this.hnRouterPush('/baoBeiList')
            }, 1500);
          }
        })
      }
    },
    // 获取客户来源选项数据
    getKeHuLaiYuan(){
      this.request("/dict/getDictPage",{
        limit:200,
        page:1,
        order:"id DESC",
        dictType: "CUSTOMER_SOURCE"
      },'post').then((res)=>{
        if(res.code==0){
          this.laiYuan = res.data
        }
      })
    },
    // 选择客户来源
    selectLY(e){
      this.paiDanForm.dictId = e
    },
    // 选择性别
    selectSex(e){
      this.paiDanForm.gender = e
    },
    // 选择状态
    selectStatus(e){
      this.paiDanForm.followStatus = e
    },
    // 选择医院
    selectYiYuan(e){
      console.log(e)
      this.paiDanForm.hospitalIdList = []
      e.forEach(item=>this.paiDanForm.hospitalIdList.push(item.id))
    },
  }
}
</script>
<style scoped>
.hn-baobei-main{
  padding-bottom: 50px;
}
</style>