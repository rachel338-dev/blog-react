import React, { Component } from "react";

class Banner extends Component {
  render() {
    return  <header className="banner">
    <div className="banner-name">
        <h1>EVERYDAY HUSTLE</h1>

        <nav className="banner-menu">
        <a href="#">About</a>
        <a href="#">New Post</a>

    </nav>
    </div> 
    </header>
  }
}

export default Banner;