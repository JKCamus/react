import React from "react";
import CommentInput from "./CommentInput.jsx";
import CommentList from "./CommentList.jsx";

class CommentApp extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }
  appSubmit = (comment) => {
    // console.log(e); //{username: " 12", content: "12"}点击submit后
    this.state.comments.push(comment);
    this.setState({
      comments: this.state.comments,
    });
  };
  render() {
    return (
      <div className="wrapper">
        HelloWorld react
        <CommentInput onSubmit={this.appSubmit}></CommentInput>
        <CommentList comments={this.state.comments}></CommentList>
      </div>
    );
  }
}
export default CommentApp;
