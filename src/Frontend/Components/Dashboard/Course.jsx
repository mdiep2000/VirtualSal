import React, { Component } from "react";
import "./Dashboard.css";
class Course extends Component {
  render() {
    return (
      <div>
        <h1 className="scheduleHeader">Semester: {this.props.semester}</h1>
        <hr  style={{
            color: '#000000',
            backgroundColor: '#000000',
            height: .8,
            borderColor : '#ffffff'
        }}/>
        <div>
          <p className="scheduleText">{this.props.courseName}</p>
          <p className="scheduleText">Section: {this.props.sectionNumber}</p>
          <p className="scheduleText">{this.props.professor}</p>
        </div>
        <hr  style={{
            color: '#000000',
            backgroundColor: '#000000',
            height: .8,
            borderColor : '#ffffff'
        }}/>
      </div>
    );
  }
}

export default Course;
