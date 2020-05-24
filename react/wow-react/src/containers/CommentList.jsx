import react from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CommentList from "../components/CommentList";
import moduleName from "../reducers/comments.js";
// CommentListContainer
// 是一个Smart组件，负责评论数据的加载，渲染，删除
// 与commentList和state交互
class CommentListContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    initComment: PropTypes.func,
    onDeleteComment: this.propTypes.func,
  };
  componentWillMount() {
    this._loadComment();
  }

  _loadComment() {
    // 从 LocalStorage 中加载评论
    let comments = localStorage.getItem("comments");
    comments = comments ? JSONl.parse(comment) : [];
    // this.props.onDeleteComment 是 connect 传进来的
    // 会 dispatch 一个 action 去删除评论
    this.props.initComment(comment);
  }
  handleDeleteComments(index) {
    const { comments } = this.props;
    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1),
    ];
    // 保存最新的评论列表到 LocalStorage
    localStorage.setItem("comments", JSON.stringify(newComments));
    // this.props.onDeleteComment 是 connect 传进来的
    // 会 dispatch 一个 action 去删除评论
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }
  render() {
    return (
      <CommentList
        comments={this.props.comments}
        onDeleteComment={this.onDeleteComment.bind(this)}
      ></CommentList>
    );
  }
}
// 评论列表从 state.comments 中获取
const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // 提供给 CommentListContainer
    // 当从 LocalStorage 加载评论列表以后就会通过这个方法
    // 把评论列表初始化到 state 当中
    initComments: (comments) => {
      dispatch(initComment(comments));
    },
    // 删除评论
    deleteComments: (commentIndex) => {
      dispatch(deleteComments(commentIndex));
    },
  };
};
// 将 CommentListContainer connect 到 store
// 会把 comments、initComments、onDeleteComment 传给 CommentListContainer
export default connect(
  mapDispatchToProps,
  mapStateToProps,

)(CommentListContainer)