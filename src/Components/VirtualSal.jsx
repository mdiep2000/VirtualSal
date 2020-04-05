import React, { Component } from "react";
import Landing from "./Landing/Landing.jsx";
import SignIn from "./Landing/SignIn.jsx";
import SignUp from "./Landing/SignUp.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Navbar from "./Navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class VirtualSal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
    };
  }

  handleSignIn = () => {
    alert("You are now signed in!");
    this.setState({ signedIn: true });
    window.location.assign("http://localhost:3000/dashboard");
  };

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
              <SignIn signIn={this.handleSignIn} />
            </Route>
            <Route path="/signup">
              <SignUp signIn={this.handleSignIn} />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default VirtualSal;
