import { getUsers } from '@/api/users'

  const state = {
    Users: {
      list: []
    }
  }
  const getters = {
    listUser: (state) => {
      return state.Users.list
    }
  }
  const mutations = {
    SET_LIST_USER: (state, list) => {
      state.Users.list = list
    }
  }
  const actions = {
    async getUsers ({commit}) {
      try {
        const responseUsers = await getUsers()
        commit('SET_LIST_USER', responseUsers.data)
        return responseUsers
      } catch (error) {
        throw error
      }
    }
  }
  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }