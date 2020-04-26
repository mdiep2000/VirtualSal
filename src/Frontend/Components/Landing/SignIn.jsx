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
      url: "http://localhost:8080/VirtualSal/signInValidation",
      data: {
        username: username,
        password: password,
      },
      async: false,
      success: function (data) {
        console.log(data);
        console.log(data.validSignIn);
        if (data.validSignIn === "true") {
          //valid
          const fname = data.name;
          const lname = data.lastname;
          const email = data.email;
          const courses = data.courses;
          localStorage.setItem("username", username);
          localStorage.setItem("fullName", fname + " " + lname);
          localStorage.setItem("email", email);
          localStorage.setItem("courses", courses);
          alert("You are now signed in!");
        } else if (
          data.validSignIn === "false" &&
          data.validUsername === "true"
        ) {
          //invalid, yet correct username
          alert("Incorrect Password. Please try again.");
          event.preventDefault();
          event.stopPropagation();
          //reset form
          document.getElementById("username").value = "";
        } else {
          //invalid
          alert("Incorrect Username and Password. Please try again.");
          event.preventDefault();
          event.stopPropagation();
          //reset form
          document.getElementById("username").value = "";
          document.getElementById("password").value = "";
        }
      },
    });
  };

  render() {
    return (
      <div className="formContainer">
        <h1 className="formTitle">WELCOME</h1>
        <h2 className="formSubtitle">PLEASE SIGN IN TO CONTINUE</h2>
        <br />
        <Form>
          <Form.Group controlId="username">
            <Form.Control
              type="text"
              placeholder="USERNAME"
              required
              style={{ left: "0%" }}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              type="password"
              placeholder="PASSWORD"
              required
              style={{ left: "0%" }}
            />
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
