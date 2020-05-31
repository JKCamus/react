# 关于useSWR

## 大概

useSWR作为一个hooks，像其他hooks一样，只能在函数组件的主函数中使用。

但是可以作为函数组件中一个灵活的处理异步请求的hooks。

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