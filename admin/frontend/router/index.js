import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: '首页',
      component: () => import('view/dashboard')
    },
    {
      path: '/bangumi/list',
      name: '番剧列表',
      component: () => import('view/bangumi/list')
    },
    {
      path: '/bangumi/tag',
      name: '番剧标签',
      component: () => import('view/bangumi/tag')
    },
    {
      path: '/bangumi/video',
      name: '番剧视频',
      component: () => import('view/bangumi/video')
    }
  ]
})
