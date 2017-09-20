import 'moment/locale/zh-cn'
import Vue from 'vue'
import App from './app.vue'
import router from './router/index'
import store from './store/index'
import Helpers from './utils/helpers'
import Element from 'element-ui'
import moment from 'moment'
import Modal from 'component/modal'

Vue.use(require('vue-moment'), {
  moment
})
Vue.use(Element)
Vue.use(Helpers)
Vue.component(Modal.name, Modal)

export const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
