import React from 'react'
import CommentInput from './CommentInput.jsx'
import CommentList from './CommentList.jsx'
export default class CommentApp extends React.Component{
  render(){
    return(
      <div className="wrapper">
        <CommentInput></CommentInput>
        <CommentList></CommentList>
      </div>
    )
  }
}