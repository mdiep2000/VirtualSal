import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  UserDependent() {
    if (this.props.signedIn === true) {
      return <h1>DashBoard for SignIn User</h1>;
    } else {
      return <h1>DashBoard for Guest</h1>;
    }
  }
  render() {
    return this.UserDependent();
  }
}

export default Dashboard;
