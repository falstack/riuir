import axios from 'axios'
import Vue from 'vue'
import host from '../.env'

export default axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? 'http://riuir.dev/' : Vue.prototype.$isServer ? `${host}/` : 'https://api.riuir.com/'
})
