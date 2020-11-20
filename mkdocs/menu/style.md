# CSS相关
css相关的内容主要是针对css文件的预处理(styuls、less)和设计稿中px2rpx的转换问题。

优点：
- 内置了[LESS](http://lesscss.org)和[Stylus](http://learnboost.github.com/stylus)两大流行的css预处理器，提高开发效率；
- 内置了[px2rpx](https://www.npmjs.com/package/postcss-unittrans/v/0.1.1)插件，帮助开发者快速实现视图单位转换。

默认配置如下：
```js
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
    stylus: `${paths.develop}/**/*.stylus`
};
```
::: tip 提示
具体实现可以自行阅读项目目录下build/compress.gulp.js文件，可以根据自己的具体需求进行扩展。
:::

示例如下：
```less
# less文件
.container {
    .title {
        font-size: 80px;
        text-align: center;
        margin-top: 200px;
    }
    .des {
        text-align: center;
        margin-top: 60px;
    }
    .list {
        margin-top: 60px;
        text-align: center;
    }
}
```
```css
# css文件
.container .title {
  font-size: 48.309rpx;
  text-align: center;
  margin-top: 120.773rpx;
}
.container .des {
  text-align: center;
  margin-top: 36.232rpx;
}
.container .list {
  margin-top: 36.232rpx;
  text-align: center;
}

```