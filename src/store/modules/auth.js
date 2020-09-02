import { loginApi } from '@/api/auth'
import { getCookie, saveCookie, removeCookie } from '@/utils/cookie'

const state = {
  token: getCookie('access_token') ? JSON.parse(getCookie('access_token')) : ''
}
const getters = {
  token: state => state.token
}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  RESET_TOKEN: (state) => {
    state.token = ''
    removeCookie('access_token')
  }
}
const actions = {
  async login ({commit}, params) {
    try {
      const response = await loginApi(params)
      // eslint-disable-next-line camelcase
      let access_token = response.data
      saveCookie('access_token', JSON.stringify(access_token))
      commit('SET_TOKEN', access_token)
      return response
    } catch (error) {
      return error
    }
  },
  resetTokenAction ({commit}) {
    return new Promise(resolve => {
      commit('RESET_TOKEN')
      resolve()
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}