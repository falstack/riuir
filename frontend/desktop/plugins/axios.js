import axios from 'axios'
import Vue from 'vue'

export default axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? 'http://riuir.dev/' : Vue.prototype.$isServer ? '/' : 'https://api.riuir.com/',
  headers: { Accept: 'application/json' },
  timeout: 10000,
  withCredentials: true
})
