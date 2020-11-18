# 生产打包
```sh build.sh```：生产环境编译打包，具体用法：
```sh
sh build.sh
```
命令执行成功，会在项目根目录下生产一个output目录，output目录下有一个<app_name>.tar.gz的压缩目录。eg：
```js
<app_name>
├─ output
│  └─ dist-swan.tar.gz
```

#### build.sh 主要工作：
- 将<app_name>项目名称赋值给一个变量，具体命令：```APP_NAME="dist-swan"```
- 删除项目根目录下的dist文件，具体命令：```rm -rf dist```；
- 重新安装package.json中的依赖，具体命令：```npm install --registry=<baidu_registry> --no-progress```；
- 在根目录下新建output目录，并在output目录下新建一个名称为<app_name>的目录，具体命令：```mkdir -p $CURRENT_PATH/output/$APP_NAME```；
- 执行```npm run build```命令；
- 拷贝根目录下的dist目录下的所有文件到ouput/<app_name>下，具体命令：```cp -rf dist/* $CURRENT_PATH/output/$APP_NAME```；
- 将output目录下的所有文件目录打包到<app_name>.tar.gz压缩文件里，具体命令：```cd $CURRENT_PATH/output && tar zcvf $APP_NAME.tar.gz $APP_NAME)```。

#### npm run build 的主要工作：
- 读取配置文件；
- 根据配置文件的[rules配置](/config#rules)，将相应的文件处理成目标文件，eg：less/stylus文件处理成css文件；
- 根据配置文件的[paths配置](/config#paths)，将上面处理好的文件输出到指定的dist目录中。
