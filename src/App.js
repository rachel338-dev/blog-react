import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Post from './components/Post';
import PostList from './components/PostList';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Route exact path="/new_post">New Post</Route>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <PostList />
          </Route>
        </Switch>
      </div>
    </Router>

      <div className="listOfPosts">
      <PostList />
     

      </div>
      <Footer />
      </div>
  );
}

export default App;


