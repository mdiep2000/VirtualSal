import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import GuestDashboard from "./GuestDashboard";
import Forums from "./Forums";
import SearchResults from "../Search/SearchResults";

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
            <Forums />
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
