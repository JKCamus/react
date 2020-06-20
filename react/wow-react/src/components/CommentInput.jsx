import React from "react";
//引入类型检查
import PropTypes from "prop-types";
import { Button, Modal, Form, Input, Radio, Select } from "antd";
import "antd/dist/antd.css";
const { Option } = Select;
class CommentInput extends React.Component {
  // 检查在 constructor之外
  static propTypes = {
    // onSubmit为父组件放下的钩子函数，即子传父的回调
    onSubmit: PropTypes.func,
    username: PropTypes.any,
    onUserNameInputBluer: PropTypes.func,
  };
  // 传入默认值
  static defaultProp = {
    username: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      username: props.username, //改为从props里面获取username
      content: " ",
    };
  }
  /* 组件加载时聚焦到评论区 */
  componentDidMount() {
    //! redux更改前
    // const username = localStorage.getItem("username");
    // // if(username==null||typeof username=="undefined"||username.trim()==""){
    // //   this.input.focus()
    // // }

    // /* 判断是username是否为空，为空时聚焦到用户名输入 */
    // if (
    //   username == null ||
    //   typeof username == "undefined" ||
    //   username.trim() == ""
    // ) {
    //   this.input.focus();
    // } else {
    //   this.textarea.focus();
    // }
    // this._loadUsername();
    //* 更改后
    this.textarea.focus();
  }
  componentDidUpdate() {
    // this.input.focus(()=>{
    //   console.log(12);
    // })
    // console.log(this.refs.input);
    // console.log(this.state);
    //* console.log(this.input); //拿到当前挂着ref的Dom元素
  }
  usernameInput(e) {
    this.setState({
      username: e.target.value,
    });
    // console.log("====================================");
    // console.log(e.target); //!拿到的是当前dom元素
    // console.log("====================================");
  }
  submit = (e) => {
    // console.log("====================================");
    // console.log(this);
    // console.log("====================================");
    //* 当传入onSubmit函数的时候，将需要传递的信息传递给父组件。
    // 相当于父组件会放下一个篮子，子组件将需要传递过去的参数放在篮子里，父组件就可以拉回去了
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      // console.log(this);
      /* 传递带时间戳的评论 */
      this.props.onSubmit({ username, content, createdTime: +new Date() });
    }
    // this.setState({ content: "", username: "" }); //清空内容
    // 只清空评论
    this.setState({ content: "" }); //清空内容
  };
  //! 抽出的时候私有方法需要抽出到smart组件中
  // 私有方法，请使用_开头
  // _saveUsername(username) {
  //   localStorage.setItem("username", username);
  // }
  // _loadUsername() {
  //   // 获取localStorage中的信息
  //   const username = localStorage.getItem("username");
  //   console.log(typeof username);

  //   if (username) {
  //     this.setState({ username });
  //   }
  // }
  handleUsernameBlur = (e) => {
    // 用户名失焦时存储username到localStorage
    // this._saveUsername(e.target.value);
    // console.log("====================================");
    // console.log(e.target.value);
    // console.log("====================================");

    /* 更改为props里的 */
    if (this.props.onUserNameInputBluer) {
      this.props.onUserNameInputBluer(e.target.value);
    }
  };
  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              ref={(input) => (this.input = input)}
              onBlur={this.handleUsernameBlur}
              onChange={this.usernameInput.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容</span>
          <div className="comment-field-input">
            {/*! 
            ?类似于 <input />、<select />、<textarea> 这些元素的 value 值被 React.js 所控制、渲染的组件，
            在 React.js 当中被称为受控组件（Controlled Component）。
            对于用户可输入的控件，一般都可以让它们成为受控组件，这是 React.js 所推崇的做法。
            //?之前未加上onChange，有警告，即需要加上oneChance使其成为受控组件，暂时这么理解
             */}
            <textarea
              value={this.state.content}
              ref={(textarea) => (this.textarea = textarea)}
              onChange={(e) => {
                this.setState({ content: e.target.value });
              }}
            ></textarea>
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.submit}>发布</button>
        </div>
        CommentInput
        <CollectionsPage></CollectionsPage>
      </div>
    );
  }
}

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="名称">
              {getFieldDecorator("city", {
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!",
                  },
                ],
              })(
                <Select
                  // defaultValue={visualType}
                  placeholder="请输入"
                  style={{ width: 200 }}
                  // onChange={selectChange.bind(this, index)}
                >
                  <Option key={0} value={"xm"}>
                    厦门
                  </Option>
                  <Option key={1} value={"cd"}>
                    成都
                  </Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="值类型">
              {/* {getFieldDecorator("description")(<Input type="textarea" />)} */}
              {getFieldDecorator("valueType", {
                rules: [
                  {
                    required: true,
                    message: "请选择值类型!",
                  },
                ],
              })(
                <Select
                  // defaultValue={visualType}
                  placeholder="请选择值类型"
                  style={{ width: 200 }}
                  // onChange={selectChange.bind(this, index)}
                >
                  <Option key={0} value={"number"}>
                    数字
                  </Option>
                  <Option key={1} value={"string"}>
                    字符
                  </Option>
                </Select>
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class CollectionsPage extends React.Component {
  state = {
    visible: false,
    variabls: [],
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const variable = {
        key: "kajxz",
        alias: "",
        type: "auth",
        name: values.city,
        valueType: values.valueType,
      };
      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState(
        { visible: false, variabls: [...this.state.variabls, variable] },
        console.log("state", this.state.variabls)
      );
    });
  };

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          New Collection
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={true}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default CommentInput;
