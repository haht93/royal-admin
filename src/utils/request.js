import axios from 'axios'
import store from '@/store'

const requestAxios = axios.create({
  baseURL: `https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com/v1/`,
  headers: {
    'Accept': 'application/json;charset=utf-8',
    'Content-Type': 'application/json'
  },
  timeout: 15000
})

requestAxios.interceptors.request.use(config => {
  let { token } = store.getters['auth/token']
  console.log(token);
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
},
error => {
  return Promise.reject(error)
})

requestAxios.interceptors.response.use(response => {
  return response
}, error => {
  const response = error.response
  switch (response.status) {
    case 401:
      store.dispatch('auth/resetTokenAction').then(() => {
        location.reload
      })
      break
    default:
      return Promise.reject(error)
  }
  return Promise.reject(error)
})

export default requestAxios