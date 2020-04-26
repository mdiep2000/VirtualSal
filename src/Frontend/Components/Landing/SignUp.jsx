import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "../../App.css";
import { Link } from "react-router-dom";
import $ from "jquery";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
    };
  }

  resetForm = () => {
    //reset form
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
  };

  handleSubmit = (event) => {
    let validated = false;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmPassword").value;
    //Check if Inputs are Filled out
    if (
      !(
        firstname &&
        lastname &&
        email &&
        username &&
        password &&
        confirmpassword
      )
    ) {
      alert("Please fill out the entire form");
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    //Check if password = confirmpassword
    if (password !== confirmpassword) {
      alert("Password and Confirm Password do no match.");
      event.preventDefault();
      event.stopPropagation();
      document.getElementById("password").value = "";
      document.getElementById("confirmPassword").value = "";
      return;
    }
    //VALIDATE AGAINST SQL DATABASE for Email/Username already taken
    $.ajax({
      url: "http://localhost:8080/VirtualSal/signupvalidation",
      async: false,
      data: {
        username: username,
        password: password,
        firstname: firstname,
        email: email,
        lastname: lastname,
      },
      success: function (data) {
        console.log(data);
        if (data.validUsername === "false" || data.validEmail === "false") {
          if (data.validUsername === "false" || data.validEmail === "false") {
            alert("Both the username and password have already been taken.");
          } else if (data.validUsername === "false") {
            alert("Username has been taken.");
          } else if (data.validEmail === "false") {
            alert("Email has been taken.");
          }
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        localStorage.setItem("username", username);
        localStorage.setItem("fullName", firstname + " " + lastname);
        localStorage.setItem("email", email);
      },
    });
    /*
    validated = true; //only for testing purposes
    if (!validated) {
      alert("Username or Email already taken. Please try again.");
      event.preventDefault();
      event.stopPropagation();
      this.resetForm();
    } 
    else {
      //ADD NEW USER TO DATABASE
      //code goes here........................
      this.setState({
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: username,
        password: password,
      });
      localStorage.setItem("username", username);
      alert("You are now signed up!");
    }
    */
    alert("You are now signed up");
  };

  render() {
    return (
      <div className="formContainer-SignUp">
        <h1 className="formTitle">WELCOME</h1>
        <h2 className="formSubtitle">PLEASE FILL OUT THE INFO TO SIGN UP</h2>
        <br />
        <Form>
          <Row>
            <Form.Group as={Col} controlId="firstname">
              <Form.Control
                type="text"
                placeholder="FIRST NAME"
                style={{ left: "0%" }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="lastname">
              <Form.Control
                type="text"
                placeholder="LAST NAME"
                style={{ left: "0%" }}
              />
            </Form.Group>
          </Row>

          <Form.Group controlId="email">
            <Form.Control
              type="text"
              placeholder="EMAIL"
              required
              style={{ left: "0%" }}
            />
            <Form.Text style={{ color: "white" }}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
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
              type="text"
              placeholder="PASSWORD"
              required
              style={{ left: "0%" }}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Control
              type="text"
              placeholder="CONFIRM PASSWORD"
              required
              style={{ left: "0%" }}
            />
          </Form.Group>
          <Link
            to="/uploadSchedule"
            className="landingButton"
            type="button"
            onClick={this.handleSubmit}
          >
            SIGN UP
          </Link>
        </Form>
      </div>
    );
  }
}

export default SignUp;
