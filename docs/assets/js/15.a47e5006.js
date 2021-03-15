(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{367:function(t,a,s){"use strict";s.r(a);var r=s(42),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"生产打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生产打包"}},[t._v("#")]),t._v(" 生产打包")]),t._v(" "),s("p",[s("code",[t._v("sh build.sh")]),t._v("：生产环境编译打包，具体用法：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" build.sh\n")])])]),s("p",[t._v("命令执行成功，会在项目根目录下生产一个output目录，output目录下有一个<app_name>.tar.gz的压缩目录。eg：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("app_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n├─ output\n│  └─ dist"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("swan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz\n")])])]),s("h4",{attrs:{id:"build-sh-主要工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-sh-主要工作"}},[t._v("#")]),t._v(" build.sh 主要工作：")]),t._v(" "),s("ul",[s("li",[t._v("将<app_name>项目名称赋值给一个变量，具体命令："),s("code",[t._v('APP_NAME="dist-swan"')])]),t._v(" "),s("li",[t._v("删除项目根目录下的dist文件，具体命令："),s("code",[t._v("rm -rf dist")]),t._v("；")]),t._v(" "),s("li",[t._v("重新安装package.json中的依赖，具体命令："),s("code",[t._v("npm install --registry=<baidu_registry> --no-progress")]),t._v("；")]),t._v(" "),s("li",[t._v("在根目录下新建output目录，并在output目录下新建一个名称为<app_name>的目录，具体命令："),s("code",[t._v("mkdir -p $CURRENT_PATH/output/$APP_NAME")]),t._v("；")]),t._v(" "),s("li",[t._v("执行"),s("code",[t._v("npm run build")]),t._v("命令；")]),t._v(" "),s("li",[t._v("拷贝根目录下的dist目录下的所有文件到ouput/<app_name>下，具体命令："),s("code",[t._v("cp -rf dist/* $CURRENT_PATH/output/$APP_NAME")]),t._v("；")]),t._v(" "),s("li",[t._v("将output目录下的所有文件目录打包到<app_name>.tar.gz压缩文件里，具体命令："),s("code",[t._v("cd $CURRENT_PATH/output && tar zcvf $APP_NAME.tar.gz $APP_NAME)")]),t._v("。")])]),t._v(" "),s("h4",{attrs:{id:"npm-run-build-的主要工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-run-build-的主要工作"}},[t._v("#")]),t._v(" npm run build 的主要工作：")]),t._v(" "),s("ul",[s("li",[t._v("执行了 smart run build")])])])}),[],!1,null,null,null);a.default=e.exports}}]);