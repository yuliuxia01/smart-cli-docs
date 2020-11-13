###  安装

::: warning 注意

smart-cli 安装要求
- [Node.js](https://nodejs.org/en/) >= 9
- npm源需要是百度源，http://registry.npm.baidu-int.com/
- smart-cli需全局安装
:::

```sh
npm install @baidu/smart-cli -g --registry=http://registry.npm.baidu-int.com
# 安装完成后执行smart --version，查看是否安装成功
smart --version

```
::: tip 注意

npm源的指定有以下可参考的方式：
- 通过config命令
```sh
npm config set registry http://registry.npm.baidu-int.com
```

- 修改.npmrc文件
```sh
# .npmrc
registry=http://registry.npm.baidu-int.com
```

- 安装时使用 --registry
```sh
$ npm install @baidu/smart-cli -g --registry=http://registry.npm.baidu-int.com
```

- 使用[nrm](https://www.npmjs.com/package/nrm)管理工具管理registry地址
```sh
npm install -g nrm
nrm add baidu http://registry.npm.baidu-int.com
nrm use baidu
```

:::

2、初始化项目，并下载模板
```sh
$ smart init projectName
```

3、安装依赖
```sh
 $ cd projectName
 $ npm install
```
