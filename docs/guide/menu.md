# 目录结构
smart-cli推荐的模板目录如下
```js
projectName/
├─ build/
│  ├─ compress.gulp.js
│  ├─ config.js
│  ├─ mock.js
│  ├─ postinstall.js
│  ├─ process-plugin.gulp.js
│  └─ server.gulp.js
│
├─ src/
│  └─ assert/
│  ├─ components/  
│  ├─ modules/
│  ├─ packages/
│  ├─ pages/
│  ├─ skeleton/
│  ├─ app.js
│  ├─ app.json
│  └─ app.less
│
├─ mock/
│
├─ typings/
│
├─ .eslintrc.js
├─ .fecsrc.js
├─ build.sh
├─ ci.yml
├─ gulpfile.js
├─ package.json
├─ pkginfo.json
└─ project.swan.json
```
### build编译配置相关
- compress.gulp.js 编译打包
- config.js 配置文件
- mock.js 接口mock
- postinstall.js install预处理
- process-plugin.gulp.js 环境变量注入
- server.gulp.js 本地server
### src业务代码目录
- assets/ 静态目录
- components/ 组件目录
- modules/ 独立分包
- packages/ 普通分包
- pages/ 页面目录
- skeleton/ 骨架屏
- app.js 小程序入口js
- app.json 小程序入口json配置
- app.less 小程序入口公共css
### 其他
- mock/  接口模拟
- typings/ 类型检测
- .eslintrc.js eslint配置文件
- .fecsrc.js 提交校验文件
- build.sh build生成目录shell
- ci.yml
- gulpfile.js 编译命令入口
- package.json 配置文件
- pkginfo.json 小程序配置文件
- project.swan.json 小程序配置文件