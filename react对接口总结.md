## react对接口总结

### 获取数据的几种方式

1. 纯`axios`，或是封装的`axios`进行异步的请求数据，虽土，但是很奏效，也是最直接的。

   ```js
       axios({
         method: 'post',
         url: `${api.view}/conf/checkViewConf`,
         data: params
       }).then((res) => {
         this.setState(
           { dataSource: res.data.payload.columns },
           console.log('11', res.data.payload.columns)
         )
       })
   ```

   

2. 在函数组件中，可以采用`useSWR`获取，好用，会多次请求数据，需要对值进行判断，因为拿到的不一定是最新的值，或者需要的最后的值。常规使用方式：

   **定义fetcher**

   ```js
     const fetcher = (url) =>
       axios({
         method: 'post',
         url: url,
         data: params
       }).then((res) => res.data.payload.columns)
   ```

   **调用`useSWR`**

   ```js
     const { data: columns } = useSWR(`${api.view}/conf/checkViewConf`, fetcher)
   ```

   调取数据需要在当前的函数内，直接获取columns就可以，不需要再`useState`了。

3. 使用saga，结合react-redux，现在有一定印象，但是不能完全吃透，需要尝试一下。

待更新

### 获取数据的时机

**class类组件内**，多是在`componentDidmount`里面

**函数组件**，尽量在useEffect里面，当然，useSWR是不能在useEffect里面使用的。并且，在useEffect中，需要提交再次获取数据的依赖deps。

### 保存数据的时机（坑多）

异步获取的数据，坑会很多。需要不断进行总结，先将遇到的问题进行总结：

1. 函数组件内，保存或者配合useContext和useReducer时，派发最好在useEffect中，数据才是最新的。

2. useState和setState都是异步的，要想获取最新的数据，需要处理下。useState可以通过useRef

   



## `useState`

