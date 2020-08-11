## 父子组件双向绑定

> Vue2中组件props的数据流动改变只能单向流动，即只能由组件外通过DOM属性attribute传递props给组件内，组件只能被动接收组件外传递过来的数据，并且在组件内，不能修改由外层传来的props数据。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。

为了结合双向绑定抽离组件，达到父组件只要向子组件提供需要双向绑定的数据，子组件就能通过双向绑定改变更新父组件的值。这样就达到了类似子组件直接双向绑定到了父组件的值的效果。

**父组件，提供一个绑定的值，nikeName，通过vue，2.3+之后的sync属性传递给子组件**    

```js
               
<TitleCardItem ref="inputRef" :inputName.sync="nikeName">   
                        <span slot="inputName">用户昵称:</span>
                    </TitleCardItem>
```

子组件，双向绑定到datasourceType上

![image-20200811112539496](D:\onedrive\OneDrive - hnu.edu.cn\web\react_test\react\image-20200811112539496.png)

