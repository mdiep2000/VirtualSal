import React, { Component } from "react";
import "./Dashboard.css";
class GuestDashboard extends Component {
  state = {};
  render() {
    return (
      <div className="guestDashboardContainer">
        <h1 className="guestHeader">VirtualSal</h1>
        <br />
        <div className="searchBarContainer">
          <input
            className="searchBar"
            type="text"
            placeholder="SEARCH FOR A QUESTION, A FORUM, OR A CLASS"
          ></input>
        </div>
        <button className="questionButton" to="/questions">
          + Ask Question
        </button>
      </div>
    );
  }
}

export default GuestDashboard;
