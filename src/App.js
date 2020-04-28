import React from 'react';

import './App.css';
import Banner from './components/Banner';
import Post from './components/Post';
import PostList from './components/PostList';
import Comments from  './components/Comments';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="listOfPosts">
      <Post order="1" name="My first post" author="Rachel" content="Wooo!" />
      <Post order="2" name="My second post" author="Rachel" content="Cool" />
      <Post order="3" name="My third post" author="Rachel" content="ReactJS is lit!" />
      <Comments name="rachel" content="wow!" />
      <PostList name="post" author="celina" content="hi" />
      </div>

      <Footer />
      </div>

  );
}

export default App;
