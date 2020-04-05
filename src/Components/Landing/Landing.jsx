import React, { Component } from "react";
import "./Landing.css";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div class="landingContainer">
        <button className="landingButton">SIGN IN</button>
        <br />
        <button className="landingButton">SIGN UP</button>
        <br />
        <button className="landingButton">GUEST</button>
      </div>
    );
  }
}

export default Landing;
