import axios from 'axios'
import Vue from 'vue'

export default axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? 'http://riuir.dev/' : Vue.prototype.$isServer ? '127.0.0.1:443/' : 'https://api.riuir.com/'
})
