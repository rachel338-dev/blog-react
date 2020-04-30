import React, { Component, useState, userEffect, useEffect} from "react";

function About(){
  const initial = {
    content: "This is my about page. This blog is about entrepreneurship and people's experiences."
  }
  const [content, setContent] = useState(initial);


return (
  <>
  <div>ABOUT</div>
<div><p>This is my about page</p></div>
</>
)
}
export default About;

