import React, { Component } from "react";
class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      semester: "",
      year: "",
      courseName: "",
      professor: "",
      sectionNumber: "",
    };
  }
  render() {
    return (
      <div>
        <h1>Semester: {this.state.semester}</h1>
        <br />
        <div>
          <h1>{this.state.courseName}</h1>
          <h1>Section: {this.state.sectionNumber}</h1>
          <h1>{this.state.professor}</h1>
        </div>
      </div>
    );
  }
}

export default Course;
