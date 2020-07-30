## react-router

window原生路由，hash模式

```js
// 1. 获取reouter-view的DOM
const routerViewEl = document.getElementsByClassName("router-view")[0];

// 获取所有的a元素, 自己来监听a元素的改变
const aEls = document.getElementsByTagName("a");
for (let el of aEls) {
  el.addEventListener("click", e => {
    e.preventDefault();
    const href = el.getAttribute("href");
    console.log("a元素发生了点击");
    history.pushState({}, "", href);  //三个参数，state、title、href。
      								//state是一个由 pushState()方法创建的、与历史纪录相关的JS对象
  }) 								//title,基本上可以为空，
 }

// 执行返回操作时, 依然来到urlChange
window.addEventListener("popState", urlChange);
// window.addEventListener("go", urlChange);// 手动执行go时监听

// 监听URL的改变
function urlChange() {
   switch (location.pathname) {
    case: "/home":
      routerViewEl.innerHTML = "首页";
      break;
    case "/about":
      routerViewEl.innerHTML = "关于";
      break;
    default:
      routertViewEl.innerHTML = "";
  }
}
//hash的优势是兼容性好，能在更老的ie上运行，但是因为有个#，显得不像路由

```

#### React Router的版本4开始，路由不再集中在一个包中进行管理了：

react-router是router的核心部分代码；
 react-router-dom是用于浏览器的；
react-router-native是用于原生应用的

### BrowserRouter或HashRouter

 Router中包含了对路径改变的监听，并且会将相应的路径传递给子组件；
 BrowserRouter使用history模式；
HashRouter使用hash模式；

Link和NavLink： 
 通常路径的跳转是使用Link组件，最终会被渲染成a元素；
 NavLink是在Link基础之上增加了一些样式属性（后续学习）；

**路径选中时，对应的a元素变为红色**，NavLink主要用于更改这类样式。

![image-20200730090425053](C:\Users\Camus\AppData\Roaming\Typora\typora-user-images\image-20200730090425053.png)

NavLInk比Link多了一个activeStyle,可以为a元素添加样式。为避免这个class在其他地方被使用了，出现样式的层叠，也可以自定义class，通过添加 activeClassName，自定义类名

![image-20200730090657958](C:\Users\Camus\AppData\Roaming\Typora\typora-user-images\image-20200730090657958.png)

to属性：Link中最重要的属性，用于设置跳转到的路径；

Route：
 Route用于路径的匹配；
 path属性：用于设置匹配到的路径；
component属性：设置匹配到路径后，渲染的组件；
 exact：精准匹配，只有精准匹配到完全一致的路径，才会渲染对应的组件；

![image-20200729091211780](C:\Users\Camus\AppData\Roaming\Typora\typora-user-images\image-20200729091211780.png)

`<Route exact path="/" component={Home}/>`如果不加exact，则为模糊匹配，会匹配到之下所有。/则为默认的路由地址。

### Switch组件

默认情况下，react-router中只要是路径被匹配到的Route对应的组件都会被渲染，

但是实际开发中，我们往往希望有一种排他的思想：
只要匹配到了第一个，那么后面的就不应该继续匹配了；
 这个时候我们可以使用Switch来将所有的Route进行包裹即可

