import React, { Component } from "react";
import "./Info.css"

class Info extends Component {
  state = {
    course: "",
    professor: "",
    workload: 0,
    clarity: 0,
    comment: ""

  };
  change = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }
  handleSubmit = e => {
    console.log(this.state);
    if(!(this.state.course && this.state.professor && this.state.workload && this.state.clarity && this.state.comment)){
      alert("One or more fields left blank");
      e.preventDefault();
      e.stopPropogation();
    }
    //log into SQL database
    return;
  }
  render() {
    return (
    <div>
      <h1 class = "header">Create a Review</h1>
      <div className="submit">
      <input type="submit" value="Submit" />
      </div>
      <br />
      <form onSubmit ={this.handleSubmit}>
      <div className = "course">
      <select name="course" value={this.state.course} onChange = {e => this.change(e)}>
        <option value="none" selected disabled hidden>Course</option>
        <option value="CSCI 103">CSCI 103</option>
        <option value="CSCI 109">CSCI 109</option>
        <option value="CSCI 170">CSCI 170</option>
        <option value="CSCI 201">CSCI 201</option>
        <option value="CSCI 270">CSCI 270</option>
        <option value="CSCI 310">CSCI 310</option>
      </select>
      </div>
      <br />
      <div className="professor">
      <input name="professor" placeholder="professor" value={this.state.professor} onChange = {e=>this.change(e)}/>
      </div>

    <div className="workload">
      <select name="workload" value={this.state.workload}>
      <option value="none" selected disabled hidden>Workload</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <p className = "clarification">1: Light, 5: Extreme</p>
    </div>

    <div className="clarity">
      <select name="clarity" value={this.state.clarity} onChange = {e=>this.change(e)}>
      <option value="none" selected disabled hidden>Clarity</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <p className = "clarification">1: Muddy, 5: Clear</p>
    </div>

      <div className="form-group w-50">
      <textarea type = "text" name="comment" value ={this.state.comment} placeholder="comment" class = "form-control" onChange={e=>this.change(e)} />
      </div>
      <br />

      </form>

    </div>
    )
  }
}

export default Info;
