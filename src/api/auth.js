import requestAxios from '@/utils/request'

export function loginApi (data) {
  return requestAxios.post('login', data)
}