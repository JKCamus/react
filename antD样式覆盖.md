# antD样式覆盖

### 通常情况下：

当需要改变单独样式且不影响全局，结合lees、sass实现。

首先找到需要覆盖的antD样式的类，如`.ant-menu-submenu-arrow::before`，将该类声明到全局。需要注意，有些必须添加`!important`修改样式如下：

```less {.class1 .class}
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

### 覆盖全局

```js
:global(.ant-menu-submenu-arrow::before  ) {
    display: none !important;
  }
```

覆盖全局的情况，会使全局内使用到这类组件的样式全都更改。

### 特殊的，如`Select`中的`ant-select-dropdown-menu`相关组件

特殊的原因就在于，`ant-select-dropdown-menu`是动态创建的，挂载在了别处。诚然，修改Select组件的样式，antD给了几个api，用于细化调整这些组件。

如：在Select组件下

1. `dropdownClassName?: string;`
2.   `dropdownStyle?: React.CSSProperties;`
3.   `dropdownMenuStyle?: React.CSSProperties;`

但是这几个只能修改menu相关，如果想改item的样式，还得在Option上更改样式。

这里提供另外一个方式：

将`ant-select-dropdown-menu`的modal挂载到当前父级：

​        `getPopupContainer={e => e.parentNode}`

之后便可以直接使用之前的覆盖样式方式：







