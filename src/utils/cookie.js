import Cookies from 'js-cookie'

export function getCookie (key) {
  return Cookies.get(key)
}
export function saveCookie (key, value) {
  return Cookies.set(key, value)
}