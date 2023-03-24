import http from '../utils/http'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */

// get请求
const testApi = {
	getListAPI(params) {
		return http.get('/api/joke/list', params)
	},
	postFormAPI(params) {
		return http.post('/api/user/reg', params)
	}
}
export default testApi
