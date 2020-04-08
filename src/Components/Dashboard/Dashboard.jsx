import React, { Component } from "react";
import "./Dashboard.css";
import "./Dashboard.css";
import Schedule from "./Schedule.jsx";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  // UserDependent() {
  //   const username = ;
  //   if (username) {
  //     return <h1 className="welcomeText">WELCOME, {username}</h1>;
  //   } else {
  //     return <h1 className="welcomeText">WELCOME, Guest</h1>;
  //   }
  // }
  render() {
    return (
      <div className="dashboardContainer">
        <div className="welcomeContainer">
          {localStorage.getItem("username") === "" ? (
            <h1 className="welcomeText">WELCOME, Guest</h1>
          ) : (
            <h1 className="welcomeText">
              WELCOME, {localStorage.getItem("username")}
            </h1>
          )}
        </div>
        <div className="scheduleContainer">
          <label className="moduleTitleLeft">My Classes</label>

          <br />
          <Schedule />
        </div>
        <div className="infoContainer">
          <label className="moduleTitleRight">My Info</label>

          <br />
          <Schedule />
        </div>
        <div className="forumsContainer">
          <label className="moduleTitleRight">My Forums</label>

          <br />
          <Schedule />
        </div>
        <div className="questionsContainer">
          <label className="moduleTitleLeft">My Questions </label>

          <br />
          <Schedule />
        </div>
        <div className="chatContainer">
          <label className="moduleTitleRight">My Chat</label>
          <br />
          <Schedule />
        </div>
      </div>
    );
  }
}

export default Dashboard;
