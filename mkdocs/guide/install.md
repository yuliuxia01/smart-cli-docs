## 准备工作
1. **全局安装Smart CLI**
```sh
npm install -g @baidu/smart-cli
```
常见安装问题可参考：[CLI安装不成功](../question#cli安装不成功)

2. **安装完成后执行smart --version，查看是否安装成功**
```sh
smart --version
```
## 初始化
```sh
smart init <app_name>
```
初始化命令主要工作：
- 当前目录下创建名称为<app_name>的目录；
- 下载默认[模板目录](../menu/menu)到<app_name>目录下。
::: tip 提示
也可以在已有的项目目录下执行：
```sh
smart init .
```
会有命令行提示：
- 'Overwrite'，表示继续执行初始化，下载远程模板目录到当前目录，并替换掉当前目录下所有文件；
- 'Cancel'，表示结束命令行，退出初始化。
:::

## 安装依赖
```sh
cd <app_name>
npm install
```
install命令主要工作：
- 安装当前目录下package.json中的依赖；
- 执行在package.json的scripts属性里定义的postinstall钩子；

::: tip 提示
执行scripts属性里定义的postinstall钩子时，主要做了以下工作：
- 复制项目目录下的.npmrc、package.json、package-lock.json文件到dist目录下；
- 在dist目录下安装依赖，并且只安装了package.json中dependencies属性中包含的插件。
:::

可以使用百度开发者工具打项目目录，查看是否安装成功，具体使用可参考百度小程序[官网](https://smartprogram.baidu.com/developer/index.html)。

## 开发
1. **启动本地Server**
```sh
npm run dev
```
dev命令执行成功，会启动一个本地server，监听本地修改，并编译。监听规则参考配置文件中[rules](../config#rules)配置。可以使用百度开发者工具打开项目目录，查看是否编译成功。

2. **本地Mock**
```sh
npm run server:client
```
命令行执行成功后，会启动一个本地node服务，监听请求，根据请求地址，返回对应的本地mock文件。请求监听规则，可参考配置文件中[clientMock](../config#clientMock)。mock文件的访问规则可在[Mock](../menu/mock)中查看。

3. **远程Mock**
```sh
npm run server:online
```
命令行执行成功后，会启动一个本地node服务，监听请求，代理到远程MOCK服务器。请求监听规则，可参考配置文件中[onlineMock](../config#onlineMock)。

## 编译
```sh
sh build.sh
```
编译命令，具体可以参考[编译Build](../menu/build)

## 其他命令行
1.
```sh
npm run start
```
相当于npm install和npm run dev。

2.
```sh
npm run build
```
该命令主要是提供给``` sh build.sh ```使用，它会将<app_name>目录中的[指定文件](../config#rules)进行处理并输出到dist目录中。
::: tip 提示
以上命名行，均可以在<app_name>目录下的package.json的scripts属性中查看，可根据具体需求进行定制化修改。
:::

