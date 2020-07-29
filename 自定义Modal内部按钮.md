### 自定义Modal内部按钮



![image-20200729100933982](C:\Users\Camus\AppData\Roaming\Typora\typora-user-images\image-20200729100933982.png)

```js
  const footerBottom = [
    <div style={{ display: "flex", justifyContent: "center" }}>  //按钮居中
      <Button
        key="cancel"
        className="ant-btn-custom-circle"
        onClick={handleMainTableCancel}   //自定取消方法
      >
        取消
      </Button>
      ,
      <Button
        key="confirm"
        className="ant-btn-custom-circle"
        type="primary"
        onClick={handleMainTableOk}  //自定义确认方法  在左侧
      >
        确定
      </Button>
    </div>,
  ];
```

