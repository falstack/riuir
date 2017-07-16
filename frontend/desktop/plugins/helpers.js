import Vue from 'vue'

const Helpers = {}

Helpers.install = function (Vue, options) {
  Vue.prototype.$resize = (url, options = {}) => {
    if (options.width && options.width > 0) {
      const width = options.width
      const height = options.height || options.width

      return `${url}?imageMogr2/auto-orient/strip|imageView2/1/w/${width}/h/${height}`
    }
    return url
  }
}

Vue.use(Helpers)
