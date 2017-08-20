export default function (ctx) {
  ctx.userAgent = ctx.isServer ? ctx.req.headers['user-agent'] : navigator.userAgent
}
