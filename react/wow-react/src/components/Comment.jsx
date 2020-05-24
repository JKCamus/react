import React from "react";
import PropTypes from "prop-types";

class Comment extends React.Component {
  static propTypes = {
    /* 检查输入格式，毕传 */
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number,
  };

  constructor() {
    super();
    this.state = { timeString: "" };
  }
  componentWillMount() {
    this._updateTimeString();
    // 每5秒更新一次时间戳
    this._timer = setInterval(this._updateTimeString.bind(this), 20000);
  }
  componentWillUnmount() {
    clearInterval(this._timer);
  }
  handleDeleteComment = () => {
    console.log("点击删除");
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index);
      // console.log(this.props.index);
    }
  };
  /* 添加时间戳，两次评论的间隔时间 */
  _updateTimeString() {
    const comment = this.props.comment;
    const duration = (+Date.now() - comment.createdTime) / 1000;
    this.setState({
      timeString:
        duration > 60
          ? `${Math.round(duration / 60)}分钟前`
          : `${Math.round(Math.max(duration, 1))}秒前`,
    });
  }
  _getProcessedContent(content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, "<code>$1</code>");
  }
  render() {
    const comment = this.props.comment;
    return (
      <div>
        <div className="comment">
          <div className="comment-user">
            <span className="comment-username">{comment.username} </span>：
          </div>
          {/* <p> {comment.content}</p> */}
          <p
            dangerouslySetInnerHTML={{
              __html: this._getProcessedContent(comment.content),
            }}
          ></p>

          <span className="comment-createdtime">{this.state.timeString}</span>

        <span className="comment-delete" onClick={this.handleDeleteComment}>
          删除
        </span>
        </div>
        
        {/* Comment */}
      </div>
    );
  }
}
export default Comment;
