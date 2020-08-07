## 自定义Hoook

hook只能在函数组件顶层使用，自定义hook可以在普通函数内使用，常用与带useHooks的逻辑复用抽取。

**自定义Hook本质上只是一种函数代码逻辑的抽取，严格意义上来说，它本身并不算React的特性。**

定义方式

```js
const useLoggingLife = (name) => {    //必须使用use开头，里面可以使用hooks
  useEffect(() => {
    console.log(`${name}组件被创建出来了`);
    return () => {
      console.log(`${name}组件被销毁掉了`);
    };
  }, []);
};
```

使用方式

```js
const Profile = () => {
  useLoggingLife("Profile");
  return <h1>Profile</h1>;
};
```



