import React from "react";
//引入类型检查
import PropTypes from "prop-types";
class CommentInput extends React.Component {
  // 检查在 constructor之外
  static propTypes = {
    // onSubmit为父组件放下的钩子函数，即子传父的回调
    onSubmit: PropTypes.func,
  };
  constructor() {
    super();
    this.state = {
      username: " ",
      content: " ",
    };
  }
  /* 组件加载时聚焦到评论区 */
  componentDidMount() {
    this.textarea.focus();
this._loadUsername()
  }
  componentDidUpdate() {
    // this.input.focus(()=>{
    //   console.log(12);
    // })
    // console.log(this.refs.input);
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
      this.props.onSubmit({ username, content });
    }
    this.setState({ content: "", username: "" }); //清空内容
  };

  // 私有方法，请使用_开头
  _saveUsername(username) {
    localStorage.setItem("username", username);
  }
  _loadUsername(){
    // 获取localStorage中的信息
    const username=localStorage.getItem('username')
    if(username){
      this.setState({username})
    }
  }
  handleUsernameBlur = (e) => {
    // 用户名失焦时存储username到localStorage
    this._saveUsername(e.target.value);
    console.log("====================================");
    console.log(e.target.value);
    console.log("====================================");
  };
  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              // ref={(input)=>this.input=input}
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
      </div>
    );
  }
}
export default CommentInput;
