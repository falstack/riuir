import axios from 'axios'
import { host } from '~/.env'

const http = axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? host.dev : typeof window === 'undefined' ? '/' : host.prod,
  headers: { Accept: 'application/json' },
  withCredentials: true,
  timeout: 10000
})

export default http
