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
      resolve(__dirname, 'assets/css/variables.scss'),
      resolve(__dirname, 'assets/css/mixins.scss')
    ]
  }
}

module.exports = {
  cache: true,
  plugins: [
    { src: '~/plugins/analytics.js', ssr: false },
    { src: '~/plugins/helpers.js' },
    { src: '~/plugins/share/index.js' },
    { src: '~/plugins/imagelazy.js' },
    { src: '~/plugins/geetest.js', ssr: false },
    { src: '~/plugins/validate.js', ssr: false }
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { innerHTML: 'var _hmt = _hmt || [];(function () {var hm = document.createElement(\'script\');var s = document.getElementsByTagName(\'script\')[0];hm.src = \'//hm.baidu.com/hm.js?5c22f3db91001090bfc7d5096c296534\';s.parentNode.insertBefore(hm, s);})();', type: 'text/javascript' },
      { src: '//cdn.bootcss.com/social-share.js/1.0.16/js/social-share.min.js' }
    ],
    __dangerouslyDisableSanitizers: 'script'
  },
  css: [
    '~/assets/css/global.scss'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00a1d6' },
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
          rule.options.loaders.sass.push(sassResourcesLoader)
          rule.options.loaders.scss.push(sassResourcesLoader)
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
