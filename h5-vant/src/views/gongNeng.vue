<template>
  <div>
    <div class="hn-gntitle">功能管理</div>

    <van-grid square>
      <van-grid-item v-for="(item,index) in gridItems" :key="index" 
       :text="item.text" :to="item.path">
        <template #icon>
          <van-icon class="element-icons" class-prefix="el-icon" size="20" :name="item.icon" />
        </template>
      </van-grid-item>
    </van-grid>
    
    <div class="hn-logout-btn" @click="loginOut">退出登录</div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      gridItems: [
        // { icon: 'navicon-grkh', text: '线索',routeName:'',path:'' },
        { icon: 'kehu', text: '报备', routeName: 'baoBeiList',path:'/baoBeiList' },
        { icon: 'guanlikehu', text: '客户', routeName: 'keHu',path:'/keHu' },
        // { icon: 'qianbao', text: '定金', routeName: '',path:'' },
        { icon: 'dingdanyichenggong', text: '成单', routeName: 'chengDan',path:'/chengDan' },
        // { icon: 'kehuguanli', text: '跟进', routeName: '',path:'' },
        // { icon: 'lingqukehu', text: '待跟进', routeName: '',path:'' },
      ],
    }
  },
  methods: {
    
  }
}
</script>
