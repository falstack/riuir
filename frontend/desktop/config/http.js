import { host } from '~/.env'

export default {
  baseURL: process.env.NODE_ENV !== 'production' ? host.dev : typeof window === 'undefined' ? '/' : host.prod,
  headers: { Accept: 'application/json' },
  withCredentials: true,
  timeout: 10000
}
