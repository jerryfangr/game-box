const path = require('path');
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: "eval-cheap-module-source-map",
  module:{
    rules:[
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader','less-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.ts$/i,
        use: ['ts-loader']
      },
    ]
  },
  devServer: {
    openPage: "index.html",
    contentBase: "./dist",
    compress: true,
    // host: '0.0.0.0',
    // port: 8080, //process.env.PORT
    open: true,
    hot: true
  },
});
