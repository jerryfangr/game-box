const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // production  development
  entry: '/src/index.ts',
  output:{
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    environment: {
      arrowFunction: false,
      const: false
    }
  },
  resolve:{
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, 'src','modules'), path.resolve('node_modules')],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module:{
    rules:[
      {
        test: /\.less$/i,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader', 
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env', 
                    { browsers: 'last 3 versions'} 
                  ]
                ]
              }
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.ts$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      'chrome': '55',
                      'ie': '9'
                    },
                    'corejs': '3',
                    'useBuiltIns': 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ]
      },
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'tower n | game page',
      template: './src/assets/index.html'
    })
  ],
}
