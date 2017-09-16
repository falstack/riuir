const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const resolve = file => path.resolve(__dirname, file)

module.exports = {
  entry: {
    app: './frontend/entry.js'
  },
  output: {
    path: resolve('./frontend/dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss'],
    alias: {
      'api': resolve('./frontend/api'),
      'assets': resolve('./frontend/assets'),
      'component': resolve('./frontend/components')
    }
  },
  module: {
    noParse: /es6-promise\.js$/,
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              extractCSS: true,
              loaders: {
                scss: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader',
                  {
                    loader: 'sass-resources-loader',
                    options: {
                      resources: [
                        resolve('./frontend/assets/css/variables.scss'),
                        resolve('./frontend/assets/css/mixins.scss')
                      ]
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?minimize',
          fallback: 'vue-style-loader'
        })
      },
      {
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            enforce: 'pre',
            cacheDirectory: true
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return (
          /node_modules/.test(module.context) &&
          !/\.css$/.test(module.request)
        )
      }
    }),
    new ExtractTextPlugin({
      filename: 'common.css'
    })
  ]
}
