import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import GuestDashboard from "./GuestDashboard";
import Questions from "./Questions";
import Forums from "./Forums";

class DashboardLanding extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            {localStorage.getItem("username") === null ? (
              <GuestDashboard />
            ) : (
              <Dashboard />
            )}
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path="/forums">
            <Forums />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default DashboardLanding;
