import React from "react";
import Comment from "./Comment.jsx";
import PropTypes from "prop-types";

class CommentList extends React.Component {
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func,
  };

  static defaultProps = {
    comments: [],
  };
  constructor() {
    super();
    this.myRef2 = (element) => (this.myRef2 = element); //*回调型Refs，写法二
  }
  componentDidUpdate() {
    // console.log(this.woc);
    // console.log(this.refs);
    // console.log(this.myRef1);//*回调型Refs，写法一

    // console.log(this.myRef2);
    console.log(this.props.comments);
  }
  handleDeleteComment=index=>{
    // if(this.props.onDeleteComment){
    //   this.props.onDeleteComment(index)
    //   console.log(index);
    // }
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
      console.log("listIndex",index);
      
    }
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
          <Comment
            ref={(element) => (this.myRef1 = element)}
            comment={comment}
            key={index}
            index={index}
            onDeleteComment={this.handleDeleteComment}
          ></Comment> //*直接拿元素的话推荐：回调型Refs，写法一
          // <Comment ref={this.myRef2} comment={comment} key={index}></Comment>//*回调型Refs，写法二
        ))}
      </div>
    );
  }
}
export default CommentList;
