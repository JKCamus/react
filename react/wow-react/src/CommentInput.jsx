import React from "react";

class CommentInput extends React.Component {
  constructor() {
    super();
    this.state = {
      username: " ",
      content: " ",
    };
  }
  usernameInput(e) {
    this.setState({
      username: e.target.value,
    });
    console.log("====================================");
    console.log(e.target); //!拿到的是当前dom元素
    console.log("====================================");
  }
  submit = (e) => {
    // console.log("====================================");
    // console.log(this);
    // console.log("====================================");
    //* 当传入onSubmit函数的时候，将需要传递的信息传递给父组件。
    // 相当于父组件会放下一个篮子，子组件将需要传递过去的参数放在篮子里，父组件就可以拉回去了
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      console.log(this);
      this.props.onSubmit({ username, content });
    }
    this.setState({ content: "" }); //清空内容
  };
  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
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
