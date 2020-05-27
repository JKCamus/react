# redux-saga

## 初识redux-saga

项目用了react-redux

异步采用了redux-saga

> redux-saga 是一个用于管理 Redux 应用异步操作的中间件（又称异步 action）。 redux-saga 通过创建 Sagas 将所有的异步操作逻辑收集在一个地方集中处理，可以用来代替 redux-thunk 中间件。

- Reducers 负责处理 action 的 state 更新
- Sagas 负责协调那些复杂或异步的操作

（Sagas是通过Generator函数来创建的，如果有不熟悉 Generator函数使用的，[请查看阮老师对Generator的介绍](http://www.ruanyifeng.com/blog/2015/04/generator.html)。）

Sagas 不同于`redux-thunks`，thunks 是在action被创建时调用，而 Sagas只会在应用启动时调用（但初始启动的 Sagas 可能会动态调用其他 Sagas），Sagas 可以被看作是在后台运行的进程，Sagas 监听发起的action，然后决定基于这个 action来做什么：是发起一个异步调用（比如一个 fetch 请求），还是发起其他的action到Store，甚至是调用其他的 Sagas。

`redux-saga`所有的任务都通用 yield Effects 来完成（Effect 可以看作是 redux-saga 的任务单元）。Effects 都是简单的 Javascript 对象，包含了要被 `Saga middleware` 执行的信息（打个比方，你可以看到 Redux action其实是一个个包含执行信息的对象）， redux-saga 为各项任务提供了各种Effect创建器，比如调用一个异步函数，发起一个action到Store，启动一个后台任务或者等待一个满足某些条件的未来的 action明出处。（项目中，发起一个action去请求数据，然后通过saga再调用一个获取成功的action，存到store中）





