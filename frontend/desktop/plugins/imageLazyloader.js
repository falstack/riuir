class ImageLazyLoader {
  /**
   * [constructor 初始化 ImageLazyLoader 的参数]
   *
   * @param {string} meta           [ 需要做懒加载的 HTML 标记 ]
   * @param {string} loading        [ 为懒加载的图片设置一个全局的 loading 图，传入图片的 url ]
   * @param {array} events          [ 需要监听的窗口事件 ]
   * @param {number} scale          [ 触发图片记载的比率，如果为 1，代表刚刚进入屏幕就加载，如果为2，代表距离可视窗口一个屏幕就加载 ]
   * @param {string} filled         [ 需要做懒加载的图片，当已经加入监听队列时的标记，防止重复监听同一张图片 ]
   *
   * @return {null}
   */
  constructor ({ meta, loading, events, scale, filled } = {}) {
    this.listeners = {}
    this.meta = meta || 'data-src'
    this.events = events || ['scroll']
    this.loading = loading || 'http://cdn.riuir.com/avatar'
    this.scale = scale || 1.5
    this.filled = filled || 'data-src-filled'
    this.id = 0
  }

  /**
   * [addListener 绑定监听事件，写入对象之中，用于之后 remove 掉]
   *
   * @param {Object} ele            [ 需要绑定监听事件的 DOM 对象 ]
   * @param {string} evt            [ 需要监听的事件名，如 'scroll' ]
   * @param {function} handler      [ 事件监听的 callback ]
   * @param {boolean} capture       [ 事件捕获 || 事件冒泡，默认为冒泡 ]
   *
   * @returns {number}              [ 返回本次事件监听的 id，用于之后 remove ]
   */
  addListener (ele, evt, handler, capture = false) {
    const id = this.id++
    ele.addEventListener(evt, handler, capture)
    this.listeners[id] = {
      element: ele,
      event: evt,
      handler,
      capture
    }

    return id
  }

  /**
   * [removeListener 解绑指定的事件监听]
   *
   * @param id                      [ 绑定事件时返回的标识符 ]
   *
   * @return {null}
   */
  removeListener (id) {
    if (this.listeners[id]) {
      const h = this.listeners[id]
      h.element.removeEventListener(h.event, h.handler, h.capture)
      this.listeners[id] = null
    }
  }

  /**
   * [init 开始对页面内的所有需要懒加载的图片进行监听，该方法在 window onload 之后调用]
   */
  init () {
    const events = this.events
    for (let i = 0; i < events.length; ++i) {
      document.addEventListener(events[i], () => {
        const images = this.getImages()
        for (let j = 0; j < images.length; ++j) {
          const image = images[j]
          if (this.shouldListening(image)) {
            image.setAttribute(this.filled, '')
            this.changeLoadingImage(image)
            for (let k = 0; k < events.length; ++k) {
              const id = this.addListener(document, events[k], this.throttle(() => {
                if (this.checkInView(image)) {
                  this.loadImageResource(image)
                  this.removeListener(id)
                }
              }, 500, 1000))
            }
          }
        }
      })
    }
  }

  /**
   * [heartbeat 对于一开始就在页面可视区域内的图片，执行'心跳检测'，以免在不触发（如 scroll）事件的情况下可视区域内的图片一直不加载，该方法在 图片的 HTML 插入 DOM-tree 时调用 ]
   */
  heartbeat () {
    const images = this.getImages()
    for (let i = 0; i < images.length; ++i) {
      const image = images[i]
      if (this.shouldListening(image) && this.checkInView(image)) {
        this.changeLoadingImage(image)
        this.loadImageResource(image)
      }
    }
  }

  /**
   * [changeLoadingImage 为指定图片添加一个 loading 图]
   *
   * @param {Object}image          [ 要操作的 DOM 对象 ]
   *
   * @return {null}
   */
  changeLoadingImage (image) {
    if (this.loading) {
      if (image.tagName.toLowerCase() === 'img') {
        image.setAttribute('src', this.loading)
      } else {
        image.style.backgroundImage = `url(${this.loading})`
      }
    }
  }

  /**
   * [loadImageResource 将图片的资源加载到 DOM 里]
   *
   * @param {Object}image          [ 要操作的 DOM 对象 ]
   *
   * @return {null}
   */
  loadImageResource (image) {
    const resource = image.getAttribute(this.meta)
    if (image.tagName.toLowerCase() === 'img') {
      image.setAttribute('src', resource)
    } else {
      image.style.backgroundImage = `url(${resource})`
    }
    image.removeAttribute(this.meta)
    image.removeAttribute(this.filled)
  }

  /**
   * [getImages 获取所有需要懒加载的 DOM]
   *
   * @return {NodeList}
   */
  getImages () {
    return document.querySelectorAll(`[${this.meta}]`)
  }

  /**
   * [shouldListening 根据 HTML 的 filled 标记，判断该图片是否没有被加入监听队列中]
   *
   * @param {Object}image          [ 要操作的 DOM 对象 ]
   * @return {boolean}
   */
  shouldListening (image) {
    return image.getAttribute(this.filled) === null
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
    return (rect.top < window.innerHeight * this.scale && rect.bottom > 0) && (rect.left < window.innerWidth * this.scale && rect.right > 0)
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

window.$imageLazyLoader = new ImageLazyLoader()
