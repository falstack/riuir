const webpack = require('webpack')

module.exports = {
  css: [
    { src: '~static/stylesheet/global.scss', lang: 'scss' }
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'riuir - 天下漫友是一家',
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
    vendor: [
      'axios',
      '~plugins/imagelazyLoader.js'
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
    }
  }
}
