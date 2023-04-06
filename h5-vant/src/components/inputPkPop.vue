<template>
  <div>
    <van-field is-link 
      :label="label" 
      v-model="selectVal" 
      :required="required" 
      readonly input-align="right" 
      :placeholder="placeholder"
      @click="peiZhi.show = true"
     />
    <van-popup v-model="peiZhi.show" round position="bottom">
      <van-picker
        show-toolbar
        :columns="peiZhi.data"
        :loading="peiZhi.loading"
        @cancel="peiZhi.show = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>
<script>
export default {
  props: {
    meta: {
      type:Object,
      default: ()=>{},
    },
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
      default:false,
    },

  },
  watch: {
    meta: {
      deep: true,
      immediate: true,
      handler(val) {
        if (this.meta) {
          this.peiZhi = Object.assign(this.peiZhi, val)
        }
      },
    }
  },
  data() {
    return {
      /**
       * 数据格式为数组包对象，且有children则为级联选择
       * columns: [
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
          }]

       * 数据为数组包对象，有values关键字则为多列选择
          columns: [
            // 第一列
            {
              values: ['周一', '周二', '周三', '周四', '周五'],
              defaultIndex: 2,
            },
            // 第二列
            {
              values: ['上午', '下午', '晚上'],
              defaultIndex: 1,
            },
          ],
       */
      peiZhi: {
        data: [],//picker数据
        show: false,//是否显示picker
        loading:false,//是否显示加载状态
        pkType:1,//picker选择器类型，1为单列，2为多列，3为级联选择器，默认为单列选择器,此配置会影响数据的处理
      },
      selectVal: "",//picker确认选择的值
    }
  },
  methods: {
    // picker 确认
    onConfirm(value, ind) {
      console.log(value, ind)
      // 单列选择器的数据处理
      if (this.peiZhi.pkType == 1 && typeof value== "string") {
        this.selectVal = value
      } else if (this.peiZhi.pkType == 2 && typeof value == "object") {
        this.selectVal = value.join('-')
      } else { //不传pkType，最终视作级联选择器处理数据
        this.selectVal = value.join('-')
      }
      this.peiZhi.show = false
    },
  }
}
</script>