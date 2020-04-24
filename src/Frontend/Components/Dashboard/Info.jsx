import React, { Component } from "react";

class Info extends Component {
  state = {};
  render() {
    return (
    <div>
       <span style = {{color: "white"}}>Hello, {localStorage.getItem("username")}</span>
    </div>
      
    );
  }
}

export default Info;
