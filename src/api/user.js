/*
 * @Description: file content
 * @Author: zy
 * @Date: 2019-09-05 17:00:27
 * @LastEditors: zy
 * @LastEditTime: 2019-09-05 22:38:10
 */
import http from '@/utils/httpRequest'

export function login (data) {
  return http({
    // url: http.adornUrl('account/login'),
    url: http.adornUrl('/sys/login'),
    method: 'post',
    data: http.adornData(data)
  })
}

export function getUserInfo () {
  return http({
    // url: http.adornUrl('user/getBytoken'),
    url: http.adornUrl('/sys/user/info'),
    method: 'get'
  })
}
