# **React-redux**

我们可用把共享状态放到父组件的 context 上，这个父组件下所有的组件都可以从 context 中直接获取到状态而不需要一层层地进行传递了。但是直接从 context 里面存放、获取数据增强了组件的耦合性；并且所有组件都可以修改 context 里面的状态就像谁都可以修改共享状态一样，导致程序运行的不可预料。

既然这样，为什么不把 context 和 store 结合起来？毕竟 store 的数据不是谁都能修改，而是约定只能通过 `dispatch` 来进行修改，这样的话每个组件既可以去 context 里面获取 store 从而获取状态，又不用担心它们乱改数据了。



## 组件的复用性

什么样的组件才叫复用性强的组件。如果一个组件对外界的依赖过于强，那么这个组件的移植性会很差，就像这些严重依赖 context 的组件一样。

如果一个组件的渲染只依赖于外界传进去的 `props` 和自己的 `state`，而并不依赖于其他的外界的任何数据，也就是说像纯函数一样，给它什么，它就吐出（渲染）什么出来。这种组件的复用性是最强的，别人使用的时候根本不用担心任何事情，只要看看 `PropTypes` 它能接受什么参数，然后把参数传进去控制它就行了。

我们把这种组件叫做 Pure Component，因为它就像纯函数一样，可预测性非常强，对参数（`props`）以外的数据零依赖，也不产生副作用。这种组件也叫 Dumb Component，因为它们呆呆的，让它干啥就干啥。写组件的时候尽量写 Dumb Component 会提高我们的组件的可复用性。

## react-redux逻辑

需要高阶组件帮助我们从 context 取数据，我们也需要写 Dumb 组件帮助我们提高组件的复用性。所以我们尽量多地写 Dumb 组件，然后用高阶组件把它们包装一层，高阶组件和 context 打交道，把里面数据取出来通过 `props` 传给 Dumb 组件。

我们把这个高阶组件起名字叫 `connect`，因为它把 Dumb 组件和 context 连接（connect）起来了：

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export connect = (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    // TODO: 如何从 store 取数据？

    render () {
      return <WrappedComponent />
    }
  }

  return Connect
}
```

