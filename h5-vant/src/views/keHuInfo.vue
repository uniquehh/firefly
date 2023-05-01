<template>
  <div class="page">
    <topNav navTitle="客户详情"></topNav>
    <div class="hn-khi-main">
      <div class="hn-khi-head">
        <div class="hn-khih-tag hn-mrr10" type="primary" size="large">报备</div>
        <div class="hn-khih-info">
          <div class="hn-khihi-item">客户：</div>
          <div class="hn-khihi-item">负责人：</div>
          <div class="hn-khihi-item">创建时间：</div>
        </div>
      </div>
      <van-tabs @click="tagChange" sticky animated>
        <van-tab title="报备">
          <div class="hn-khlc-item">
            <div class="hn-khlci-bg">
              <div class="hn-khlci-left">
                <van-tag class="hn-mrr10" size="medium" type="primary">已派单</van-tag>
                <div class="hn-khlcil-info">
                  <div class="hn-khlcili-name hn-mrb5">
                    <span>测试项目</span>
                    <span class="hn-sline12"></span>
                    <span>ip</span>
                    <!-- <span class="hn-sline12"></span> -->
                    <!-- <span>{{ item.customLevel }}</span> -->
                  </div>
                  <div class="hn-tip">最新留言</div>
                </div>
              </div>
              <van-tag type="success" round size="large">留言</van-tag>
            </div>
          </div>
        </van-tab>

        <van-tab title="详情">
          <div class="hn-khic-info">

            <div class="hn-khici-item">
              <div class="hn-khicii-th">客户名称：</div>
              <div class="hn-khicii-td">女666666撒水水水水水水水水水水水水水水水水6666666666666666士</div>
            </div>
            <div class="hn-khici-item">
              <div class="hn-khicii-th">报备项目：</div>
              <div class="hn-khicii-td">隆胸</div>
            </div>
            <div class="hn-khici-item">
              <div class="hn-khicii-th">微信号：</div>
              <div class="hn-khicii-td">无</div>
            </div>
            <div class="hn-khici-item">
              <div class="hn-khicii-th">手机号：</div>
              <div class="hn-khicii-td">125555555</div>
            </div>
            <div class="hn-khici-item">
              <div class="hn-khicii-th">创建时间：</div>
              <div class="hn-khicii-td">2022-14-25</div>
            </div>

          </div>
        </van-tab>

        <van-tab title="跟进">
          <div class="hn-khlc-item">
            <div class="hn-khlci-bg">
              <div class="hn-khlcil-info">
                <div class="hn-mrb5">
                  跟进内容
                </div>
                <div class="hn-tip">2024-15-45</div>
              </div>
            </div>
          </div>
        </van-tab>

        <van-tab title="成单">
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
        </van-tab>

      </van-tabs>
      <!-- 报备弹窗 -->
      <paiDanPop ref="paiDanPop"></paiDanPop>
      <!-- 跟进弹窗 -->
      <van-popup v-model="gjPopShow" get-container="#app" closeable round position="center">
        <div class="hn-gjpop-main">
          <div class="hn-khlc-item hn-bdb">
            <van-field label="跟进内容" v-model="gjform.content" required placeholder="请输入跟进内容" />
          </div>
          <div class="hn-khlc-item hn-bdb">
            <myCalendar ref="gjTimePop" :required="false" label="下次跟进时间" @selectTime="selectGJTime" placeholder="请选择下次跟进时间"></myCalendar>
          </div>
          <van-button size="small" @click="confirmGJ" block type="info">提交</van-button>
        </div>
      </van-popup>
      <!-- 成单弹窗 -->
      <van-popup v-model="cdPopShow" get-container="#app" closeable round position="center">
        <div class="hn-gjpop-main">
          <div class="hn-khlc-item">
            <selectYYRadio label="医院" ref="cdYiYuanCom" @selectYYDX="selectCDYiYuan" placeholder="请选择医院"></selectYYRadio>
          </div>
          <div class="hn-khlc-item hn-bdb">
            <van-field label="项目" v-model="cdform.project" required placeholder="请输入项目" />
          </div>
          <div class="hn-khlc-item hn-bdb">
            <van-field label="金额" v-model="cdform.price" required placeholder="请输入金额" />
          </div>
          <div class="hn-khlc-item hn-bdb">
            <myCalendar ref="cdTimePop" label="成单时间" @selectTime="selectCDTime" placeholder="请选择成单时间"></myCalendar>
          </div>
          <van-button size="small" @click="confirmCD" block type="info">提交</van-button>
        </div>
      </van-popup>

      <div v-show="showAddBtn" @click="addData" class="hn-add-iconbox">
        <van-icon size="30" name="plus" />
      </div>
    </div>


  </div>
</template>
<script>
import paiDanPop from '@/components/paiDanPop.vue'
import myCalendar from '@/components/myCalendar.vue'
import selectYYRadio from '@/components/selectYYRadio.vue'
export default {
  components:{paiDanPop,myCalendar,selectYYRadio},
  data() {
    return {
      activeTag:'报备',//激活得tag标题
      showAddBtn:false,//当前tag下是否显示加号按钮
      gjPopShow:false,//跟进弹窗
      cdPopShow:false,//成单弹窗
      gjform:{
        gjTime:"",//下次跟进时间
        content:"",//跟进内容
      },
      cdform:{
        hospitalId:"",
        project:"",
        price:"",
        time:"",
      }

    }
  },
  created(){
    this.isShowAddBtn()
  },
  methods: {
    // 成单提交
    confirmCD(){
      let rules = [
        {key:'hospitalId',msg:"请选择医院"},
        {key:'project',msg:"请输入项目"},
        {key:'price',msg:"请输入金额"},
        {key:'time',msg:"请选择成单时间"}
      ]
      // console.log(this.cdform)
      if(this.formValidate(this.cdform,rules)){
        console.log(this.cdform)
        // this.request("/dispatch/addDispatch",this.paiDanForm,'post').then((res)=>{
        //   if(res.code==0){
        //     this.$toast('提交成功')
        //   }
        // })
      }

    },
    // 成单-医院选择
    selectCDYiYuan(e){
      console.log(e)
      this.cdform.hospitalId = e.id
    },
    // 选择成单时间
    selectCDTime(e){
      // console.log(e)
      this.cdform.time = e.replace(/\//g,'-')
    },
    // 提交跟进
    confirmGJ(){
      if(this.isEmpty(this.gjform.content)){
        this.$toast("请输入跟进内容")
        return
      }
      console.log(this.gjform)
      this.gjPopShow = false

    },
    // 选择跟进时间
    selectGJTime(e){
      // console.log(e)
      this.gjform.gjTime = e.replace(/\//g,'-')
    },
    // 页面加号点击事件
    addData(){
      if(this.activeTag=='报备'){
        this.$refs.paiDanPop.open()
      }

      if(this.activeTag=='跟进'){
        this.gjPopShow = true
        this.gjform = {
          gjTime:"",
          content:""
        }
        this.$nextTick(()=>{
          this.$refs.gjTimePop.reset()
        })
        
      }

      if(this.activeTag=='成单'){
        this.cdPopShow = true
        this.cdform = {
          hospitalId:"",
          project:"",
          price:"",
          time:"",
        }
        this.$nextTick(()=>{
          this.$refs.cdTimePop.reset()
          this.$refs.cdYiYuanCom.reset()
        })
      }


    },
    // 是否显示加号
    isShowAddBtn(){
      let add = ['报备','跟进','成单']
      add.find(item=>item==this.activeTag)
      this.showAddBtn = add.find(item=>item==this.activeTag)?true:false
    },
    // tag标签页切换
    tagChange(ind,title){
      // console.log(ind,title)
      this.activeTag = title
      this.isShowAddBtn()
    },
  }
}
</script>

<style lang="less" scoped>
.hn-khi-main{
  ::v-deep .van-tabs__line{
    background-color: #1989FA;
  }
}

</style>