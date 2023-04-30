<template>
  <div>
    <div class="hn-input-cell" @click="peiZhi.show=true">
      <div class="hn-inputc-left">
        <span class="hn-inputcl-star" v-show="required">*</span>
        <span>{{ label }}</span>
      </div>
      <div class="hn-inputc-right">
        <div class="hn-inputcr-plhd" v-show="isEmpty(selectVals)">{{ placeholder }}</div>
        <div class="hn-inputcr-vals" v-show="!isEmpty(selectVals)">
          {{ selectVals.name }}
        </div>
        <van-icon name="arrow" size="15" />
      </div>
    </div>
    <van-popup get-container="#app" v-model="peiZhi.show" round position="bottom">
      <van-picker
        show-toolbar
        :columns="peiZhi.data"
        value-key="name"
        :loading="peiZhi.loading"
        @cancel="peiZhi.show = false"
        @confirm="onConfirm"
        @change="columnChange"
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
        //picker数据
        data: [
          {values:[]},
          {values:[]},
          {values:[]},
        ],
        show: false,//是否显示picker
        loading:false,//是否显示加载状态
      },
      selectVals: {},//picker确认选择的医院
      historyCols:[0,0,0],
    }
  },
  created(){
    this.getProviceArea()

  },
  methods: {
    // 重置选择得数据
    reset(){
      this.selectVals = {}
    },
    // 获取省级地区数据
    async getProviceArea(){
      let chinaArea = JSON.parse(localStorage.getItem('chinaArea')) || (await this.getChinaAreaList())

      // 第一列数据-省份
      this.peiZhi.data[0].values = chinaArea
      // 第二列数据-城市
      this.peiZhi.data[1].values = await this.getChinaAreaList({level:1,cityCode:chinaArea[0].cityCode})
      // 第三列数据-医院
      this.peiZhi.data[2].values = await this.getHospitalByCity(this.peiZhi.data[1].values[0].cityCode)

      // console.log(this.peiZhi.data)
    },
    // 获取城市下得医院
    getHospitalByCity(ccode){
      return new Promise((rs,rj)=>{
        this.request('/hospital/getHospitalPage',{
          limit:200,
          page:1,
          cityCode:ccode,
          order:'id DESC'
        },'post').then((res)=>{
          if(res.code==0){
            rs(res.data)
          }else{
            rj(res)
          }
        })
      })
    },

    // 滚动事件
    async columnChange(picker,values){
      let inds = picker.getIndexes() //当前三列选中值的下标
      this.peiZhi.loading = true
      if(this.historyCols.length){
        // 第一列下标 与上一次 第一列下标不同才请求城市数据
        if(this.historyCols[0]!=inds[0]){
          // 动态获取城市
          this.peiZhi.data[1].values = await this.getChinaAreaList({level:1,cityCode:this.peiZhi.data[0].values[inds[0]].cityCode})
          // 省份变动城市肯定变动，则需要获取新医院数据
          this.peiZhi.data[2].values = await this.getHospitalByCity(this.peiZhi.data[1].values[inds[1]].cityCode)
        }
        // 城市变动，省份没变，则只获取医院数据即可
        if(this.historyCols[1]!=inds[1]){
          // 动态获取医院
          this.peiZhi.data[2].values = await this.getHospitalByCity(this.peiZhi.data[1].values[inds[1]].cityCode)
        }

        if(this.peiZhi.data[2].values.length==0){
          this.peiZhi.data[2].values = [{id:0,name:'暂无医院'}]
        }
      }
      this.historyCols = picker.getIndexes()
      this.peiZhi.loading = false
    },
    // picker 确认
    onConfirm(values, ind) {
      if(values[2].id==0){
        this.$toast("请选择医院")
        return
      }
      // console.log(values, ind)
      this.selectVals = values[2]
      this.$emit('selectYYDX',this.selectVals)
      this.peiZhi.show = false
    },

  }
}
</script>

<style scoped>
.hn-inputcr-vals{
  max-width: 220px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>