import 'moment/locale/zh-cn'
import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import Helpers from './utils/helpers'
import Element from 'element-ui'
import moment from 'moment'
import Modal from 'component/modal'
import Toggle from 'component/toggle'

Vue.use(require('vue-moment'), {
  moment
})
Vue.use(Element)
Vue.use(Helpers)
Vue.component(Modal.name, Modal)
Vue.component(Toggle.name, Toggle)

export const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
