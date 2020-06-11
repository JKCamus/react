## ant-design Table 使用体会

==针对3.x版本==

![image-20200611104331986](C:\Users\Camus\AppData\Roaming\Typora\typora-user-images\image-20200611104331986.png)

### 数据获取

### 数据渲染

### 交互保存

可编辑表格中，编辑后，进行保存。事件是class组件里的函数，通过子组件focus事件传递回来的参数。

关键点在于数据。

数据必须包含唯一的key，可以是字符串，用于确定当前的index。如果不携带key，会出现，index一直为0

数据保存出错。

```js
  handleSave = (row) => {
    const newData = [...this.state.dataSource]
    const index = newData.findIndex((item) => row.key === item.key)
    const item = newData[index]
    newData.splice(index, 1, {
      ...item,
      ...row
    })
    debugger
    this.setState({ dataSource: newData })
  }
```

### Radio onChange事件

由于columns放于constructor中，所以事件获取出了点问题。

表格渲染格式为

```js
this.columns=[
          {
        title: '数据类型',
        dataIndex: 'modelType',
        render(type, record, index) {
          const modelType = record.modelType
          return (
            // <Radio.Group value={type} disabled>
            <Radio.Group
              value={modelType}
              onChange={onChange.bind(this, index)}
            >
              <Radio value={'category'}>维度</Radio>
              <Radio value={'value'}>指标</Radio>
            </Radio.Group>
          )
        }
      },
]
```

事件置于constructor中。使用bind进行绑定。

`onChange( )`可以传递多个参数，包括事件e，当前的index，还有当前的对象`record`

变更的方式就是，获取数据源，复制一个，根据index改变对应的数据，再保存会数据源中

```js
    const onChange = (index, e) => {
      // console.log('e', e)
      // console.log('index', index)
      // console.log(this.state.dataSource)
      const dataSourceCopy = this.state.dataSource
      dataSourceCopy[index].modelType = e.target.value

      this.setState(
        {
          dataSource: dataSourceCopy
        },
        console.log(this.state)
      )
      // debugger
    }
```



