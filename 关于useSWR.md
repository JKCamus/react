# 关于useSWR

## 大概

- fetch 的兼容性已经足够好，足以替换包括 `$.post` 在内的各种取数封装。
- 原生用得久了，出现了拓展性更好、支持 ssr 的同构取数方案也挺好，比如 isomorphic-fetch、axios。
- 对于数据驱动场景还是不够，数据流逐渐将取数封装起来，同时针对数据驱动状态变化管理进行了 `data` `isLoading` `error` 封装。
- Hooks 的出现让组件更 Reactive，我们发现取数还是优雅回到了组件里，swr 就是一个教科书般的例子。

Hooks替代fetch，**Hooks 可以触达 UI 生命周期，取数本质上是 UI 展示或交互的一个环节**。

useSWR作为一个hooks，像其他hooks一样，只能在函数组件的主函数中使用。

但是可以作为函数组件中一个灵活的处理异步请求的hooks。

使用`useSWR Hooks`有如下特性：

1. 可自动刷新。
2. 组件被销毁再渲染时优先启用本地缓存。
3. 在列表页中浏览器回退可以自动记忆滚动条位置。
4. tabs 切换时，被 focus 的 tab 会重新取数。

当然，自动刷新或重新取数也不一定是我们想要的，SWR 允许自定义配置。

- 可以配置的有：suspense 模式、focus 重新取数、重新取数间隔/是否开启、失败是否重新取数、timeout、取数成功/失败/重试时的回调函数等等。


- 第二个参数如果是 object 类型，则效果为配置项，第二个 fetcher 只是为了方便才提供的，在 object 配置项里也可以配置 fetcher。

> 仓库及APIhttps://github.com/vercel/swr

```
const { data, error, isValidating, mutate } = useSWR(key, fetcher, options)
```

#### Parameters

- `key`: a unique key string for the request (or a function / array / null) [(advanced usage)](https://github.com/vercel/swr#conditional-fetching) 

  `key`一般为地址传入，也作为fetcher的第一个参数。

- `fetcher`: (*optional*) a Promise returning function to fetch your data [(details)](https://github.com/vercel/swr#data-fetching)

- `options`: (*optional*) an object of options for this SWR hook

#### Return Values

- `data`: data for the given key resolved by `fetcher` (or undefined if not loaded)
- `error`: error thrown by `fetcher` (or undefined)
- `isValidating`: if there's a request or revalidation loading
- `mutate(data?, shouldRevalidate?)`: function to mutate the cached data