import React from "react";
import Comment from "./Comment.jsx";

class CommentList extends React.Component {
  constructor() {
    super();
  }

  render() {
    const comments = [
      { username: "Jerry", content: "Hello" },
      { username: "Tomy", content: "World" },
      { username: "Lucy", content: "Good" },
    ];
    return (
      <div>
        {/* {comments.map((comment, index) => {
          return (
            <div key={index}>
              {comment.username}：{comment.content}

            </div>
          );
        })} */}
        {this.props.comments.map((comment, index) => (
          <Comment comment={comment} key={index}></Comment>
        ))}
      </div>
    );
  }
}
export default CommentList;
