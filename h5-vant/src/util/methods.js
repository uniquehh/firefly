import request from './myAxios';
import vm from '@/main';

const methods = {
  // 关闭网页后需要清除的缓存
  removeLocalStorage(){
    localStorage.removeItem('chinaArea')
  },
  // 退出登录
  loginOut(req=true){
    // req--是否走接口得退出登录
    if(req){
      methods.request("/auth/logout",{},'post').then((res)=>{
        if(res.code==0){
          localStorage.clear()
          location.href = '/login'
          // window.location.reload()//刷新页面重置vuex的值
        }
      })
    }else{
      localStorage.clear()
      location.href = '/login'
      // window.location.reload()//刷新页面重置vuex的值
    }
  },
  // 请求数据
  request,
  //路由跳转
  hnRouterPush(par) {
    let curr = vm.$route.path
    if (typeof par == 'object'&& par.hasOwnProperty('query')) {
      if(curr==par.path)return;
      vm.$router.push({ path:par.path,query:par.query})
    } else if (typeof par == 'object' && par.hasOwnProperty('params')) {
      if(curr==par.path)return;
      vm.$router.push({ path:par.path,params:par.params})
    } else if (typeof par == 'string') {
      if(curr==par)return;
      vm.$router.push(par)
    } else {
      vm.$toast("函数参数处理错误")
    }
  },
  hnRouterRep(par) {
    let curr = vm.$route.path
    if (typeof par == 'object'&& par.hasOwnProperty('query')) {
      if(curr==par.path)return;
      vm.$router.replace({ path:par.path,query:par.query})
    } else if (typeof par == 'object' && par.hasOwnProperty('params')) {
      if(curr==par.path)return;
      vm.$router.replace({ path:par.path,params:par.params})
    } else if (typeof par == 'string') {
      if(curr==par)return;
      vm.$router.replace(par)
    } else {
      vm.$toast("函数参数处理错误")
    }
  },
  hnRouterBack() {
    vm.$router.back()
  },
  // 是否为空
  isEmpty(str) {
    if (str == '' || str == null || str == undefined || JSON.stringify(str) == '[]' || JSON.stringify(str) == '{}') {
      return true;
    } else {
      return false;
    }
  },
  // 校验对象内的值是否为空
  // obj 为要校验的表单对象，rules为规则，格式为array<object> 例如：[{{key:'customName',msg:"请输入客户姓名"}}]
  // key 为校验字段，msg为检验失败的提示
  formValidate(obj,rules){
    let arr = Object.keys(obj)
    for(let i=0;i<arr.length;i++){
      if(methods.isEmpty(obj[arr[i]])){
        vm.$toast(rules.find(items=>items.key==arr[i]).msg)
        return false
      }
    }
  },
  // 获取全国省市区数据
  getChinaAreaList(par={}){
    // level-0 表示查询省级数据，level-1表示市级--默认查省级
    let obj = {level:0}
    par = Object.assign(obj,par)
    return new Promise((rs,rj) => {
      methods.request('/chinaArea/getChinaAreaList',par,'post').then((res) => {
        if (res.code == 0) {
          if(par.level=='0'){ //只存省级数据
            window.localStorage.setItem('chinaArea',JSON.stringify(res.data))
          }
          rs(res.data)
        } else {
          rj(res)
        }
      })
    }) 
  },
  // 隐藏部分内容以星号*代替
  replaceStart(str, start, end, isEmail = false, isFixed = 0) {
    if (isEmail) {
      var em = str.split('@');
      str = em[0];
    }
    var s = str.substr(0, start);
    var e = str.substr(str.length - end, str.length - 1);
    var d = '*******************************'.substr(0, isFixed ? isFixed : str.length - start - end);
    if (isEmail) {
      return s + d + e + '@' + em[1];
    }
    return s + d + e;
  },
  // 获取用户信息
  getUserInfo(){
    let userInfo = JSON.parse(localStorage.getItem("userInfo"))
    return new Promise((rs,rj) => {
      methods.request('/user/getUserDetails',{
        userId:userInfo.id
      },'get','form').then((res) => {
        if (res.code == 0) {
          vm.$store.commit('user/stSetUserInfo', res.data)
          window.localStorage.setItem('userInfo',JSON.stringify(res.data))
          rs(res.data)
        } else {
          rj(res)
        }
      })
    })
  },


  
}

export default methods