# 模板目录
Smart CLI推荐的模板目录如下
```js
<app_name>/
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
├─ .eslintrc
├─ .fecsrc
├─ build.sh
├─ ci.yml
├─ jconfig.json
├─ package.json
├─ pkginfo.json
├─ project.swan.json
├─ README.md
└─ smart.config.json
```
### src 业务代码目录
- assets：静态文件目录；
- components：自定义组件目录；
- modules：独立分包，具体用法可参考：[官网-独立分包](https://smartprogram.baidu.com/docs/develop/framework/subpackages_independent/)；
- packages：普通分包，具体用法可参考：[官网-普通分包](https://smartprogram.baidu.com/docs/develop/framework/subpackages/)；
- pages：页面文件目录；
- skeleton：骨架屏，具体用法可参考：[官网-骨架屏](https://smartprogram.baidu.com/docs/develop/performance/peformance_gradually_load/)；
- app.js：全局JS逻辑，具体用法可参考[官网-app.js](https://smartprogram.baidu.com/docs/develop/framework/processjs/)
- app.json：可通过配置app.json，设置SWAN的界面、路径、多Tab等，具体可参考[官网-app.json](https://smartprogram.baidu.com/docs/develop/framework/process/)；
- app.less：主包中的全局css，对独立分包无效。
### 小程序相关
- pkginfo.json：小程序配置文件；
- project.swan.json：swan配置文件，具体配置说明[project.swan.json](./swan#project.swan.js)。
### mock 本地mock文件目录
目录规则可以根据具体的api路径拟定，mock文件的返回格式可以是json或者function，具体实现可参考：[Mock](./mock)。

### Smart CLI编译配置信息
### 其他
- package.json：node项目的配置文件；
- .eslintrc.js：eslint配置文件；
- .fecsrc.js：fecs配置文件，具体可参考[官网-FECS](http://fecs.baidu.com/)；
- build.sh：[打包编译](./build)用的脚本；
- ci.yml：百度上线aglie编译使用的ci.yml文件。
