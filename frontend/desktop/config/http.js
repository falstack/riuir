const host = require('../.env').host
const dev = process.env.NODE_ENV === 'development'

exports.config = {
  baseURL: dev ? host.dev : 'http://localhost/',
  browserBaseURL: dev ? host.dev : host.prod,
  headers: { Accept: 'application/json' },
  withCredentials: true,
  timeout: 10000,
  errorHandler (err) {
    console.log(err); // eslint-disable-line
  }
}
