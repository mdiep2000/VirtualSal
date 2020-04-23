import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "../../App.css";
import { Link } from "react-router-dom";

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
    validated = true; //only for testing purposes
    if (!validated) {
      alert("Username or Email already taken. Please try again.");
      event.preventDefault();
      event.stopPropagation();
      this.resetForm();
    } else {
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
              <Form.Control type="text" placeholder="FIRST NAME" />
            </Form.Group>
            <Form.Group as={Col} controlId="lastname">
              <Form.Control type="text" placeholder="LAST NAME" />
            </Form.Group>
          </Row>

          <Form.Group controlId="email">
            <Form.Control type="text" placeholder="EMAIL" required />
            <Form.Text style={{ color: "white" }}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="username">
            <Form.Control type="text" placeholder="USERNAME" required />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control type="text" placeholder="PASSWORD" required />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Control type="text" placeholder="CONFIRM PASSWORD" required />
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
