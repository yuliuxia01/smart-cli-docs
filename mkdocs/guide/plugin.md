# 插件
[[toc]]
## smart-cli-tools

无需单独安装，已内置。

### 目录
```js
smart-cli-tools/
├─ index.js
├─ http.js
├─ location.js
├─ querystring.js
├─ swan.js
└─ package.json
```

### http

用来发送请求，支持GET、POST，封装了小程序原装request。

```js
getApp().$api.http.get(url, params);

getApp().$api.http.post(url, params);
```
示例：
```js
Page({
    http: getApp().$api.http,
    data: {
        title: '智能小程序示例',
        description: 'smart-template',
        list: []
    },
    getTitle() {
        const self = this;
        this.http.get('http://localhost:3000/title/title').then(res => {
            if (res.data.code === 0) {
                const {title, description} = res.data.data;
                self.setData({
                    title,
                    description
                });
            }
        });
    },
    getList() {
        const self = this;
        this.http.get('http://localhost:3000/title/list').then(res => {
            if (res.data.code === 0) {
                if (res.data.code === 0) {
                    self.setData({
                        list: res.data.data
                    });
                }
            }
        });
    },
    onInit() {
        this.getTitle();
        this.getList();
    }
});
```
### location
根据地址，获取定位信息，例如经度、纬度

### querystring

处理字符串string和对象object的转换的功能，主要有以下api:

- **urlParams/decode/parse：将string解析成对应的Object，返回Object，主要是解析url中的参数；**
   
   参数：

   | 参数名 | 是否必传 | 类型 | 默认值 | 备注 |
   |-------|--------|--------|-------|------------|
   | qs | 是 | sting | 无 | 需要解析的字符 |
   | sep | 否 | sting| & | 分隔符，默认 |
   | eq | 否 | sting| = | 相等符号，默认 |
   | options | 否 | object| {maxKeys: 1000} | 其他参数，maxKeys最大可解析字符串长度 |
- **queryString/encode/stringify：将Object格式化成指定的string格式；**  
    参数：

    | 参数名 | 是否必传 | 类型 | 默认值 | 备注 |
    |-------|--------|--------|-------|------------|
    | obj | 是 | object | 无 | 需要格式化的对象 |
    | sep | 否 | sting| & | 分隔符，默认 |
    | eq | 否 | sting| = | 相等符号，默认 |

示例
```js
let obj = {a: "1", b: "2", cc: "[1]"};
getApp().$api.queryString(obj);
// 输出 a=1&b=2&
getApp().$api.queryString(obj);
getApp().$api.queryString(obj);
```


### swan
封装了百度原声小程序的部分api，主要有以下api:
- **systemInfoSync：获取系统信息**
```js
getApp().$api.systemInfoSync()
```
- **getVw：视觉稿单位换算，返回number，vw值**

参数：

| 参数名 | 是否必传 | 类型 | 默认值 | 备注 |
|-------|--------|--------|-------|------------|
| num | 是 | number | 无 | 视觉稿标注大小 |
| dpr | 否 | number| 3 | 倍数 |
| vw | 否 | number| 414 | 视图宽度 |
- **getBduss：获取bduss值**

参数：

| 参数名 | 是否必传 | 类型 | 默认值 | 备注 |
|-------|--------|--------|-------|------------|
| opt | 否 | object | {useCache: true} | 是否使用缓存 |
::: warning 注意
1. 使用该api的时候，需保证小程序有调用swan.getBDUSS的权限
2. 当useCache为true，表示使用缓存，会在storage中存储一个key为'BDUSS'，value为前账号bduss的缓存
:::
- **getCommonSysInfo： 获取系统信息，例如：CUID，uid，baidu_id，zid等系统信息**
返回值：

| 名称 |  类型 | 说明 |
|-------|--------|--------|
| cuid |  string | 设备唯一标识 |
| uid |  string | 用户id |
| imei |  string | 手机序列号(只有安卓端返回) |
| zid |  string | 加密后的指纹信息 |
| baidu_id |  string | Cookie 中 BAIDUID 百度App 11.3 开始支持 |
| sid |  string | Cookie 中 H_WISE_SIDE 百度App 11.3 开始支持 |
| uuid |  string | 通用唯一识别码 |
| userAgent |  string | 浏览器的 userAgent |

::: warning 注意
1. 使用该api的时候，需保证小程序有调用swan.getCommonSysInfo的权限
2. 调用API的时候，会在storage中存储一个key为'commonSysInfo'，value为前账号getCommonSysInfo内容的缓存
:::
- **textToast：显示消息提示框**

参数：

| 参数名 | 是否必传 | 类型 | 默认值 | 备注 |
|-------|--------|--------|-------|------------|
| text | 是 | string | 无 | 消息内容 |
| duration | 否 | string | 2000| 提示的延迟时间，单位毫秒 |
| icon | 否 | string | none | 图标，有效值"success"、"loading"、"none" |