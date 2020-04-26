import React, { Component } from "react";
import Course from "./Course.jsx";
import $ from "jquery";
class Schedule extends Component {
  constructor(props){
    super(props);
    this.state={
      courseList: {
        details : [],
        valid:"",
      },
    }
    
  }
  componentDidMount(){
    $.ajax({
      url: "http://localhost:8080/VirtualSal/MyScheduleServlet",
      dataType: 'json',
      async: false,
      success: function(data){
        console.log(data);
        this.setState({
          courseList: data
        });
      }.bind(this)
    });
    console.log(this.state.courseList);
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
    const courses = this.state.courseList.details.map((
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
