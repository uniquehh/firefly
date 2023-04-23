const {defineConfig} = require('@vue/cli-service')
const urlConfig = require('./src/util/config')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',//默认localhost 用于指定devServe使用的host，如果你希望服务器外部可以访问，设定为 host: '0.0.0.0'
    port: 8080,//指定要监听请求的端口号
    hot: true,//用于设置代码保存时是否进行热更新（局部刷新，不刷新整个页面）
    https: false, //默认false，用于设置是否启用https
    proxy: { //配置多个代理
      [urlConfig.preApi]: {
        target: urlConfig.apiUrl, //代理的服务器，也就是api接口要访问的服务器
        changeOrigin: true,//将主机头的来源更改为目标URL，也就是是否允许跨域
        ws: true,//websocket支持--是否代理
        secure: false,//是否使用HTTPS协议。默认 false
        pathRewrite: {
          ['^'+ urlConfig.preApi]: ''
        }
      },
    }
  }
})