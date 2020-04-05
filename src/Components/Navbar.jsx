import React, { Component } from "react";
import "./../App.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <Link to="/" style={{ color: "white" }}>
          <h1 className="slogan"></h1>VirtualSal
        </Link>
      </div>
    );
  }
}

export default Navbar;
