import 'es6-promise/auto'
import 'moment/locale/zh-cn'
import Vue from 'vue'
import App from './views/index.vue'
import router from './router/index'
import store from './store/index'
import Element from 'element-ui'
import moment from 'moment'

Vue.use(require('vue-moment'), {
  moment
})
Vue.use(Element)

export const app = new Vue({
  router,
  store,
  ...App
}).$mount('#app');