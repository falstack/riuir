import axios from 'axios'
import Vue from 'vue'

export default axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? 'http://riuir.dev/' : Vue.prototype.$isServer ? 'https://172.19.36.16:443/' : 'https://api.riuir.com/'
})
