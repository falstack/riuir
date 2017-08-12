const axios = require('axios')
const env = require('./.env');
const baseUrl = env.api.baseUrl
const resolve = require('path').resolve

const isVueRule = (rule) => {
  return rule.test.toString() === '/\\.vue$/'
}
const isSASSRule = (rule) => {
  return ['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1
}
const sassResourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      resolve(__dirname, 'assets/stylesheet/variables.scss'),
      resolve(__dirname, 'assets/stylesheet/mixins.scss')
    ]
  }
}

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
  plugins: [
    { src: '~plugins/analytics.js', ssr: false },
    { src: '~plugins/helpers.js' },
    { src: '~plugins/share.js' },
    { src: '~plugins/imagelazy.js' }
  ],
  modules: [
    ['@nuxtjs/google-analytics', { ua: 'UA-80338273-2' }],
  ],
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | riuir 天下漫友是一家',
    htmlAttrs: {
      lang: 'zh-cmn-Hans'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'renderer', content: 'webkit' },
      { hid: 'description', name: 'description', content: 'riuir，兴趣使然的二次元综合网站' },
      { hid: 'keywords', name: 'keywords', content: 'riuir，动漫，ACG，二次元，视频，番剧，动画，新番，神作' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//cdn.bootcss.com/social-share.js/1.0.16/css/share.min.css' }
    ],
    script: [
      { src: '//cdn.bootcss.com/social-share.js/1.0.16/js/social-share.min.js' }
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
    vendor: [
      'axios'
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      config.module.rules.forEach((rule) => {
        if (isVueRule(rule)) {
          rule.query.loaders.sass.push(sassResourcesLoader)
          rule.query.loaders.scss.push(sassResourcesLoader)
        }
        if (isSASSRule(rule)) {
          rule.use.push(sassResourcesLoader)
        }
      })
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
