## SCU优化

shouldComponentUpdate优化，在必要的地方进行render，不必要都不进行更新

```js
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }
```

可以优化，但是每次手写工作量是非常大的，

这个时候使用PureComponent，，加入引入依赖，改Component为PureComponent

相应的源码部分

在pureComponent中，存在属性is  ，之后实现`shallowEqual`方法，对新旧props和新旧state进行浅层判断，对比对象的key和value

![image-20200629074414953](C:\Users\Camus\AppData\Roaming\Typora\typora-user-images\image-20200629074414953.png)

在react中建议只做浅层比较，因为深层比较会损害性能。所以一般都可以使用PureComponent

### 函数组件使用memo进行优化

memo是一个高阶组件，可以当成是一个函数，传入一个组件，并生成新的组件。使用的时候从react中引入memo

```js
const MemoHeader = memo(function Header() {
  console.log("Header被调用");
  return <h2>我是Header组件</h2>
})
```

