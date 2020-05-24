import React from "react";
import CommentInput from "./components/CommentInput.jsx";
import CommentList from "./components/CommentList";

class CommentApp extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }
  componentWillMount() {
    this._loadComment();
  }
  appSubmit = (comment) => {
    if (!comment) return;
    if (!comment.username) return alert("请输入用户名");
    if (!comment.content) return alert("请输入评论内容");
    // console.log(e); //{username: " 12", content: "12"}点击submit后
    /*
        这里的代码直接往 state.comments 数组里面插入数据其实违反了 React.js 的 state 不可直接修改的原则 。
        但其实这个原则是为了 shouldComponentUpdate 的优化和变化的跟踪，
        而这种目的在使用 React-redux 的时候其实会自然而然达到，我们很少直接手动地优化，这时候这个原则就会显得有点鸡肋。
        所以这里为了降低大家的理解成本就不强制使用这个原则，有兴趣的朋友可以参考： Tutorial: Intro To React - React。 */
    const comments = this.state.comments;
    /// console.log(typeof / comments);

    comments.push(comment);
    this.setState({
      comments,
    });
    this._saveComment(comments);
  };
  handleDeleteComment = (index) => {
    // console.log(index);
    const comments=this.state.comments
    comments.splice(index,1)
    this.setState({comments})
    this._saveComment(comments)
  };
  /* 私有方法 */
  /* 添加评论持久化功能 */
  _saveComment(comments) {
    // localStorage.setItem("comments", JSON.stringify(comments));
    localStorage.setItem("comments", JSON.stringify(comments));
  }
  _loadComment() {
    let comments = localStorage.getItem("comments");
    if (comments) {
      comments = JSON.parse(comments);
      this.setState({ comments });
      // console.log(comments);
    }
  }
  render() {
    return (
      <div className="wrapper">
        HelloWorld react
        <CommentInput onSubmit={this.appSubmit}></CommentInput>
        <CommentList
          comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment}
        ></CommentList>
      </div>
    );
  }
}
export default CommentApp;
