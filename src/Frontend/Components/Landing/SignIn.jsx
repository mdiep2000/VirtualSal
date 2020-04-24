import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "../../App.css";
import { Link } from "react-router-dom";
import $ from "jquery";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    let validated = false;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    //Check if Inputs are Filled out
    if (!(username && password)) {
      alert("Please fill out the entire form");
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    //VALIDATE AGAINST SQL DATABASE
    $.ajax({
      url: "/signInValidation",
      data: {
        username: username,
        password: password,
      },
      success: function (data) {
        alert("success");
      },
    });
    validated = true; //only for testing purposes
    if (!validated) {
      alert("Incorrect Username or Password. Please try again.");
      event.preventDefault();
      event.stopPropagation();
      //reset form
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    } else {
      this.setState(
        {
          username: username,
          password: password,
        },
        () =>
          console.log(
            "username: " +
              this.state.username +
              ", password: " +
              this.state.password
          )
      );
      localStorage.setItem("username", username);
      alert("You are now signed in!");
    }
  };

  render() {
    return (
      <div className="formContainer">
        <h1 className="formTitle">WELCOME</h1>
        <h2 className="formSubtitle">PLEASE SIGN IN TO CONTINUE</h2>
        <br />
        <Form>
          <Form.Group controlId="username">
            <Form.Control type="text" placeholder="USERNAME" required />
            {/* <Form.Text style={{ color: "white" }}>
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control type="password" placeholder="PASSWORD" required />
          </Form.Group>
          <Link
            to="/dashboard"
            className="landingButton"
            type="button"
            onClick={this.handleSubmit}
          >
            SIGN IN
          </Link>
        </Form>
      </div>
    );
  }
}

export default SignIn;
