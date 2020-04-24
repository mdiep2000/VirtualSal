import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import GuestDashboard from "./GuestDashboard";
import Forums from "./Forums";
import SearchResults from "../Search/SearchResults";

var sampleForum = {
  type: "forum",
  id: 1,
  data: {
    question: "what's up?",
    upvotes: 5,
    downvotes: 4,
    thread: [
      {
        comment: "nothing much",
        upvotes: 3,
        downvotes: 2,
      },

      {
        comment: "test",
        upvotes: 0,
        downvotes: 3,
      },
    ],
  },
};

class DashboardLanding extends Component {
  state = {
    searchKey: "",
  };

  handleSearch = (searchKey) => {
    this.setState({ searchKey: searchKey });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            {localStorage.getItem("username") === null ? (
              <GuestDashboard onSearch={this.handleSearch} />
            ) : (
              <Dashboard onSearch={this.handleSearch} />
            )}
          </Route>
          <Route path="/dashboard/forums">
            <Forums
              key={1}
              question={sampleForum.question}
              upvotes={sampleForum.upvotes}
              downvotes={sampleForum.downvotes}
              thread={sampleForum.thread}
            />
          </Route>
          <Route path="/dashboard/search-results">
            <SearchResults searchKey={this.state.searchKey} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default DashboardLanding;
