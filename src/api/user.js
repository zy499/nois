/*
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-05 17:00:27
 * @LastEditors: zy
 * @LastEditTime: 2019-09-05 17:20:46
 */
import http from '@/utils/httpRequest'

export function login (data) {
  return http({
    url: http.adornUrl('account/login'),
    method: 'post',
    data: http.adornData(data)
  })
}

export function getUserInfo () {
  return http({
    url: http.adornUrl('user/getBytoken'),
    method: 'get'
  })
}
