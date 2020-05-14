import React from "react";

class Comment extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="comment">
          <div className="comment-user">
            <span>{this.props.comment.username} </span>：
          </div>
          <p> {this.props.comment.content}</p>
        </div>
        Comment
      </div>
    );
  }
}
export default Comment;
