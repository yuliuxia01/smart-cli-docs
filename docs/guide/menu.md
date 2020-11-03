# 目录结构
smart-cli推荐目录如下

```html
projectName/                                      
├─ mock/  # 接口模拟
├─ build/ # 编译配置                                  
│  ├─ compress.gulp.js                                
│  ├─ config.js
│  ├─ mock.js
│  ├─ postinstall.js
│  ├─ process-plugin.gulp.js
│  ├─ server.gulp.js                              
├─ src/ # 业务目录                             
│  └─ assert/ # 静态文件
│  ├─ components/  
│  ├─ modules/
│  ├─ packages/
│  ├─ pages/
│  ├─ skeleton/
│  ├─ app.js
│  ├─ app.json
│  ├─ app.less           
├─ typings/                        
├─ .eslintrc.js
├─ .fecsrc.js 提交校验文件
├─ build.sh  build生成目录shell
├─ ci.yml
├─ gulpfile.js 编译命令入口
├─ package.json 配置文件
├─ pkginfo.json 小程序配置文件
└─ project.swan.json 小程序配置文件

```