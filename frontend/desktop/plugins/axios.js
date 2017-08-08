import axios from 'axios'

export default axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? 'http://riuir.dev' : 'https://api.riuir.com'
})
