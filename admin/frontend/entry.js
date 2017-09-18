import 'moment/locale/zh-cn'
import Vue from 'vue'
import App from './app.vue'
import router from './router/index'
import store from './store/index'
import Helpers from './utils/helpers'
import Element from 'element-ui'
import moment from 'moment'

Vue.use(require('vue-moment'), {
  moment
})
Vue.use(Element)
Vue.use(Helpers)

export const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
