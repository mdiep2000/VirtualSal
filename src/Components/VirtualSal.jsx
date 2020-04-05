import React, { Component } from "react";
import Landing from "./Landing/Landing.jsx";
import Navbar from "./Navbar.jsx";
class VirtualSal extends Component {
  state = {};
  render() {
    return (
      <div className="AppContainer">
        <Navbar variant="light" className="navbarBG">
          <Navbar.Brand>VirtualSal</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Landing />
      </div>
    );
  }
}

export default VirtualSal;
