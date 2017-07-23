/*
 ** 只在生产模式的客户端中使用
 */
export default ({ app }) => {
  if (process.BROWSER_BUILD && process.env.NODE_ENV === 'production') {
    let _hmt = _hmt || [];
    (function () {
      const hm = document.createElement('script')
      hm.src = 'https://hm.baidu.com/hm.js?5c22f3db91001090bfc7d5096c296534'
      const s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    })()
    /*
     ** 每次路由变更时进行pv统计
     */
    app.router.afterEach((to) => {
      _hmt.push(['_trackPageview', to.fullPath])
    })
  }
}
