import React, { Component } from "react";
import Course from "./Course.jsx";
import $ from "jquery";
class Schedule extends Component {
  state = {
    courseList: [],
  };
  componentDidMount(){
    $.ajax({
      url: "http://localhost:8080/VirtualSal/MyScheduleServlet",
      success: function(data){
        this.setState({
          courseList: data
        })
      }
    });
  }
  render() {
    /*
    const sampleSchedule = [
      {
        semester: "Spring",
        year: "2020",
        courseName: "CSCI201 - Principles of Software Development",
        professor: "Jeffery Miller",
        sectionNumber: "30112",
      },
      {
        semester: "Spring",
        year: "2020",
        courseName:
          "CSCI270 - Introduction to Algorithms and Theory of Computing",
        professor: "Shahrair Shamsian",
        sectionNumber: "30231",
      },
    ];
    */
    // const courses = this.state.courseList.map((course) => (
    const courses = this.state.courseList.map((
      course //replace this line with above line
    ) => (
      <div>
        <Course
          key={course.sectionNumber}
          semester={course.semester}
          courseName={course.courseName}
          professor={course.professor}
          sectionNumber={course.sectionNumber}
        />
        <br />
      </div>
    ));
    return <div>{courses}</div>;
  }
}

export default Schedule;
