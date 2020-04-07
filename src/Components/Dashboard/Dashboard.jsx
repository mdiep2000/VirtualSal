import React, { Component } from "react";
import "./Dashboard.css";
import "./Dashboard.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  UserDependent() {
    const username = localStorage.getItem("username");
    if (username) {
      return <h1 className="welcomeText">WELCOME, {username}</h1>;
    } else {
      return <h1 className="welcomeText">WELCOME, Guest</h1>;
    }
  }
  render() {
    return (
      <div className="dashboardContainer">
        <div className="welcomeContainer">{this.UserDependent()}</div>
        <label>
          My Classes{" "}
          <div className="welcomeContainer">
            <h1>Classes go here</h1>
          </div>
        </label>
      </div>
    );
  }
}

export default Dashboard;
