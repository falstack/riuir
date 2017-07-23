import Vue from 'vue'

const Share = {
  name: 'v-share',
  render: (createElement) => {
    return createElement('div', {
      attrs: {
        id: 'share'
      }
    })
  }
}

Vue.component(Share.name, Share)

export default ({ app }) => {
  app.router.afterEach(() => {
    const ele = document.getElementById('share')
    if (ele) {
      setTimeout(() => {
        ele.innerHTML = ''
        ele.initialized = false
        // eslint-disable-next-line
        new socialShare(ele, {
          url: window.location.href.split('?')[0],
          source: 'riuir 天下漫友是一家',
          title: document.title,
          disabled: ['google', 'twitter', 'facebook', 'linkedin', 'diandian']
        })
      }, 0)
    }
  })
}
