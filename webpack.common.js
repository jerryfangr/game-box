const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: '/src/index.ts',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts'],
    modules: [path.resolve(__dirname, 'src', 'modules'), path.resolve('node_modules')],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  optimization: {
    moduleIds: 'deterministic', 
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
        myVendor: {
          test: /[\\/]src[\\/]modules[\\/]/,
          name: 'module',
          chunks: 'all',
        }        
      }
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         // 超过2k的文件打包为为图片文件，否则base64代码显示在HTML页面
      //         limit: 2 * 1024,
      //         name: "asserts/img/[hash].[ext]",
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/index.html'
    })
  ],
};