import React, { Component } from "react";
import "./../App.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  dependentHome() {
    if (localStorage.getItem("username")) {
      return "/dashboard";
    } else {
      return "/";
    }
  }
  render() {
    return (
      <div className="header">
        <Link to={this.dependentHome()} style={{ color: "white" }}>
          VirtualSal
        </Link>
      </div>
    );
  }
}

export default Navbar;
