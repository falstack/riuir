import Vue from 'vue'
import { groupBy, orderBy } from '~plugins/util/lodash'

const Helpers = {}

Helpers.install = function (Vue, options) {
  Vue.prototype.$orderBy = orderBy

  Vue.prototype.$groupBy = groupBy

  Vue.prototype.$cdn = 'https://cdn.riuir.com/'

  Vue.prototype.$channel = new Vue()

  Vue.prototype.$resize = (url, options = {}) => {
    if (url === '') {
      return ''
    }
    const canUseWebP = () => {
      if (Vue.prototype.$isServer) {
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

  Vue.prototype.$imageGrayLevel = (ele) => {
    if (Vue.prototype.$isServer) {
      return true
    }

    let [data, width, height, length, i = -4, count = 0] = []

    const getRGB = (reallyImage) => {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext && canvas.getContext('2d')
      const rgb = { r: 0, g: 0, b: 0 }
      const blockSize = 5 // only visit every 5 pixels

      height = canvas.height = reallyImage.naturalHeight || reallyImage.offsetHeight || reallyImage.height
      width = canvas.width = reallyImage.naturalWidth || reallyImage.offsetWidth || reallyImage.width

      try {
        context.drawImage(reallyImage, 0, 0, width, height)
      } catch (e) {
        return rgb
      }
      try {
        data = context.getImageData(0, 0, width, height)
      } catch (e) {
        return rgb
      }

      length = data.data.length

      while ((i += blockSize * 4) < length) {
        ++count
        rgb.r += data.data[i]
        rgb.g += data.data[i + 1]
        rgb.b += data.data[i + 2]
      }

      rgb.r = ~~(rgb.r / count)
      rgb.g = ~~(rgb.g / count)
      rgb.b = ~~(rgb.b / count)
      return rgb
    }

    const getGray = (rgb) => {
      return rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114
    }

    return parseInt(getGray(getRGB(ele)), 10)
  }
}

Vue.use(Helpers)
