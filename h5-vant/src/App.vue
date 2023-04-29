<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import { mapState,mapMutations } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    // ...mapState('user', ['userInfo','isLogin']),
  },
  mounted() {
    
  },
  updated() { 
    // console.log(this.$route)
  },
  beforeDestroy() {
    this.removeLocalStorage()
  },
  methods: {

  }
}
</script>

<style lang="less">
@import './assets/css/hnstyle.css';
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
pre, /* text formatting elements 文本格式元素 */
fieldset, lengend, button, input, textarea, /* form elements 表单元素 */
th, td {
  /* table elements 表格元素 */
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: #333;
}
.page{
  background-color: #F6F6F6;
  width: 100%;
  height: 100vh;
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
}

</style>
