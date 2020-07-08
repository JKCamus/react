## `useReducer`&&`useContext`

### 构造简易且方便的`redux`

1. 创建全局的Context
2. 创建全局的Reducer
3. 将全局`useReducer`返回的state和dispatch传递给全局`Context.Provider`的value中
4. 用全局构建好的带有Context的组件包裹应用根组件

首先将`useContext`和`useReducer`封装进Provider,之后只需要将Provider将子组件包裹起来，子组件就能共享同一个`useContext`和`useReducer`

### 封装Provider

```tsx
import React, { useReducer, createContext } from 'react'

const Context = createContext()
export default Context

const initState = {}

const reducer = (state, action) => {
  switch (action.type) {
    case 'viewName':
      return { ...state, viewName: action.payload }
    default:
      return state
  }
}
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
```

### 包裹子组件

```tsx
import { Provider } from './Provider'
 <Provider>
    子组件
 </Provider>   
```

### 使用方式

```tsx
import React, { useContext, useEffect, useState } from 'react'
import Context from '../../Provider'

const VISOne = () => {
  const { state, dispatch } = useContext(Context)

  const handleOnClick = () => {
    dispatch({ type: 'projectId', payload: Math.random() })
    console.log('点击发光')
  }
  useEffect(() => {
    console.log('我是state', state)
  }, [state])
  return (
    <div>
      <h1>我是步骤一</h1>
      <h1>我是步骤一</h1>
      <h1>我是步骤一</h1>
      <button onClick={() => handleOnClick()}>点我发光</button>
    </div>
  )
}

export default VISOne
```

