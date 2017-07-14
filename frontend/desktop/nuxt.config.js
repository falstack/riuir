const axios = require('axios')
const baseUrl = 'http://api.riuir.com'

const qiniuConfig = require('./.env').qiniu
const QiniuPlugin = require('qiniu-webpack-plugin')

module.exports = {
  cache: true,
  generate: {
    routes: function () {
      const bangumi = axios.get(`${baseUrl}/bangumi/generate`).then((res) => {
        return res.data.map((id) => {
          return `/bangumi/${id}`
        })
      })
      const video = axios.get(`${baseUrl}/video/generate`).then((res) => {
        return res.data.map((id) => {
          return `/video/${id}`
        })
      })
      return Promise.all([bangumi, video]).then(values => {
        return values.join().split(',');
      })
    }
  },
  css: [
    { src: '~static/stylesheet/global.scss', lang: 'scss' }
  ],
  plugins: [
    { src: '~plugins/analytics.js', ssr: false },
    { src: '~plugins/image.js', ssr: false }
  ],
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - riuir',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },
  /*
  ** Build configuration
  */
  build: {
    //publicPath: qiniuConfig.domain,
    vendor: [
      'axios'
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (!ctx.isDev) {
        config.plugins.push(new QiniuPlugin({
          ACCESS_KEY: qiniuConfig.access,
          SECRET_KEY: qiniuConfig.secret,
          bucket: qiniuConfig.bucket,
          path: '/staticFile',
          include: [/dist\/_nuxt\/*/]
        }))
      }
    }
  }
}
