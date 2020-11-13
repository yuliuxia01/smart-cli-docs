## 准备工作
1. **申请一个[百度账号](https://smartprogram.baidu.com/developer/index.html)并[创建智能小程序](https://smartprogram.baidu.com/docs/introduction/register_consummate/)**

2. **全局安装smart-cli**
```sh
npm install @baidu/smart-cli -g --registry=http://registry.npm.baidu-int.com
```
常见安装问题可参考：[安装不成功](./question)

3. **安装完成后执行smart --version，查看是否安装成功**
```sh
smart --version
```
## 初始化
```sh
smart init <app_name>
```
初始化命令主要工作：
- 当前目录下创建名称为<app_name>的目录；
- 下载默认[模板目录](/menu/menu)到<app_name>目录下。

## 安装依赖
```sh
cd <app_name>
npm install
```
install命令主要工作：
- 安装当前目录下package.json中的依赖；
- 执行在package.json的scripts属性里定义的postinstall钩子；
- 本地生成一个dist目录，和百度原生小程序的目录一致，并安装依赖。

可以使用百度开发者工具代开dist目录，查看是否安装成功，具体使用可参考百度小程序[官网](https://smartprogram.baidu.com/developer/index.html)。

## 开发
1. **启动本地Server**
```sh
npm run dev
```
dev命令执行成功，会启动一个本地server，监听本地修改，并编译。监听规则参考配置文件中[rules](/config#rules)配置。可以使用百度开发者工具代开<app_name>目录，查看是否编译成功。

2. **本地Mock**
```sh
npm run server:client
```
命令行执行成功后，会启动一个本地Node服务，监听请求，根据请求地址，返回对应的本地mock文件。请求监听规则，可参考配置文件中[clientMock](/config#clientMock)。mock文件的访问规则可在[mock.js](/menu/mock)中查看。

3. **远程Mock**
```sh
npm run server:online
```
命令行执行成功后，会启动一个本地Node服务，监听请求，根据请求地址，返回对应的本地mock文件。请求监听规则，可参考配置文件中[onlineMock](/config#onlineMock)。

## 编译
```sh
npm run build
```
命令行会将<app_name>目录中的[指定文件](/config#rules)，[编译](/menu/build)并输出到dist目录中，和npm run dev的区别在于，npm run dev会监听修改，并编译，多次编译。

## 其他命令行

```sh
npm run start
```
相当于npm install和npm run dev。

::: tip 提示
以上命名行，均可以在<app_name>目录下的package.json的scripts属性中查看，可根据具体需求进行定制化修改。
:::

