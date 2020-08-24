"use strict";

var _require = require("http-proxy-middleware"),
    createProxyMiddleware = _require.createProxyMiddleware; // module.exports = function (app) {
//     app.use(proxy('/api', {
//       target: 'http://123.207.32.32:9001',
//       secure: false,
//       changeOrigin: true,
//       pathRewrite: {
//         "^/api": "/api"
//       }
//     }))
// }


module.exports = function (app) {
  app.use(createProxyMiddleware("/api", {
    target: "http://123.207.32.32:9001",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "http://123.207.32.32:9001"
    }
  }));
}; // module.exports = function (app) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: "http://localhost:8888",
//       changeOrigin: true,
//     })
//   );
// };