import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Login from '@/views/login/Login'
import listUser from '@/views/list-user/List'
import HelloWorld from '@/components/HelloWorld'
import store from '../store'

Vue.use(Router)
Vue.use(Vuex);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/users',
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true,
      }
    },
    {
      path: '/users',
      name: 'users',
      component: listUser,
      meta: { requiresAuth: true }
    }
  ]
})

export default router