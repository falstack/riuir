/*eslint-disable */
/*
 ** 只在生产模式的客户端中使用
 */
import VueRouter from 'vue-router'

if (process.BROWSER_BUILD && process.env.NODE_ENV === 'production') {
  window.onload = function () {
    const _hmt = _hmt || [];
    (function() {
      const hm = document.createElement('script');
      hm.src = 'https://hm.baidu.com/hm.js?5c22f3db91001090bfc7d5096c296534';
      const s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(hm, s);
    })();
    /*
     ** 每次路由变更时进行pv统计
     */
    const router = new VueRouter()
    router.afterEach((to, from) => {
      /*
       ** 告诉 GA 增加一个 PV
       */
      _hmt.push(['_trackPageview', to.fullPath])
    })
  }
}