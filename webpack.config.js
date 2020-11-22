const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const packageJson = require('./package.json')

module.exports = () => ({
  mode: 'development',
  entry: './app/index.js',
  output: {
    path: path.resolve('dist'),
    library: 'fluentuiVue',
    filename: 'fluentui-vue.js'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packageJson.version)
    })
  ],
  devServer: {
    index: 'index.html',
    contentBase: path.resolve('app', 'assets'),
    port: 8080
  }
})
