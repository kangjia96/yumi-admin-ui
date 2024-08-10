import service from '@/utils/service.js'

export function reqLogin(data) {
  return service({
    url: '/login',
    method: 'post',
    data
  })
}

export function reqLogout() {
  return service({
    url: '/logout',
    method: 'post'
  })
}

export function reqVerifyCode() {
  return service({
    url: '/verifyCode',
    method: 'get'
  })
}
