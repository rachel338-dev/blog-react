import React from "react";
import Comments from "../Comments";

function Post({post}) {
  if (!post) return null
  return (
    <article className='Post'>
      <h3>{post.title}</h3>
      <p> {post.content}</p>
      <Comments comments={post.comments}/>
    </article>
  );
}

export default Post;


