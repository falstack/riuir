const Koa = require('koa')
const Nuxt = require('nuxt').Nuxt
const Builder = require('nuxt').Builder

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

// Instantiate nuxt.js
const nuxt = new Nuxt(config)

// Build in development
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build().catch(e => {
    console.error(e) // eslint-disable-line no-console
    process.exit(1)
  })
}

app.use(async ctx => {
  ctx.status = 200 // koa defaults to 404 when it sees that status is unset
  const csrf = global.$csrf
  const session = global.$session
  if (csrf) {
    ctx.cookies.set(csrf.key, csrf.value, {
      httpOnly: csrf.httpOnly,
      expires: csrf.expires,
      path: csrf.path,
      maxAge: csrf.maxAge
    })
    global.$csrf = undefined
  }
  if (session) {
    ctx.cookies.set(session.key, session.value, {
      httpOnly: session.httpOnly,
      expires: session.expires,
      path: session.path,
      maxAge: session.maxAge
    })
    global.$session = undefined
  }
  return new Promise((resolve, reject) => {
    ctx.res.on('close', resolve)
    ctx.res.on('finish', resolve)
    nuxt.render(ctx.req, ctx.res, promise => {
      // nuxt.render passes a rejected promise into callback on error.
      promise.then(resolve).catch(reject)
    })
  })
})

app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
