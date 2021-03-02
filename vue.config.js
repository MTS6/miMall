module.exports = {
  
  
  // 关闭EsLint的规则
  lintOnSave: false,
  

  devServer:{
    open:true,
    host:'localhost',
    port:8085,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },

  // productionSourceMap:true,
  // chainWebpack:(config)=>{
  //   config.plugins.delete('prefetch');
  // }
}