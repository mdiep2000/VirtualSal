import React, { Component } from "react";
import "./Dashboard.css";
import "./Dashboard.css";
import Schedule from "./Schedule.jsx";
import Info from "./Info.jsx";
import { Link } from "react-router-dom";
import Review from "./Review.jsx";
import { popularForums } from "./popularForums.jsx";
class Dashboard extends Component {
  state = {};

  handleInput = () => {
    const searchKey = document.getElementById("userDashboardSearch");
    if (searchKey !== null) {
      this.props.onSearch(searchKey.value);
    }
  };

  render() {
    return (
      <div class="dashboardContainer">
        <div className="welcomeContainer">
          <h1 className="welcomeText">
            WELCOME, {localStorage.getItem("fullName")}
          </h1>
        </div>
        <div className="userSearchBarContainer">
          <input
            className="userSearchBar"
            id="userDashboardSearch"
            type="text"
            placeholder="SEARCH FOR A QUESTION, A FORUM, OR A CLASS"
            onInput={this.handleInput}
          ></input>
          <Link to="/dashboard/search-results">
            <button className="userSearchButton">search</button>
          </Link>
        </div>
        <div className="scheduleTitleContainer">
          <label className="moduleTitle">My Classes</label>
        </div>
        <div className="scheduleContainer">
          <Schedule />
        </div>
        <div className="reviewTitleContainer">
          <label className="moduleTitle">My Reviews</label>
        </div>
        <div className="reviewContainer">
          <Link to="/dashboard/review">
            <button className="reviewText">Review Courses</button>
            <Review />
          </Link>
        </div>
        <div className="infoTitleContainer">
          <label className="moduleTitle">My Info</label>
        </div>
        <div className="infoContainer">
          <Info />
        </div>
        <div className="forumsTitleContainer">
          <label className="moduleTitle">Popular Forums</label>
        </div>
        <div className="forumsContainer">
          {popularForums.map((forum) => (
            <div className="popularForumLink">
              <Link
                to={"/dashboard/forum-id=" + forum.id}
                style={{ color: "white" }}
              >
                {forum.question}
              </Link>
              <br />
            </div>
          ))}
        </div>
        {/* <div className="questionsTitleContainer">
          <label className="moduleTitle">My Questions </label>
        </div>
        <div className="questionsContainer">
          <Questions />
        </div> */}
        {/* <div className="chatTitleContainer">
          <label className="moduleTitle">My Chat</label>
        </div>
        <div className="chatContainer">
          <Chat />
        </div> */}
      </div>
    );
  }
}

export default Dashboard;
