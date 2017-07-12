class ImageLoader {
  /**
   * [constructor 初始化 ImageLoader 的参数]
   *
   * @param {string} attr           [ 需要做懒加载的 HTML 标记 ]
   * @param {array} events          [ 需要监听的窗口事件 ]
   * @param {number} scale          [ 触发图片加载的比率，如果为 1，代表刚刚进入屏幕就加载，如果为 2，代表距离可视窗口一个屏幕就加载 ]
   *
   * @return {null}
   */
  constructor ({ attr, events, scale } = {}) {
    this.events = events || ['scroll']
    this.image = {
      scale: scale || 1.5,
      attr: attr || 'data-src'
    }
  }

  /**
   * [init 开始对页面内的所有需要懒加载的图片进行监听，该方法在 window onload 之后调用]
   */
  init () {
    for (const event of this.events) {
      document.addEventListener(event, this.throttle(() => {
        this.heartbeat()
      }, 500, 1000))
    }
  }

  /**
   * [heartbeat 对于一开始就在页面可视区域内的图片，执行'心跳检测'，以免在不触发（如 scroll）事件的情况下可视区域内的图片一直不加载，该方法在 图片的 HTML 插入 DOM-tree 时调用 ]
   */
  heartbeat () {
    for (const image of this.getImages()) {
      this.loadResource(image)
    }
  }

  /**
   * [loadResource 将图片的资源加载到 DOM 里]
   *
   * @param {Object}image          [ 要操作的 DOM 对象 ]
   *
   * @return {null}
   */
  loadResource (image) {
    if (this.constructor.hasImage(image)) {
      return
    }
    if (this.checkInView(image)) {
      const resource = image.getAttribute(this.image.attr)
      if (resource !== null) {
        if (image.tagName.toLowerCase() === 'img') {
          image.setAttribute('src', resource)
        } else {
          image.style.backgroundImage = `url(${resource})`
        }
        image.removeAttribute(this.image.attr)
      }
    }
  }

  /**
   * [hasImage 检测 DOM 是否已经有图片]
   * @param image
   * @returns {boolean}
   */
  static hasImage (image) {
    return !!(image.tagName.toLowerCase() === 'img' ? image.getAttribute('src') : image.style.backgroundImage)
  }

  /**
   * [getImages 获取所有需要懒加载的 DOM]
   *
   * @return {NodeList}
   */
  getImages () {
    return document.querySelectorAll(`[${this.image.attr}]`)
  }

  /**
   * [checkInView 检查指定的 DOM 是否在浏览器的可视区域内]
   *
   * @param {Object} ele          [ 需要检测的 DOM 对象 ]
   *
   * @return {boolean}
   */
  checkInView (ele) {
    const rect = ele.getBoundingClientRect()
    return (rect.top < window.innerHeight * this.image.scale && rect.bottom > 0) && (rect.left < window.innerWidth * this.image.scale && rect.right > 0)
  }

  /**
   * [throttle 限流函数，只允许函数在指定的时间内运行一次]
   *
   * @param {function} func        [ handle 方法 ]
   * @param {number} delay         [ 每次延迟执行时长，单位 ms ]
   * @param {number} time          [ 执行间隔，单位 ms ]
   * @returns {function(...[*]=)}
   */
  throttle (func, delay, time) {
    let timeout
    let startTime = new Date()
    return (...args) => {
      const curTime = new Date()
      clearTimeout(timeout)
      if (curTime - startTime >= time) {
        func.apply(this, args)
        startTime = curTime
      } else {
        timeout = setTimeout(func, delay)
      }
    }
  }
}

window.imageLoader = new ImageLoader()

window.imageLoader.init()
