<template>
  <div>
    <div class="hn-input-cell" @click="show=true">
      <div class="hn-inputc-left">
        <span class="hn-inputcl-star" v-show="required">*</span>
        <span>{{ label }}</span>
      </div>
      <div class="hn-inputc-right">
        <div class="hn-inputcr-plhd" v-show="isEmpty(selectVal)">{{ placeholder }}</div>
        <div class="hn-inputcr-val" v-show="!isEmpty(selectVal)">{{ selectVal }}</div>
        <van-icon name="arrow" size="15" />
      </div>
    </div>
    <van-popup v-model="show" round position="bottom">
      <van-picker
        show-toolbar
        :columns="data"
        :value-key="valkey"
        @cancel="show = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type:Array,
      default: [],
    },
    label: {
      type: String,
      default:"",
    },
    valkey: {
      type: String,
      default:"text",
    },
    emitval: {
      type: String,
      default:"id",
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
      show:false,
      selectVal: "",//picker确认选择的值
    }
  },
  methods: {
    // picker 确认
    onConfirm(value) {
      // console.log(value)
      this.selectVal = value[this.valkey]
      this.$emit('selectVal',value[this.emitval])
      this.show = false
    },
  }
}
</script>