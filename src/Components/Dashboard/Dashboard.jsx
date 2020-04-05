import React, { Component } from "react";
import "./Dashboard.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  }
  UserDependent() {
    const username = localStorage.getItem("username");
    if (username) {
      return <h1 className="welcomeText">Welcome, {username}</h1>;
    } else {
      return <h1 className="welcomeText">Welcome, Guest</h1>;
    }
  }
  render() {
    return this.UserDependent();
  }
}

export default Dashboard;
