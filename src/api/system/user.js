import service from '@/utils/service.js'

export function reqUserInfo(id) {
  return service({
    url: `/user/${id}`,
    method: 'GET'
  })
}

export function reqUserList(data) {
  return service({
    url: '/user',
    method: 'GET',
    params: data
  })
}

export function reqUserAdd(data) {
  return service({
    url: '/user',
    method: 'POST',
    data
  })
}
export function reqUserUpdate(data) {
  return service({
    url: '/user',
    method: 'PUT',
    data
  })
}

export function reqUserDelete(id) {
  return service({
    url: `/user/${id}`,
    method: 'DELETE'
  })
}

export function reqUserDeleteBatch(ids) {
  return service({
    url: '/user/batch',
    method: 'DELETE',
    data: ids
  })
}

export function reqUserChangeStatus(id, status) {
  return service({
    url: `/user/changeStatus/${id}/${status}`,
    method: 'PUT'
  })
}

export function reqUserResetPassword(id) {
  return service({
    url: `/user/resetPassword/${id}`,
    method: 'PUT'
  })
}

export function reqUserChangePassword(data) {
  return service({
    url: '/user/changePassword',
    method: 'PUT',
    data
  })
}
