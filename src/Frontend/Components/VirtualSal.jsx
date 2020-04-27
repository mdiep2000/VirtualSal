import React, { Component } from "react";
import Landing from "./Landing/Landing.jsx";
import SignIn from "./Landing/SignIn.jsx";
import SignUp from "./Landing/SignUp.jsx";
import UploadSchedule from "./Landing/UploadSchedule.jsx";
import DashboardLanding from "./Dashboard/DashboardLanding.jsx";
import Navbar from "./Navbar.jsx";
import Info from "./Dashboard/Info.jsx";
import "./../App.css";
import Question from "./Dashboard/Question.jsx"
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
      <Router basename={process.env.REACT_APP_ROUTER_BASE || ""}>
        <div className="AppContainer">
          <Navbar />
          <div className="AppContentContainer">
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
                <DashboardLanding />
              </Route>
              <Route path="/info">
                <Info />
              </Route>
              <Route path="/dashboard/questions">
                <Question />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default VirtualSal;
