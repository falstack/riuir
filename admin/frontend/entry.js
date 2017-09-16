import 'es6-promise/auto'
import App from './views/index.vue'
import router from './router/index'
import store from './store/index'

export const app = new Vue({
  router,
  store,
  ...App
}).$mount('#app');