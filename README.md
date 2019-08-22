## 乘务数据中心
### 成都地铁客运服务管理平台
# 安装依赖
npm install /cnpm install

# 启动服务
npm run dev
# 构建生产环境(默认)
npm run build

# 构建测试环境
npm run build --qa

# 构建验收环境
npm run build --uat

# 构建生产环境
npm run build --prod

## 开启mock本地模拟数据
通过设置/src/mock/index.js)文件中fnCreate(common, [false])[]中括号中为true／false开启关闭当前模块mock本地模拟数据功能。（默认开启）
通过设置/src/mock/modules/文件下模块isOpen: [false][]中括号中为true／false开启关闭当前api接口mock本地模拟数据功能。（默认开启）

## 开发时，如何连接后台项目api接口？
修改/static/config/index.js目录文件中 window.SITE_CONFIG['baseUrl'] = '本地api接口请求地址';

 

## 开发时，如何解决跨域？
修改/config/dev.env.js目录文件中OPEN_PROXY: true开启代理
修改/config/index.js目录文件中proxyTable对象target: '代理api接口请求地址'
重启本地服务