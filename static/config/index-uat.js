/*
 * @Description: file content
 * @Author: zy
 * @Date: 2019-08-25 19:40:48
 * @LastEditors: zy
 * @LastEditTime: 2019-08-25 20:37:55
 */
/**
 * 验收环境
 */
;(function () {
  window.SITE_CONFIG = {}

  // api接口请求地址
  window.SITE_CONFIG['baseUrl'] = 'http://demo.renren.io/renren-fast'
  // window.SITE_CONFIG['baseUrl'] = 'http://2603426c6s.wicp.vip/renren-fast/';

  // cdn地址 = 域名 + 版本号
  window.SITE_CONFIG['domain'] = './' // 域名
  window.SITE_CONFIG['version'] = ''   // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl'] = window.SITE_CONFIG.domain + window.SITE_CONFIG.version
})()
