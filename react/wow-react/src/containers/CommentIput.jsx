import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CommentInput from "../components/CommentInput.jsx";
import { addComment } from "../reducers/comments.js";
import { render } from "react-dom";

class CommentInputContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onSubmit: PropTypes.func,
  };
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }
  componentWillMount() {
    this._loadUsername();
  }
  _loadUsername() {
    const username = localStorage.getItem("username", username);
    if (username) {
      this.setState({ username });
    }
  }
  _saveUsername(username) {
    localStorage.setItem("username", username);
  }
  handleSubmitComment(comment) {
    if (!comment) return;
    if (!comment.username) return alert("请输入用户名");
    if (!comment.content) return alert("请输入评论内容");

    const { comments } = this.props;
    const newComment = [...comments, comment];
    localStorage.setItem("comments", JSON.stringify(newComment));
    if (this.props.onSubmit) {
      this.props.onSubmit(comment);
    }
  }
  render() {
    return (
      <CommentInput
        username={this.state.username}
        onUsernameInputBlur={this._saveUsername.bind(this)}
        onSubmit={this.handleSubmitComment.bind(this)}
      ></CommentInput>
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    comments:state.comments
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    onSubmit:(comment)=>{
      dispatch.(addComment(comment))
    }
  }
}
export default connect(
  mapDispatchToProps,
  mapStateToProps,
  
)(CommentInputContainer)
