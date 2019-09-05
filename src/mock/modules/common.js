/*
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-22 21:28:23
 * @LastEditors: zy
 * @LastEditTime: 2019-09-05 22:23:03
 */
import Mock from 'mockjs'

// 登录
export function login () {
  return {
    // isOpen: false,
    url: '/sys/login',
    type: 'post',
    data: {
      'msg': 'success',
      'code': '00000000',
      'data': {
        'expire': Mock.Random.natural(60 * 60 * 1, 60 * 60 * 12),
        'token': Mock.Random.string('abcdefghijklmnopqrstuvwxyz0123456789', 32)
      }
    }
  }
}

// 退出
export function logout () {
  return {
    // isOpen: false,
    url: '/sys/logout',
    type: 'post',
    data: {
      'msg': 'success',
      'code': '00000000'
    }
  }
}
