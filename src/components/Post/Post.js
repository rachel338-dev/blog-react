import React, { Component } from "react";

class Post extends Component {
  render() {
    const order = this.props.order;
    const name = this.props.name;
    const author = this.props.author;
    const content = this.props.content;
    return (
    <div>
      <h1> {order}: {name} by {author}</h1>
      {content}
    </div>
    )
  }
}

export default Post;
