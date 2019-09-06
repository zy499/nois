/*
 * @Description: The file enables `models` to import all models in a one-shot manner. There should not be any reason to edit this file.
 * @Author: zy
 * @Date: 2019-09-06 11:00:22
 * @LastEditors: zy
 * @LastEditTime: 2019-09-06 11:28:07
 */
travel('../', (pathname) => {
  console.log(pathname)
})
const files = require.context('../modules', false, /\.js$/)
const modules = {}
files.keys().forEach(key => {
  const filename = key.replace(/(\.\/|\.js)/g, '')
  modules[filename] = files(key)['default']
})
export default modules

const fs = require('fs')
const path = require('path')
function travel (dir, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.log(err)
    } else {
      files.forEach((file) => {
        var pathname = path.join(dir, file)
        fs.stat(pathname, (err, stats) => {
          if (err) {
            console.log(err)
          } else if (stats.isDirectory()) {
            travel(pathname, callback)
          } else {
            callback(pathname)
          }
        })
      })
    }
  })
}
