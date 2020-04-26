import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import "../../App.css";
import "./Landing.css";
import $ from "jquery";

class Course {
  //used to store form info
  constructor(semester, year, courseName, professor, sectionNumber) {
    this.semester = semester;
    this.year = year;
    this.courseName = courseName;
    this.professor = professor;
    this.sectionNumber = sectionNumber;
  }
}

class UploadSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: [],
    };
  }

  // componentDidMount() {
  //   this.setState({ courseList: [] });
  // }
  resetForm() {
    document.getElementById("semester").value = "";
    document.getElementById("year").value = "";
    document.getElementById("courseName").value = "";
    document.getElementById("professor").value = "";
    document.getElementById("sectionNumber").value = "";
  }

  handleNewCourse = () => {
    const semester = document.getElementById("semester").value;
    const year = document.getElementById("year").value;
    const courseName = document.getElementById("courseName").value;
    const professor = document.getElementById("professor").value;
    const sectionNumber = document.getElementById("sectionNumber").value;
    let newClass = new Course(
      semester,
      year,
      courseName,
      professor,
      sectionNumber
    );
    this.setState(
      { courseList: this.state.courseList.concat(newClass) },
      alert(newClass.courseName + " has been added to your courses!")
    );
    this.resetForm();
  };

  handleSubmission = () => {
    //for testing, delete later
    /*
    this.state.courseList.map((course) =>
      console.log(
        course.courseName +
          ": " +
          course.semester +
          ", " +
          course.year +
          ", " +
          course.professor +
          ", " +
          course.sectionNumber
      )
    );
    */
   this.state.courseList.map((t) => (
     $.ajax({
      url: "http://localhost:8080/VirtualSal/AddCourse",
       data: {
         courseName: t.courseName,
         sectionNumber: t.sectionNumber,
         professor: t.professor,
         year: t.year,
         semester: t.semester
       },
       success: function(data){
         console.log(data);
         return
       }
     })
   ));
  };

  render() {
    return (
      <div className="formContainer-Upload">
        <h1 className="formTitle">SCHEDULE UPLOAD</h1>
        <h2 className="formSubtitle">
          PLEASE FILL OUT THE INFO TO ADD A COURSE.
        </h2>

        <h3 className="formSubtitle">PRESS SUBMIT TO CONTINUE TO DASHBOARD.</h3>
        <br />
        <Form>
          <Row>
            <Form.Group as={Col} controlId="semester">
              <Form.Control type="text" placeholder="SEMESTER" />
            </Form.Group>
            <Form.Group as={Col} controlId="year">
              <Form.Control type="text" placeholder="YEAR" />
            </Form.Group>
          </Row>

          <Form.Group controlId="courseName">
            <Form.Control type="text" placeholder="COURSE NAME" required />
          </Form.Group>
          <Form.Group controlId="professor">
            <Form.Control type="text" placeholder="PROFESSOR" required />
          </Form.Group>
          <Form.Group controlId="sectionNumber">
            <Form.Control type="text" placeholder="SECTION NUMBER" required />
          </Form.Group>
          <Row>
            <Col>
              <button className="formButton" onClick={this.handleNewCourse}>
                ADD COURSE
              </button>
            </Col>
            <Col>
              <Link to="/dashboard" onClick={this.handleSubmission}>
                <button className="formButton">SUBMIT</button>
              </Link>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default UploadSchedule;
