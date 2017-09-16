const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const resolve = file => path.resolve(__dirname, file)
const fs = require('fs')

const laravelMixFilePath = './public/mix-manifest.json'
if (fs.existsSync(laravelMixFilePath)) {
  fs.unlinkSync(laravelMixFilePath)
}

module.exports = {
  entry: {
    app: './frontend/entry.js'
  },
  output: {
    path: resolve('./public/assets/img'),
    publicPath: '/assets/img/',
    filename: '../js/[name].js'
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
                scss: ExtractTextPlugin.extract({
                  fallback: 'vue-style-loader',
                  use: [
                    'css-loader?minimize',
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
                })
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
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash:8]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:8]'
        }
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
    new ExtractTextPlugin('../css/style.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return (
          /node_modules/.test(module.context) &&
          !/\.css$/.test(module.request)
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ],
  stats: {
    children: false
  }
}
