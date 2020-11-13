# smart-cli

smart-cli，为了方便开发小程序时可以快速生成小程序开发目录，CSS语法兼容等目的，而存在的一个脚手架命令行工具。
::: warning 注意
smart-cli 安装要求
- [Node.js](https://nodejs.org/en/) >= 9
- npm源需要是百度源，http://registry.npm.baidu-int.com/
:::
### 安装
```sh
 npm install @baidu/smart-cli -g --registry=http://registry.npm.baidu-int.com
```
### 初始化
```sh
 smart init <app_name>
```
初始化完成后，会快速下载一个[模板目录](./guide/menu)到本地。
### 开始
```sh
 cd <app_name>
 npm install
 npm run dev
```
命令执行完成后，在本地产生一个符合原生小程序规则的 [dist](https://smartprogram.baidu.com/docs/develop/framework/app_service/) 目录，可使用[百度开发者工具](https://smartprogram.baidu.com/docs/introduction/tool/)打开。
### 特点：
- 基于[百度原生小程序](https://smartprogram.baidu.com/docs/develop/tutorial/demo/)；
- 为使用原生语法开发百度小程序提供一套快捷便利的的命令行工具；
- 可以快速生成符合百度原生小程序开发的目录结构；
- 支持[本地和远程MOCK](./menu/mock)，方便联调；
- 支持stylus，less等[CSS预处理](./menu/style)；
- 支持[px2rpx](./menu/style)单位转换；
- [配置化](./menu/config)，方便扩展
