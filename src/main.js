// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import './router/middleware'
import store from './store'
import '@/styles/vendors/ti-icons/css/themify-icons.css'
import '@/styles/vendors/base/vendor.bundle.base.css'
import "@/styles/style.css"

Vue.use(Vuex);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
