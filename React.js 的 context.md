# **React.js 的 context**



<center>    <img src="http://huzidaha.github.io/static/assets/img/posts/3BC6BDFC-5772-4045-943B-15FBEC28DAC0.png" width="400">    <center>react状态</center> </center>

使用方式：

1. 在最顶端的父母组件对`childContextTypes`验证组件props参数的类型.  

   `static childContextTypes = { themeColor: PropTypes.string }`

   存储将状态保存早context` getChildContext () {    return { themeColor: this.state.themeColor }  }`

2. 子组件也需要对context进行验证

   `  static contextTypes = {    themeColor: PropTypes.string  }`

   使用

   ```javascript
   render () {
       return (
         <h1 style={{ color: this.context.themeColor }}>React.js </h1>
       )
     }
   ```

   

