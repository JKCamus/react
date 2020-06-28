## ant Modal&&Form表单验证

ant3.6版本，采用的是类组件。使用方式暂时如下：

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

   


