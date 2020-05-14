import React from "react";
import CommentInput from "./CommentInput.jsx";
import CommentList from "./CommentList.jsx";

class CommentApp extends React.Component {
  constructor() {
    super();
  }
  appSubmit=(e)=>{
    console.log(e);//{username: " 12", content: "12"}点击submit后
    
  }
  render() {
    return (
      <div className='wrapper'>
        HelloWorld react
        <CommentInput onSubmit={this.appSubmit}></CommentInput>
        <CommentList></CommentList>
      </div>
    );
  }
}
export default CommentApp;
