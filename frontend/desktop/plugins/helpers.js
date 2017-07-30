import Vue from 'vue'
import orderBy from 'lodash/orderBy'

const Helpers = {}

Helpers.install = function (Vue, options) {
  Vue.prototype.$resize = (url, options = {}) => {
    if (url === '') {
      return ''
    }
    const canUseWebP = () => {
      if (!(typeof window !== 'undefined' && window.document)) {
        return false
      }
      if (window.supportWebP !== undefined) {
        return window.supportWebP
      }

      const elem = document.createElement('canvas')

      if (elem.getContext && elem.getContext('2d')) {
        const support = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
        window.supportWebP = support
        return support
      }

      return false
    }

    const format = canUseWebP() ? '/format/webp' : ''

    if (options.width && options.width > 0) {
      const width = `/w/${options.width}`
      const crop = options.crop === false ? '0' : '1'
      const height = options.height ? `/h/${options.height}` : crop === '1' ? `/h/${options.width}` : ''

      return `${url}?imageMogr2/auto-orient/strip|imageView2/${crop}${width}${height}${format}`
    }
    return `${url}?imageMogr2/auto-orient/strip${format}`
  }

  Vue.prototype.$orderBy = orderBy
}

Vue.use(Helpers)
