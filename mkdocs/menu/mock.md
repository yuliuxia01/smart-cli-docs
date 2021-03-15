# 开发MOCK
百度原生小程序开发的时，前端想要获取后端的数据，必须通过前段发送请求的方式获取。而Mock的功能主要目的方便前段同学在开发的初期，只关注前端的开发，而不会因为接口的原因导致前端同学开发工作的阻塞。

Smart CLI同时支持本地MOCK和远程MOCK，具体使用如下：

### 本地MOCK

1. **修改配置**
```json
# smart.config.json/mock
"client": {
    "port": 3000,
    "host": "http://localhost"
}
```
2. **创建MOCK文件**
::: tip 提示
mock文件支持json和function两种格式。
:::
实例：
```js
# mock/title/title.js
module.exports = (req, res) => {
    return {
        code: 0,
        msg: '请求成功',
        data: {
            code: 0,
            data: {
                title: '智能小程序示例 - mock',
                description: 'smart-template - mock'
            },
            msg: '请求成功'
        }
    };
};
# 或者 mock/title/title.json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "code": 0,
        "data": {
            "title": "智能小程序示例 - mock",
            "description": "smart-template - mock"
        },
        "msg": '请求成功'
    }
}
```

3. **执行命令行**
```sh 
npm run mock:clientMock
```
示例：
```js
// ./src/pages/index/index.js
/**
 * @file index.js
 * @author smart-cli
 * @description index pages
 */
import api from '../../assets/js/api.conf.js';

Page({
    hasRequest: true,
    data: {
        title: '智能小程序示例',
        description: 'smart-template',
        list: []
    },
    // before firstRender
    onInit() {
        // 监听页面加载的生命周期函数
        if (this.hasRequest) {
            this.hasRequest = false;
            this.init();
        }
    },
    // after firstRender
    onLoad() {
        // 监听页面加载的生命周期函数
        if (this.hasRequest) {
            this.hasRequest = false;
            this.init();
        }
    },
    // 初始化接口
    init() {
        this.getTitle();
        this.getList();
    },
    // 获取title信息
    getTitle() {
        const self = this;
        swan.request({
            url: `${api.MOCK_API_BASE}/title/title`,
            data: {
                name: 'getName',
                age: '20'
            },
            success(res) {
                if (res.data.code === 0) {
                    const {title, description} = res.data.data.data;
                    self.setData({
                        title,
                        description
                    });
                }
            }
        });
    },
    // 获取list列表信息
    getList() {
        const self = this;
        swan.request({
            url: `${api.MOCK_API_BASE}/title/list`,
            data: {
                name: 'postName',
                age: '20'
            },
            method: 'POST',
            success(res) {
                if (res.data.code === 0) {
                    self.setData({
                        list: res.data.data.data
                    });
                }
            }
        });
    }
});
```

### 远程MOCK
1. **修改配置**
```json
# smart.config.json/online
"online": {
    "port": 3100,
    "host": "http://yapi.baidu-int.com/mock/11046"
}
```
2. **执行命令行**
```sh 
npm run mock:serverMock
```
