const host = require('../.env').host

exports.config = {
  baseURL: process.env.NODE_ENV === 'development' ? host.dev : typeof window === 'undefined' ? '/' : host.prod,
  headers: { Accept: 'application/json' },
  withCredentials: true,
  timeout: 10000,
  errorHandler (err) {
    console.log(err); // eslint-disable-line
  }
}
