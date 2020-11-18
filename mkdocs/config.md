## 模板配置文件
模板配置文件为config.js，该文件放在项目根目录的/build目录下面，支持定制化配置修改。

```js
const path = require('path');

const cwd = (_path = '') => {
    return path.resolve(process.cwd(), _path);
};

const pxtorpx = {
    platform: 'swan',
    designWidth: 1242,
    ratio: 3
};

const paths = {
    develop: cwd('src'),
    dist: cwd('dist'),
    root: cwd()
};

const rules = {
    less: `${paths.develop}/**/*.less`,
    stylus: `${paths.develop}/**/*.stylus`,
    package: `${paths.root}/{pkginfo,project.swan}.json`,
    plugins: `${paths.develop}/plugins/*.js`
};

rules.swanFile = [
    `${paths.develop}/**`,
    `!${rules.less}`,
    `!${rules.stylus}`
];

const clientMock = {
    env: {
        NODE_ENV: 'clientMock',
        NODE_URL: 'http://localhost:3000'
    },
    port: 3000
};

const onlineMock = {
    env: {
        NODE_ENV: 'onlineMock',
        NODE_URL: ''
    },
    port: 3100
};

module.exports = {
    pxtorpx,
    paths,
    rules,
    clientMock,
    onlineMock
};
```

**配置项具体说明如下：**

## pxtorpx
帮助开发者快速转换视图单位，目前仅支持px2rpx。具体用法可查看：[CSS相关](/menu/style#pxtorp)，
默认配置为：
```js
const pxtorpx = {
    platform: 'swan',
    designWidth: 1242,
    ratio: 3
};
```
- platform：string，转换模式，swan表示百度小程序，采用的是px2rpx；
- designWidth：number，设计稿原尺寸；
- ratio：number，像素比。

## paths
方便[编译](/menu/build)，环境变量处理和后面配置使用，默认配置为：
```js
const paths = {
    develop: cwd('src'),
    dist: cwd('dist'),
    root: cwd()
};
```
- develop：string，业务代码目录；
- dist：string，编译产出目录；
- root：string，根目录。
## rules
编译时会用到，具体用法可查看：[编译Build](/menu/build)，
默认配置为：
```js
const rules = {
    less: `${paths.develop}/**/*.less`,
    stylus: `${paths.develop}/**/*.stylus`,
    package: `${paths.root}/{pkginfo,project.swan}.json`,
    plugins: `${paths.develop}/plugins/*.js`
};

rules.swanFile = [
    `${paths.develop}/**`,
    `!${rules.less}`,
    `!${rules.stylus}`
];
```
- less：string，匹配制定目录下的less，eg：默认配置中的rules.less表示匹配业务代码目录下的所有less文件；
- stylus：string，匹配制定目录下的stylus，eg：默认配置中的rules.stylus表示匹配业务代码目录下的所有stylus文件；
- package：string，匹配制定目录下的小程序配置相关文件，eg：默认配置中的rules.package表示匹配业务代码目录下的[pkginfo.json](/menu/swan#pkginfo)、[project.swan.json](/menu/swan#project.swan)；
- plugins：string，匹配制定目录下的插件相关文件，eg：默认配置中的rules.plugins表示匹配业务代码目录下的plugins目录下的多有js文件；
- swanFile：array，匹配制定目录下的插件相关文件，eg：默认配置中的rules.swanFile表示匹配业务代码目录下，除去less，stylus的所有文件。
## clientMock
本地Mock时使用，启动一个本地node服务器。具体使用可查看：[Mock](/menu/mock)。
```js
const clientMock = {
    env: {
        NODE_ENV: 'clientMock',
        NODE_URL: 'http://localhost:3000'
    },
    port: 3000
};
```
- env：object，环境变量
    - NODE_ENV：表示当前的MOCK环境；
    - NODE_URL：本地MOCK的URL地址；
- port：number，本地node服务器的端口号。

## severMock
本地Mock时使用，启动一个本地node服务器。具体使用可查看：[Mock](/menu/mock)。
```js
const onlineMock = {
    env: {
        NODE_ENV: 'onlineMock',
        NODE_URL: ''
    },
    port: 3100
};
```
- env：object，环境变量
    - NODE_ENV：表示当前的MOCK环境；
    - NODE_URL：远程MOCK的URL地址；
- port：number，本地node服务器的端口号。


::: tip 提示
所有的默认配置均可根据具体需求，进行修改和扩展。
:::
