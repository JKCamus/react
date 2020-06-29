## ant Modal&&Form表单验证

form验证大致可以分为在本组件进行验证和在父组件进行验证。

在本组件进行验证较为简单，在父组件验证需要使用ref获取组件对应的信息

当父组件为类组件的时候，ant提供了 `wrappedComponentRef`使用ref

在函数组件中，需要自己构造。挂载对应的ref

ant3.6版本，采用的是类组件。使用方式暂时如下：

### 父组件为类组件

1. 引入Form和FormComponentProps

   ```js
   import { Form} from 'antd'
   import { FormComponentProps } from 'antd/lib/form/Form'
   ```
   
2. 创建Form.create

```js
export default Form.create<FormComponentProps>()(StepTwo)
```

3. 函数组件中,传入Fomr相应的props，并取出。

   ```js
   const StepTwo = (prevProps: FormComponentProps) => { 
     const { form } = prevProps
     const { getFieldDecorator } = form
   }
   ```

4. 在提交验证的地方使用

   ```js
       form.validateFields((err, values) => {
         if (err) {
           return
         }
         form.resetFields()
   	//这里放完成验证后的相应代码
       })
   ```

5. 在需要验证的地方键入

   ```js
       {
         getFieldDecorator('Main', {    //‘Main’为当前验证的表单名，用于区别控制对应表单
            initialValue: newSubModal ? undefined : backfill.tableName,
             //在表单中，defaultValue不可用，取而代之的是initialValue，可以为any
           rules: [
             {
               required: true,   //必选
               message: '请选择主表' //错误时提示的信息
             }
           ]
         })(
   	//这里放入对应的需要验证表单的组件
       )
       }
   ```

6. 在一个页面内出现两份表单，如不做区分，validateFields会控制所有表单。也就是如果其他的是必填的，并且没填上，都是不能关闭的，包括隐藏的，这个时候需要为表单添加上对应的表单名。如上的‘Main’。并在提交验证的时候添加对应的表单名，作为控制的范围。

   ```js
   const handleMainTableOk = () => {
       // const { form } = this.formRef.props;
       form.validateFields(['main', 'tagName'], (err, values) => {
         // console.log("dayin ");
         if (err) {
           return
         }
         form.resetFields()
         setHaveMainTable(true)
         setMainInfo({ [mainTable]: fields })
         const copyToCompare = [...ToCompare]
         copyToCompare[0] = { tableName: mainTable, fields: fields }
         setToCompare(copyToCompare)
         setTotalInfo((TotalInfo) => {
           TotalInfo.push({
             tableName: mainTable,
             columns: fields
           })
           return TotalInfo
         })
         setMainTableModalVisible(false)
       })
     }
   ```

   如上，其控制的为`‘main’`，`‘tagName’`，那么其他验证是否可行与其无关

   ### 父组件为函数组件
   
   form的验证阶段在父组件，且父组件为函数
   
   父子组件为函数组件，子组件为类||函数组件的情况下：
   
   **父组件中：**
   
   引入`useRef`，创建 `const childForm = useRef(null)`
   
   挂载
   
   `<StepOne sources={sources} ref={ref=>childForm.current=ref} />`
   
   使用，在验证的地方：
   
   ```js
     const next = () => {
       childForm.current.validateFields((err, values) => {
         if (err) {
           return
         }
         setCurrent(current + 1)
       })
     }
   ```
   
   子组件中
   
   在对应的Form挂载ref
   
   ```js
   <Form ref={props.ref}>
       <Form.Item>
       正常使用
       </Form.Item>
   </Form>
   ```
   
   
   
   


