# 开发MOCK
百度原生小程序开发的时，前端想要获取后端的数据，必须通过前段发送请求的方式获取。而Mock的功能主要目的方便前段同学在开发的初期，只关注前端的开发，而不会因为接口的原因导致前端同学开发工作的阻塞。

Smart CLI同时支持本地MOCK和远程MOCK，具体使用如下：

### 本地MOCK

1. **修改配置**
```js
# build/config.js
const clientMock = {
    env: {
        NODE_ENV: 'clientMock',
        NODE_URL: 'http://localhost:3000'
    },
    port: 3000
};
```
2. **定义MOCK文件获取规则**
```js
# build/mock.js
const clientResponse = ctx => {
    const {request, response} = ctx;
    const _url = path.resolve(process.cwd(), `mock/${request.path}`);
    const json = require(_url);
    if (json instanceof Function) {
        return json(request, response);
    }

    return json;
};
```
::: tip
mock文件支持json和function两种格式。
:::
3. **执行命令行**
```sh 
npm run mock:clientMock
```
示例：
```js
// ./src/pages/index/index.js
const origin = 'http://localhost:3000';
Page({
    data: {
        title: '智能小程序示例',
        description: 'smart-template',
        list: []
    },
    getTitle() {
        const self = this;
        swan.request({
            url: `${origin}/title/title`,
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
    getList() {
        const self = this;
        swan.request({
            url: `${origin}/title/list`,
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
    },
    onInit() {
        this.getTitle();
        this.getList();
    }
});

// mock文件
// ./mock/title/title.js
module.exports = (req, res) => {
    return {
        'code': 0,
        'msg': '请求成功',
        'data': {
            'code': 0,
            'data': {
                'title': '智能小程序示例 - mock',
                'description': 'smart-template - mock'
            },
            'msg': '请求成功'
        }
    };
};
// ./mock/title/list.json
{
    "code": 0,
    "msg": "",
    "data": {
        "code": 0,
        "data": [
            {
                "name": "测试一"
            },
            {
                "name": "测试二"
            },
            {
                "name": "测试三"
            }
        ],
        "msg": ""
    }
}
```

### 远程MOCK
1. **修改配置**
```js
# build/config.js
const onlineMock = {
    env: {
        NODE_ENV: 'onlineMock',
        NODE_URL: 'http://yapi.baidu-int.com/mock/11046'
    },
    port: 3100
};
```
2. **定义MOCK文件获取规则**
```js
# build/mock.js
const onlineResponse = ctx => {
    const {request} = ctx;
    const url = `${process.env.NODE_URL}${request.path}`;
    const {method, header, query} = request;
    let options = {
        method,
        header
    };
    if (method !== 'GET') {
        options = Object.assign({}, options, {
            body: JSON.stringify(query)
        });
    }

    return fetch(url, options).then(res => res.json());
};
```
3. **执行命令行**
```sh 
npm run mock:serverMock
```