const path = require('path');
//  提取样式插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 自动生成html文件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导入清除插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// 1. webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    app: './src/main.js' //入口文件
  },
  output: {
    filename: '[name].bundle.js', // 输出文件名字的格式
    path: path.resolve(__dirname, './dist'), //输出文件的绝对路径
    // publicPath: '/'
  },
  module: {
    rules: [{ // 2. 
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "vue-style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          //如果需要，可以在 less-loader 之前将 resolve-url-loader 链接进来
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {}
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/style.css"),
    // 调用清除打包目录插件
    new CleanWebpackPlugin(),
    // + 新增配置
    // new HtmlWebpackPlugin({
    //   template: "src/index.html", // template指定默认html模板,
    //   filename:'index.html'
    // })
    new HtmlWebpackPlugin({
      template: "public/index.html"
    }),
    //vue插件
    new VueLoaderPlugin()
  ]
}