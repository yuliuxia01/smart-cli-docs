## 模板配置文件
模板配置文件为config.js，该文件放在项目根目录的build目录下面，支持定制化配置修改。

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
    port: 8080
};

module.exports = {
    paths,
    rules,
    clientMock,
    onlineMock,
    pxtorpx
};
```

**具体配置说明如下：**
## pxtorpx
## paths
## rules
## clientMock
## onlineMock