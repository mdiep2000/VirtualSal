import React, { Component } from "react";
import Landing from "./Landing/Landing.jsx";
import SignIn from "./Landing/SignIn.jsx";
import SignUp from "./Landing/SignUp.jsx";
import UploadSchedule from "./Landing/UploadSchedule.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Navbar from "./Navbar.jsx";
import Info from "./Dashboard/Info.jsx"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class VirtualSal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleSignIn = (username) => {
  //   //window.location.assign("http://localhost:3000/dashboard");
  // };

  render() {
    return (
      <Router>
        <div className="AppContainer">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/uploadSchedule">
              <UploadSchedule />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path ="/info">
              <Info />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default VirtualSal;
