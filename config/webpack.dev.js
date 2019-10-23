const merge=require('webpack-merge');
const base=require('./webpack.base');

module.exports=merge(base,{
  mode: 'development',
  devtool: "source-map",    //错误跟踪，生成映射源代码文件
  //开发服务器配置
  devServer: {
    port: 8080,
    open: true,
    stats: 'errors-only'  //开发服务器只打印错误
  },
})