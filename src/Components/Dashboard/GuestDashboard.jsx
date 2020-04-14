import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
class GuestDashboard extends Component {
  handleInput = () => {
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
            onInput={this.handleInput}
          ></input>
          <Link to="/dashboard/search-results">
            <button className="searchButton">search</button>
          </Link>
        </div>
        <Link to="/dashboard/questions">
          <button className="questionButton">+ Ask Question</button>
        </Link>
      </div>
    );
  }
}

export default GuestDashboard;
