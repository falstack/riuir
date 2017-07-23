import Vue from 'vue'

const Share = {
  name: 'v-share',
  render: (createElement) => {
    return createElement('div', {
      attrs: {
        'id': 'share',
        'data-new': ''
      }
    })
  },
  mounted () {
    setTimeout(() => {
      // eslint-disable-next-line
      new socialShare(this.$el, {
        url: window.location.href.split('?')[0],
        title: document.title,
        source: 'riuir 天下漫友是一家',
        disabled: ['google', 'twitter', 'facebook', 'linkedin', 'diandian']
      })
      this.$el.removeAttribute('data-new')
    }, 200)
  }
}

Vue.component(Share.name, Share)

export default ({ app }) => {
  app.router.afterEach(() => {
    const ele = document.getElementById('share')
    if (ele && ele.getAttribute('data-new') === null) {
      setTimeout(() => {
        ele.innerHTML = ''
        ele.initialized = false
        // eslint-disable-next-line
        new socialShare(ele, {
          url: window.location.href.split('?')[0],
          title: document.title,
          source: 'riuir 天下漫友是一家',
          disabled: ['google', 'twitter', 'facebook', 'linkedin', 'diandian']
        })
      }, 0)
    }
  })
}
