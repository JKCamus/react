"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var instance = _axios["default"].create({
  baseURL: "/api",
  timeout: _config.TIMEOUT
});

instance.interceptors.request.use(function (config) {
  // 1.发送网络请求时, 在界面的中间位置显示Loading的组件
  // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面
  // 3.params/data序列化的操作
  return config;
}, function (err) {});
instance.interceptors.response.use(function (res) {
  return res.data;
}, function (err) {
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
var _default = instance;
exports["default"] = _default;