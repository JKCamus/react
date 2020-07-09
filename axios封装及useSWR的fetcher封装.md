## axios封装及useSWR的fetcher封装

### axios修改默认配置

```js
axios.defaults.baseURL = "https://httpbin.org";
axios.defaults.timeout = 5000;
axios.defaults.headers.common["token"] = "dafdafadfadfadfas";
```

### axios 常规二次封装

创建配置文件config.js

```js
const devBaseURL = "https://httpbin.org";
const proBaseURL = "https://production.org";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;
export const TIMEOUT = 5000;
```

封装常规》创建实例》请求拦截》响应拦截》返回信息

```js
import axios from 'axios';

import { BASE_URL, TIMEOUT } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});

instance.interceptors.request.use(config => {
  // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

  // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

  // 3.params/data序列化的操作
  console.log("请求被拦截");

  return config;
}, err => {

});

instance.interceptors.response.use(res => {
  return res.data;
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log("请求错误");
        break;
      case 401:
        console.log("未授权访问");
        break;
      default:
        console.log("其他错误信息");
    }
  }
  return err;
});

export default instance;
```

使用

```js
import request from './service/request';
    request({
      url: "/get",
      params: {
        name: "camus",
        age: 18
      }
    }).then(console.log)
  }
```



