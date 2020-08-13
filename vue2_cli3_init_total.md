##  vue2_cli3_init_total

初始化vue项目，采用ant-design-vue的ui框架，antd为react的，不要装错了。

主要难点，安装normalize.css，在自己的reset.css中引入@import "~normalize.css";

之后需要全局引入。

**main.js**中需要工作量最多。

import "assets/css/reset.css";

全局引入antd样式及组件

> import antd from "ant-design-vue";
>
> import "ant-design-vue/dist/antd.css";
>
> Vue.use(antd);

**vue.config.js**

```js
module.exports = {
  lintOnSave: false,  //配置 eslint 不提醒
  configureWebpack: {
    resolve: {
      alias: {				//别名配置
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  },
  devServer: {  			//配置network局域网调试
    public: "172.20.10.4:8081",
    https:false,
    proxy:null,
    hot: true,
    disableHostCheck: true
  }
};
```





