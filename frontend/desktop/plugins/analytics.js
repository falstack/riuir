/*
 ** 只在生产模式的客户端中使用
 */
export default ({ app }) => {
  if (process.BROWSER_BUILD && process.env.NODE_ENV === 'production') {
    let _hmt = _hmt || [];
    (function () {
      const s = document.getElementsByTagName('script')[0]
      /* 360统计 */
      const qh = document.createElement('script')
      qh.async = true
      qh.defer = true
      qh.src = '//s.union.360.cn/174447.js'
      s.parentNode.insertBefore(qh, s)
    })()
    /*
     ** 每次路由变更时进行pv统计
     */
    app.router.afterEach((to) => {
      _hmt.push(['_trackPageview', to.fullPath])
    })
  }
}
