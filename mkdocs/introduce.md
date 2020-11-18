# Smart CLI

Smart CLI，为了方便开发百度小程序时可以快速生成小程序开发目录，CSS语法兼容等目的，而存在的一个脚手架命令行工具。
### 特点：
- 基于[百度原生小程序](https://smartprogram.baidu.com/docs/develop/tutorial/demo/)；
- 为使用原生语法开发百度小程序提供一套快捷便利的的命令行工具；
- 可以快速生成符合百度原生小程序开发的目录结构；
- 支持[本地和远程MOCK](./menu/mock)，方便联调；
- 支持stylus，less等[CSS预处理](./menu/style)；
- 支持[px2rpx](./menu/style)单位转换；
- [配置化](./menu/config)，方便扩展。

::: warning 注意
Smart CLI 安装要求
- [Node.js](https://nodejs.org/en/) >= 9；
- 目前npm源只支持百度内网源；
- Smart CLI需全局安装。
:::
### [安装](./guide/install#准备工作)
```sh
sudo npm install -g @baidu/smart-cli
```
### [初始化](./guide/install#初始化)
```sh
 smart init <app_name>
```
### [安装依赖](./guide/install#安装依赖)
```sh
 cd <app_name>
 npm install
```
### [开发](./guide/install#本地开发)
```sh
 npm run dev
```
