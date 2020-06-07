# [设置yarn源修改为淘宝源](https://www.cnblogs.com/my466879168/p/12891308.html)

## yarn修改为淘宝源

和npm修改淘宝源的的步骤差不多

1. 查看当前源

   `yarn config get registry`

2. 临时修yran源
   `yarn save package_name --registry https://registry.npm.taobao.org/`

3. 修改yarn源为taobao源
   `yarn config set registry https://registry.npm.taobao.org/`

4. 修改yarn源为官方源
   `yarn config set registry https://registry.yarnpkg.com`

