<template>
  <div class="page">
    <div class="hn-gntitle">功能管理</div>
    <van-grid square>
      <van-grid-item v-for="(item,index) in gridItems" :key="index" 
       :text="item.text" :to="item.path">
        <template #icon>
          <van-icon class="my-icons" class-prefix="my-icon" size="20" :name="item.icon" />
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gridItems: [
        { icon: 'navicon-grkh', text: '线索',routeName:'',path:'' },
        { icon: 'kehu', text: '报备', routeName: 'baoBei',path:'/baoBei' },
        { icon: 'guanlikehu', text: '客户', routeName: 'keHu',path:'/keHu' },
        { icon: 'qianbao', text: '定金', routeName: '',path:'' },
        { icon: 'dingdanyichenggong', text: '成单', routeName: 'chengDan',path:'/chengDan' },
        { icon: 'kehuguanli', text: '跟进', routeName: '',path:'' },
        { icon: 'lingqukehu', text: '待跟进', routeName: '',path:'' },
      ],
    }
  },
  methods: {
    
  }
}
</script>
