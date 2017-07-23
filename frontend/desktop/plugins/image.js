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
    return createElement(
      this.tag
    )
  },
  data () {
    return {
      listeners: Object.create(null),
      resource: this.src
    }
  },
  mounted () {
    const image = this.$el
    if (this.checkInView(image)) {
      this.loadResource(image)
    }
    for (const event of this.events) {
      const id = this.addListener(document, event, this.throttle(() => {
        if (this.checkInView(image)) {
          this.loadResource(image)
          this.removeListener(id)
        }
      }, 500, 1000))
    }
  },
  methods: {
    loadResource (image) {
      this.tag.toLowerCase() === 'img' ? image.setAttribute('src', this.resource) : image.style.backgroundImage = `url(${this.resource})`
    },
    checkInView (image) {
      const rect = image.getBoundingClientRect()
      return (rect.top < window.innerHeight * this.scale && rect.bottom > 0) && (rect.left < window.innerWidth * this.scale && rect.right > 0)
    },
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
    },
    removeListener (id) {
      if (this.listeners[id]) {
        const h = this.listeners[id]
        h.element.removeEventListener(h.event, h.handler, h.capture)
        this.listeners[id] = null
      }
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

import Vue from 'vue'
Vue.component(Image.name, Image)
