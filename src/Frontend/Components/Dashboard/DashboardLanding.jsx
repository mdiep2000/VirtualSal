import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import GuestDashboard from "./GuestDashboard";
import Forums from "./Forums";
import SearchResults from "../Search/SearchResults";
import { popularForums } from "./popularForums.jsx";
import Question from "./Question.jsx";

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
          {/* <Route path="/dashboard/forums">
            <Forums
              key={1}
              question={sampleForum.question}
              upvotes={sampleForum.upvotes}
              downvotes={sampleForum.downvotes}
              thread={sampleForum.thread}
            />
          </Route> */}
          <Route path="/dashboard/search-results">
            <SearchResults searchKey={this.state.searchKey} />
          </Route>
          {popularForums.map((forum) => (
            <Route path={"/dashboard/forum-id=" + forum.id}>
              <Forums
                key={forum.id}
                question={forum.question}
                upvotes={forum.upvotes}
                downvotes={forum.downvotes}
                thread={forum.thread}
              />
            </Route>

          ))}
          <Route path="/dashboard/questions">
            <Question />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default DashboardLanding;
