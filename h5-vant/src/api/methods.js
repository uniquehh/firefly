import http from '../utils/http'
// import vm from '../main'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */

const methods = {
	// 判断是否为空
	isEmpty(str) {
    if (str == '' || str == null || str == undefined || JSON.stringify(str) == '[]' || JSON.stringify(str) == '{}') {
      return true;
    } else {
      return false;
    }
  },
	// router.push --路由跳转
	routerPush(par={}) {
		if (methods.isEmpty(par)) {
			this.$toast.fail("routerPuah参数不能为空")
			return
		} else {
			this.$router.push(par)
		}
	},
	// 数据请求api封装
	request(url,par={},method='get') {
		return http[method](url, par)
	},
}
export default methods
