## 模板配置文件
模板配置文件为smart.config.json，支持定制化配置修改。

```json
{
    "pxtorpx": {
        "platform": "swan",
        "designWidth": 1242,
        "ratio": 3
    },
    "limit": {
        "include": [".png", ".JPEG", ".jpg"],
        "maxSize": 1024
    },
    "mock": {
        "client": {
            "port": 3000,
            "host": "http://localhost"
        },
        "online": {
            "port": 3100,
            "host": "http://yapi.baidu-int.com/mock/11046"
        }
    }
}
```

**配置项具体说明如下：**

## pxtorpx
帮助开发者快速转换视图单位，目前仅支持px2rpx。具体用法可查看：[CSS相关](./menu/style#pxtorp)，
参考配置为：
```json
"pxtorpx": {
    "platform": "swan",
    "designWidth": 1242,
    "ratio": 3
}
```
- platform：string，转换模式，swan表示百度小程序，采用的是px2rpx；
- designWidth：number，设计稿原尺寸；
- ratio：number，像素比。

## limit
检测编译后产物的大小，并警告。
:::tips
小程序的包大小会影响小程序的性能，建议对于包里引用图片等资源的大小，进行限制。过大的图片，建议使用CDN。
:::
参考配置为：
```json
"limit": {
    "include": [".png", ".JPEG", ".jpg"],
    "maxSize": 1024
}
```
- include：指定需要限制的大小的文件后缀；
- maxSize：指定文件大小最大值，单位(B)。
## mock
开发时，使用的API接口的mock配置。
实例配置为：
```json
 "mock": {
    "client": {
        "port": 3000,
        "host": "http://localhost"
    },
    "online": {
        "port": 3100,
        "host": "http://yapi.baidu-int.com/mock/11046"
    }
}
```
- client
本地Mock时使用，启动一个本地node服务器。具体使用可查看：[Mock](./menu/mock)。
    - host：本地MOCK的URL地址；
    - port：number，本地node服务器的端口号。

- online
远程Mock时使用，启动一个本地node服务器。具体使用可查看：[Mock](./menu/mock)。
    - host：远程MOCK的URL地址；
    - port：number，本地node服务器的端口号。
