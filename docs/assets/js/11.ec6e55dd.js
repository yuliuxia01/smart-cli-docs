(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{361:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("smart-cli 安装要求")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js"),a("OutboundLink")],1),s._v(" >= 9")]),s._v(" "),a("li",[s._v("npm源需要是百度源，http://registry.npm.baidu-int.com/")])])]),s._v(" "),a("p",[s._v("本文将帮助你简单了解smart-cli提供了那些功能")]),s._v(" "),a("p",[s._v("1、全局安装 smart-cli")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @baidu/smart-cli -g --registry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://registry.npm.baidu-int.com\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装完成后执行smart --version，查看是否安装成功")]),s._v("\n$  smart --version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("npm源的指定有以下可参考的方式：")]),s._v(" "),a("ul",[a("li",[s._v("通过config命令")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry http://registry.npm.baidu-int.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("修改.npmrc文件")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .npmrc")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("registry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://registry.npm.baidu-int.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("安装时使用 --registry")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @baidu/smart-cli -g --registry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://registry.npm.baidu-int.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("使用"),a("a",{attrs:{href:"https://www.npmjs.com/package/nrm",target:"_blank",rel:"noopener noreferrer"}},[s._v("nrm"),a("OutboundLink")],1),s._v("管理工具管理registry地址")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g nrm\nnrm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" baidu http://registry.npm.baidu-int.com\nnrm use baidu\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("p",[s._v("2、初始化项目，并下载模板")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ smart init projectName\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3、安装依赖")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" $ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" projectName\n $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);