import React, { Component } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
class Landing extends Component {
  state = {};
  render() {
    return (
      <div class="landingContainer">
        <Link to="/signin">
          <button className="landingButton">SIGN IN</button>
        </Link>
        <br />
        <Link to="/signup">
          <button className="landingButton">SIGN UP</button>
        </Link>
        <br />
        <Link to="/dashboard">
          <button className="landingButton">GUEST</button>
        </Link>
      </div>
    );
  }
}

export default Landing;
