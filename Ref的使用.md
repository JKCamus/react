# Ref的使用

React.js 当中提供了 `ref` 属性来帮助我们获取已经挂载的元素的 DOM 节点，你可以给某个 JSX 元素加上 `ref`属性：

```jsx
class AutoFocusInput extends Component {
  componentDidMount () {
    this.input.focus()
  }

  render () {
    return (
      <input ref={(input) => this.input = input} />
    )
  }
}

ReactDOM.render(
  <AutoFocusInput />,
  document.getElementById('root')
)
```

可以看到我们给 `input` 元素加了一个 `ref` 属性，这个属性值是一个函数。当 `input` 元素在页面上挂载完成以后，React.js 就会调用这个函数，并且把这个挂载以后的 DOM 节点传给这个函数。在函数中我们把这个 DOM 元素设置为组件实例的一个属性，这样以后我们就可以通过 `this.input` 获取到这个 DOM 元素。

将当前Dom元素传进去，并将该元素赋值给组件上的`this.input`

可以看到我们给 `input` 元素加了一个 `ref` 属性，这个属性值是一个函数。当 `input` 元素在页面上挂载完成以后，`React.js` 就会调用这个函数，并且把这个挂载以后的 DOM 节点传给这个函数。在函数中我们把这个 DOM 元素设置为组件实例的一个属性，这样以后我们就可以通过 `this.input` 获取到这个 DOM 元素。

最新版本中创建Refs，使用`React.createRef();`

### 访问 Refs

当 ref 被传递给 `render` 中的元素时，对该节点的引用可以在 ref 的 `current` 属性中被访问。

ref 的值根据节点的类型而有所不同：

- 当 `ref` 属性用于 HTML 元素时，构造函数中使用 `React.createRef()` 创建的 `ref` 接收底层 DOM 元素作为其 `current` 属性。

- 当 `ref` 属性用于自定义 class 组件时，`ref` 对象接收组件的挂载实例作为其 `current` 属性。

- **你不能在函数组件上使用 `ref` 属性**，因为他们没有实例。

  <!--但是以下为在函数组件上使用的ref，得到了一些关于组件的信息，antd的组件-->

![image-20200516083519148](C:\Users\Camus\AppData\Roaming\Typora\typora-user-images\image-20200516083519148.png)

```javascript
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();  }

  componentDidMount() {
    this.textInput.current.focusTextInput();  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />    );
  }
}
```

##### 通过React.createRef() React 16.3版本后，使用此方法来创建ref。将其赋值给一个变量，通过ref挂载在dom节点或组件上，该ref的current属性,将能拿到dom节点或组件的实例

```js
class RefThree extends React.Component{
  constructor(props){
    super(props);
    this.myRef=React.createRef();     <=
  }
  componentDidMount(){
    console.log(this.myRef.current);
  }
  render(){
    return <input ref={this.myRef}/>
  }
}

```

##### React.forwardRefReact 16.3版本后提供的，可以用来创建子组件，以传递ref

```js
class RefFour extends React.Component{
  constructor(props){
    super(props);
    this.myFourRef=React.forwardRef();
  }
  componentDidMount(){
    console.log(this.myFourRef.current);
  }
  render(){
    return <Child ref={this.myFourRef}/>
  }
}

```

子组件通过React.forwardRef来创建，可以将ref传递到内部的节点或组件，进而实现跨层级的引用。forwardRef在高阶组件中可以获取到原始组件的实例.

