import Vue from 'vue'

const Image = {
  name: 'v-img',
  props: {
    tag: {
      type: String,
      default: 'img'
    },
    src: {
      required: true,
      type: String,
      default: ''
    },
    scale: {
      type: Number,
      default: 2
    },
    events: {
      type: Array,
      default: function () {
        return ['scroll', 'resize']
      }
    }
  },
  render: function (createElement) {
    return createElement(this.tag, {
      attrs: {
        src: this.tag.toLowerCase() === 'img'
          ? 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA'
          : null
      }
    })
  },
  data () {
    return {
      listeners: {},
      resource: this.src,
      id: 0
    }
  },
  mounted () {
    const image = this.$el
    if (this.checkInView(image)) {
      this.loadResource(image)
    }
    const id = this.addListener(document, this.throttle(() => {
      if (this.checkInView(image)) {
        this.loadResource(image)
        this.removeListener(id)
      }
    }, 500, 1000))
  },
  methods: {
    loadResource (image) {
      this.tag.toLowerCase() === 'img' ? image.setAttribute('src', this.resource) : image.style.backgroundImage = `url(${this.resource})`
    },
    checkInView (image) {
      const rect = image.getBoundingClientRect()
      return (rect.top < window.innerHeight * this.scale && rect.bottom > 0) && (rect.left < window.innerWidth * this.scale && rect.right > 0)
    },
    addListener (ele, handler, capture = false) {
      const arr = []
      this.events.forEach(evt => {
        const id = this.id++
        ele.addEventListener(evt, handler, capture)
        this.listeners[id] = {
          element: ele,
          event: evt,
          handler,
          capture
        }
        arr.push(id)
      })
      return arr
    },
    removeListener (id) {
      id.forEach(item => {
        if (this.listeners[item]) {
          const h = this.listeners[item]
          h.element.removeEventListener(h.event, h.handler, h.capture)
          Reflect.deleteProperty(this.listeners, item)
        }
      })
    },
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
}

Vue.component(Image.name, Image)
