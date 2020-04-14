import React, { Component, Fragment } from "react";
import "./Dashboard.css";
import "./Dashboard.css";
import Schedule from "./Schedule.jsx";
import Info from "./Info.jsx";
import Forums from "./Forums.jsx";
import Questions from "./Questions.jsx";
import Chat from "./Chat.jsx";
class Dashboard extends Component {
  state = {};

  render() {
    return (
      <div class="dashboardContainer">
        <div className="welcomeContainer">
          <h1 className="welcomeText">
            WELCOME, {localStorage.getItem("username")}
          </h1>
        </div>
        <div className="scheduleTitleContainer">
          <label className="moduleTitle">My Classes</label>
        </div>
        <div className="scheduleContainer">
          <Schedule />
        </div>
        <div className="infoTitleContainer">
          <label className="moduleTitle">My Info</label>
        </div>
        <div className="infoContainer">
          <Info />
        </div>
        <div className="forumsTitleContainer">
          <label className="moduleTitle">My Forums</label>
        </div>
        <div className="forumsContainer">
          <Forums />
        </div>
        <div className="questionsTitleContainer">
          <label className="moduleTitle">My Questions </label>
        </div>
        <div className="questionsContainer">
          <Questions />
        </div>
        <div className="chatTitleContainer">
          <label className="moduleTitle">My Chat</label>
        </div>
        <div className="chatContainer">
          <Chat />
        </div>
      </div>
    );
  }
}

export default Dashboard;
