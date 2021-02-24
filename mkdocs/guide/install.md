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
1.执行命令行会有如下提示：
- 'Overwrite'，表示继续执行初始化，下载远程模板目录到当前目录，并替换掉当前目录下所有文件；
- 'Cancel'，表示结束命令行，退出初始化。

2.可以添加参数-p|--path在指定目录下初始化项目：
```sh
smart init -p [dir] appName
```
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

## 快速创建
通过命令可以快速创建符合小程序page、component、file；
```sh 
smart create [options]
Options:
    -p --page [pageName]            create page
    -c --component [componentName]  create component
    -f --file <fileName>            create file
    -h, --help                      display help for command
```
 - **-p|--page**: 创建一个page目录，里面包含和[pageName]同名的四个文件，后缀分别为：[.js](https://smartprogram.baidu.com/docs/develop/framework/devjs/)、[.css](https://smartprogram.baidu.com/docs/develop/framework/devcss/)、[.json](https://smartprogram.baidu.com/docs/develop/framework/devjson/)、[.swan](https://smartprogram.baidu.com/docs/develop/framework/dev/)。具体解释可参考[小程序页面](https://smartprogram.baidu.com/docs/develop/framework/function_page/)
 - **-c|--component**: 创建一个自定义component目录，里面包含和[componentName]同名的四个文件，后缀分别为：.js、.css、.json、.swan。具体解释可参考[小程序自定义组建](https://smartprogram.baidu.com/docs/develop/framework/custom-component/)
 - **-f|--file**: 可以快速创建一个文件，例如：
    ```sh
    smart create -f index.js
    ```
    快速创建一个page页；
    ```javascript
    Page({
        data: {

        },
        onLoad: function () {
            // 监听页面加载的生命周期函数
        },
        onReady: function() {
            // 监听页面初次渲染完成的生命周期函数
        },
        onShow: function() {
            // 监听页面显示的生命周期函数
        },
        onHide: function() {
            // 监听页面隐藏的生命周期函数
        },
        onUnload: function() {
            // 监听页面卸载的生命周期函数
        },
        onPullDownRefresh: function() {
            // 监听用户下拉动作
        },
        onReachBottom: function() {
            // 页面上拉触底事件的处理函数
        },
        onShareAppMessage: function () {
            // 用户点击右上角转发
        }
    });
    ```


::: tip 提示
**[pageName]｜[componentName]**: 可以是目录结构的，例如 
```sh
samrt create -p pages/a/

samrt create -c components/c/
```
:::

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

3.
```sh
smart update
```
更新Smart CLI命令行。

4.
```sh
smart doc
```
返回Smart CLI文档地址。
