import axios from 'axios'

export default axios.create({
  baseURL: process.env.baseUrl,
  timeout: 10000
})
