import http from './api'
import deepAssign from 'deep-assign';
const Helpers = {}

Helpers.install = function (Vue, options) {
  Vue.prototype.$http = http

  Vue.prototype.$deepAssign = deepAssign
}

export default Helpers
