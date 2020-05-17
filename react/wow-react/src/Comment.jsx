import React from "react";
import PropTypes from "prop-types";

class Comment extends React.Component {
  static propTypes = {
    /* 检查输入格式，毕传 */
    comment: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.state = { timeString: "" };
  }
  componentWillMount() {
    this._updateTimeString();
    this._timer = setInterval(

      this._updateTimeString.bind(this), 5000
    );
  }

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
  render() {
    return (
      <div>
        <div className="comment">
          <div className="comment-user">
            <span>{this.props.comment.username} </span>：
          </div>
          <p> {this.props.comment.content}</p>
          <span className="comment-createdtime">{this.state.timeString}</span>
        </div>
        Comment
      </div>
    );
  }
}
export default Comment;
