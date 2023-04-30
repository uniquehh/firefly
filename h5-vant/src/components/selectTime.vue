<template>
  <div>
    <div class="hn-input-cell" @click="peiZhi.show=true">
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
    <van-popup v-model="peiZhi.show" round get-container="#app" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        @cancel="peiZhi.show = false"
        @confirm="onConfirm"
      />
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
      peiZhi: {
        show: false,//是否显示弹窗
        loading:false,//是否显示加载状态
      },
      selectVal: '',//确认选择的值
      currentDate: new Date(),
    }
  },
  created(){

  },
  methods: {
    reset(){
      this.selectVal = ''
    },
    // picker 确认
    onConfirm(value) {
      let year = value.getFullYear()
      let mm = value.getMonth()+1
      mm = mm<10?'0'+mm:mm
      let dd = value.getDate()
      dd = dd<10?'0'+dd:dd
      this.selectVal = year + '-' + mm + '-' + dd
      console.log(this.selectVal)
      this.$emit('selectTime',this.selectVal)
      this.peiZhi.show = false
    },

  }
}
</script>

<style scoped>

</style>