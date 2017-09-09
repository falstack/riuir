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
  },
  responseInterceptor (res) {
    const cookie = res.headers['set-cookie']
    if (cookie) {
      const parseCookie = (prototype, key) => {
        const cookies = {
          httpOnly: false
        };
        prototype.split('; ').forEach(item => {
          const temp = item.split('=')
          if (temp[0] === key) {
            cookies['key'] = temp[0]
            cookies['value'] = temp[1]
          } else if (temp[0] === 'HttpOnly') {
            cookies['httpOnly'] = true
          } else if (temp[0] === 'Max-Age') {
            cookies['maxAge'] = parseInt(temp[1], 10)
          } else {
            cookies[temp[0]] = temp[1]
          }
        })
        return cookies;
      }
      global.$csrf = parseCookie(cookie[0], 'XSRF-TOKEN')
      global.$session = parseCookie(cookie[1], 'riuir')
    }
    return res
  }
}
