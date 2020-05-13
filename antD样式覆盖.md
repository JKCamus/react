# antD样式覆盖

当需要改变单独样式且不影响全局的情况下或是当项目中使用到css module的情况时，

首先找到需要覆盖的antD样式的类，如`.ant-menu-submenu-arrow::before`，将该类声明到全局。需要注意，必须添加`!important`修改样式如下：

```less
.antArrow {
  :global(.ant-menu-submenu-arrow::before  ) {
    display: none !important;
  }
  :global(.ant-menu-submenu-arrow::after  ) {
    display: none !important;
  }
}
```

在需要覆盖样式的文件内引入。

`const utilStyles = require('assets/less/util.less')`

或者

`import utilStyles from 'assets/less/util.less'`

之后在对应的组件写上`className={utilStyles.antArrow}`

