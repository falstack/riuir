import Vue from 'vue'
import { groupBy, orderBy } from '~/plugins/util/lodash'
import Backdrop from '~/plugins/backdrop'
import Toast from '~/plugins/toast'
import { host } from '~/.env'
import format from '~/plugins/util/format'

const Helpers = {}

if (typeof window !== 'undefined') {
  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60)
      }
  }())
}

Helpers.install = function (Vue, options) {
  Vue.prototype.$orderBy = orderBy

  Vue.prototype.$groupBy = groupBy

  Vue.prototype.$cdn = host.cdn

  Vue.prototype.$channel = new Vue()

  Vue.prototype.$backdrop = new Backdrop()

  Vue.prototype.$toast = new Toast()

  Vue.prototype.$format = format

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
      const mode = options.mode === undefined ? 1 : options.mode
      const height = options.height ? `/h/${options.height}` : mode === 1 ? `/h/${options.width}` : ''

      return `${url}?imageMogr2/auto-orient/strip|imageView2/${mode}${width}${height}${format}`
    }
    return `${url}?imageMogr2/auto-orient/strip${format}`
  }

  Vue.prototype.$imageGrayLevel = (ele, hgt = 0) => {
    if (typeof window === 'undefined' || !ele) {
      return 0
    }

    let [data, width, height, length, i = -4, count = 0] = []

    const getRGB = (reallyImage) => {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext && canvas.getContext('2d')
      const rgb = { r: 0, g: 0, b: 0 }
      const blockSize = 5 // only visit every 5 pixels

      height = canvas.height = hgt || reallyImage.naturalHeight || reallyImage.offsetHeight || reallyImage.height
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

  Vue.prototype.$scrollY = (targetY, timer, ease) => {
    window.requestAnimFrame = (function () {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60)
        }
    }())

    let currentTime = 0
    const scrollY = window.scrollY
    const scrollTargetY = targetY || 0
    const speed = timer || 2000
    const easing = ease || 'easeOutSine'
    const time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8))
    const easingEquations = {
      easeOutSine: function (pos) {
        return Math.sin(pos * (Math.PI / 2))
      }
    }
    const tick = () => {
      currentTime += 1 / 60
      const p = currentTime / time
      const t = easingEquations[easing](p)
      if (p < 1) {
        window.requestAnimFrame(tick)
        window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t))
      } else {
        window.scrollTo(0, scrollTargetY)
      }
    }
    tick()
  }
}

Vue.use(Helpers)
