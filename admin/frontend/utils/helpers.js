import http from './api'

const Helpers = {}

Helpers.install = function (Vue, options) {
  Vue.prototype.$http = http
}

export default Helpers
