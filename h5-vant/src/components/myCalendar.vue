<template>
  <div>
    <div class="hn-input-cell" @click="open">
      <div class="hn-inputc-left">
        <span class="hn-inputcl-star" v-show="required">*</span>
        <span>{{ label }}</span>
      </div>
      <div class="hn-inputc-right">
        <div class="hn-inputcr-plhd" v-show="isEmpty(selectVal)">{{ placeholder }}</div>
        <div class="hn-inputcr-vals" v-show="!isEmpty(selectVal)">
          {{ selectVal }}
        </div>
        <van-icon name="arrow" size="15" />
      </div>
    </div>
    <van-popup get-container="#app" v-model="showRiLi" round position="bottom">
      <div class="hn-rl-main">
        <van-calendar 
        :default-date="defaultTime"
        :poppable="false" 
        row-height="40"
        :min-date="minDate" 
        :max-date="maxDate" 
        color="#1989fa" 
        :formatter="mycalFormatter"
        ref="mycalendar"
        @select="selectCalen"
      >
        <template slot="title">
          <div class="hn-mycal-title">
            <div class="hn-mycal-lyear" @click="reduceYear">
              <van-icon class="element-icons" class-prefix="el-icon" name="zuoshuangjiantou" />
            </div>
            <div class="hn-mycal-lmonth" @click="reduceMonth">
              <van-icon name="arrow-left" />
            </div>
            <div class="hn-mycal-ctime">2023年12月</div>
            <div class="hn-mycal-rmonth" @click="addMonth">
              <van-icon name="arrow" />
            </div>
            <div class="hn-mycal-ryear" @click="addYear">
              <van-icon class="element-icons" class-prefix="el-icon" name="youshuangjiantou" />
            </div>
          </div>
        </template>
        <template slot="footer">
          <div class="hn-mycal-footer">
            <div class="hn-mycalf-left hn-mrr5">
              <span class="hn-tip hn-mrr5">当前选择</span>
              <span class="hn-mrr5">{{ selectVal }}</span>
            </div>
            <div class="hn-mycalf-right">
              <span class="hn-mycalf-cancel hn-mrr10" @click="showRiLi=false">取消</span>
              <span class="hn-mycalf-confirm" @click="confirmSelect">确定</span>
            </div>
          </div>
        </template>
      </van-calendar>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default:"",
    },
    placeholder: {
      type: String,
      default:"",
    },
    required: {
      type: Boolean,
      default:true,
    },

  },
  data() {
    return {
      showRiLi:false,
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2100, 0, 31),
      selectVal: '',//picker确认选择的值
      currYear:"",
      currMonth:"",
      defaultTime: new Date(),//日历默认选择时间
    }
  },
  created(){
    this.currYear = new Date().getFullYear()
    this.currMonth = new Date().getMonth() + 1
  },
  beforeDestroy(){
    this.showRiLi = false
  },
  methods: {
    // 打开弹窗
    open(){
      this.showRiLi = true
      // 回显
      if(this.selectVal){
        this.defaultTime = this.unFormatTime(this.selectVal)
      }else{
        this.defaultTime = new Date()
      }
    },
    // 重置回显日期
    reset(){
      this.selectVal = ''
    },
    // 确认选择
    confirmSelect(){
      this.selectVal = this.formatTime(this.defaultTime).xtime
      // console.log(this.selectVal)
      this.$emit('selectTime',this.selectVal)
      this.showRiLi = false
    },
    // 选择日期
    selectCalen(e){
      // console.log(e)
      this.defaultTime = e
    },
    // 年份递减
    reduceYear(){
      if(this.currYear==this.minDate.getFullYear())return;
      this.currYear--
      let todate = new Date(this.currYear,this.currMonth-1,1)
      this.$refs.mycalendar.scrollToDate(todate)
    },
    // 年份递增
    addYear(){
      if(this.currYear==this.maxDate.getFullYear())return;
      this.currYear++
      let todate = new Date(this.currYear,this.currMonth-1,1)
      this.$refs.mycalendar.scrollToDate(todate)
    },
    // 月份递减
    reduceMonth(){
      if(this.currYear==this.minDate.getFullYear())return;
      if(this.currMonth==1){
        this.currYear--
        this.currMonth = 12
      }else{
        this.currMonth--
      }
      let todate = new Date(this.currYear,this.currMonth-1,1)
      this.$refs.mycalendar.scrollToDate(todate)
    },

    // 月份递增
    addMonth(){
      if(this.currYear==this.maxDate.getFullYear())return;
      if(this.currMonth==12){
        this.currYear++
        this.currMonth = 1
      }else{
        this.currMonth++
      }
      let todate = new Date(this.currYear,this.currMonth-1,1)
      this.$refs.mycalendar.scrollToDate(todate)
    },
    

    // 格式化日期节日显示
    mycalFormatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();

      if (month === 1) {
        if (date === 1) {
          day.topInfo = '元旦节';
        } 
      }
      if (month === 3) {
        if (date === 8) {
          day.topInfo = '妇女节';
        } else if (date === 12) {
          day.topInfo = '植树节';
        } 
      }
      if (month === 4) {
        if (date === 5) {
          day.topInfo = '清明节';
        }
      }
      if (month === 5) {
        if (date === 1) {
          day.topInfo = '劳动节';
        } else if (date === 4) {
          day.topInfo = '青年节';
        }
      }
      if (month === 6) {
        if (date === 1) {
          day.topInfo = '儿童节';
        }
      }
      if (month === 7) {
        if (date === 1) {
          day.topInfo = '建党节';
        }
      }
      if (month === 8) {
        if (date === 1) {
          day.topInfo = '建军节';
        }
      }
      if (month === 9) {
        if (date === 10) {
          day.topInfo = '教师节';
        }
      }
      if (month === 10) {
        if (date === 1) {
          day.topInfo = '国庆节';
        }
      }

      return day;
    },


  }
}
</script>

<style lang="less" scoped>
.hn-rl-main{
  ::v-deep .van-calendar__top-info{
    top: 0px;
    color: rgba(0, 0, 0, 0.6);
  }
  ::v-deep .van-calendar__selected-day{
    .van-calendar__top-info{
      color: rgba(255, 255, 255, 0.8);
    }
  }
  ::v-deep .van-calendar__header{
    position: relative;
  }
  ::v-deep .van-calendar__header-title{
    position: absolute;
    top: 0;
    left:50%;
    transform: translateX(-50%);
  }
}

</style>