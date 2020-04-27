import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import $ from "jquery";
import "./Question.css";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

class Question extends Component {
    state = {
        questionTitle: "",
        questionBody: "",
        courseName: ""
    }

    handlesubmit=(e)=>{
        const courseName =document.getElementById("course").value;
        console.log(courseName);
        const questionBody=document.getElementById("body").value;
        console.log(questionBody);
        const questionTitle=document.getElementById("title").value;
        console.log(questionTitle);
        if(courseName==="USC Courses" || !questionBody ||!questionTitle){
            alert("All fields must be filled");
            e.preventDefault();
            e.stopPropagation();
            return;
        }

        $.ajax({
            url: "http://localhost:8080/VirtualSal/AddQuestions",
            async: false,
            data: {
                questionBody: questionBody,
                questionTitle: questionTitle,
                courseName: courseName,
              },
            success: function (data) {
                alert("Your Question has been added to Virtual Sal");
            }
        })  


    }

    render(){
        return(
        <div className="col-md-6">
        
        <Form onSubmit={this.handlesubmit}>
            <Form.Row>
            <Form.Group controlId="title">
                <Form.Label className="questionLabel">QuestionTitle</Form.Label>
                <Form.Control className="answerField" placeholder="Enter title" />
            </Form.Group>
            </Form.Row>

            <Form.Row>
    <Form.Group controlId="course">
    <Form.Label className="questionLabel">What USC Computer Science Course relates most to the question?</Form.Label>
    <Form.Control className="answerField" as="select">
    <option value="USC Courses" defaultValue>Select Course</option>
      <option value="CSCI 103">CSCI 103</option>
      <option value="CSCI 201">CSCI 201</option>
      <option value="CSCI 104">CSCI 104</option>
      <option value="CSCI 170">CSCI 170</option>
      <option value="CSCI 109">CSCI 109</option>
    </Form.Control>
  </Form.Group>
  </Form.Row>
            
  <Form.Row>
            <Form.Group controlId="body">
                <Form.Label className ="questionLabel">Enter Question</Form.Label>
                <Form.Control className="answerField" as="textarea" cols="50" />
            </Form.Group>
            </Form.Row>


        <Button type="submit" >Ask Question</Button>
        </Form>
        </div>

        );
        
    }




}



export default Question;