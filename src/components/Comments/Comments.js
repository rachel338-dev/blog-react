import React, { Component } from "react";

class Comments extends Component {
  render() {
    const name = this.props.name;
  const content = this.props.content; 
    return (
    <div>
      {name}: {content} </div>


    )
  }
}

export default Comments;
