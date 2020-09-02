import router from '.'
import store from '@/store'
import Vue from 'vue'

router.beforeEach(async (to, from, next) => {
  const loggedIn = store.getters['auth/token']
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (loggedIn === '') {
      next({
        name: 'login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (loggedIn === '') {
      next()
    } else {
      next({ name: 'users' })
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || 'Royal Admin'
  })
})