import React, { Component } from "react";

class Comments extends Component {
  render() {
    return (
     <div>
       <ul>
         {this.props.comments.map((comment) => (
         <li key={comment.id}>{comment.author.first_name}: {comment.content}</li>
         ))}
      </ul> 
     </div>
    )
  }
}
export default Comments;
