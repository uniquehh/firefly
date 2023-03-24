const {
  defineConfig
} = require('@vue/cli-service')
const bundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    https: false, 
    proxy: { //配置多个代理
      "/testIp": {
          target: "http://197.0.0.1:8088",
          changeOrigin: true,
          ws: true,//websocket支持
          secure: false,
          pathRewrite: {
              "^/testIp": "/"
          }
      },
      "/elseIp": {
          target: "http://197.0.0.2:8088",
          changeOrigin: true,
          //ws: true,//websocket支持
          secure: false,
          pathRewrite: {
              "^/elseIp": "/"
          }
      },
  }
  },
  configureWebpack:config=>{
    config.plugins.push(
      new bundleAnalyzer()
    )
  }
})