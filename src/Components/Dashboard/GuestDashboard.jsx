import React, { Component } from "react";
import "./Dashboard.css";
class GuestDashboard extends Component {
  state = {};

  handleSubmit = () => {
    const searchKey = document.getElementById("guestDashboardSearch");
    if (searchKey !== null) {
      this.props.onSearch(searchKey.value);
    }
  };
  render() {
    return (
      <div className="guestDashboardContainer">
        <h1 className="guestHeader">VirtualSal</h1>
        <br />
        <div className="searchBarContainer">
          <input
            className="searchBar"
            id="guestDashboardSearch"
            type="text"
            placeholder="SEARCH FOR A QUESTION, A FORUM, OR A CLASS"
          ></input>
          <button
            className="searchButton"
            onClick={this.handleSubmit}
            to="/search"
          >
            search
          </button>
        </div>
        <button className="questionButton" to="/questions">
          + Ask Question
        </button>
      </div>
    );
  }
}

export default GuestDashboard;
