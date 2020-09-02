import requestAxios from '@/utils/request'

export function getUsers () {
  return requestAxios.get('users')
}