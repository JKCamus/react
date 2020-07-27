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



