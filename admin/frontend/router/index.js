import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      compoonent: () => import('view/index')
    },
    {
      path: '/bangumi/list',
      component: () => import('view/bangumi/list')
    },
    {
      path: '/bangumi/tag',
      component: () => import('view/bangumi/tag')
    },
    {
      path: '/bangumi/video',
      component: () => import('view/bangumi/video')
    }
  ]
})
