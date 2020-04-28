import React, { Component } from "react";
import Post from '../Post';
class PostList extends Component {
  render() {
    return (
      <div>
        <Post order="4" name="Arthur" content="wow" author="Anon"/>
        <Post order="5" name="Eskimo" content= "hola" author="Anon" />
        <Post order="6" name="Rachel" content="im back" author="Anon"/>
      </div>
    );
  }
}

export default PostList;
