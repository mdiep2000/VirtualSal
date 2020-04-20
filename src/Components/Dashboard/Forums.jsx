import React, { Component } from "react";
import "./Forums.css";
import SearchResults from "../Search/SearchResults"

class Forums extends Component {
  state = {
    voteYes: false,
    voteNo: false,
    sthread: ""
  };

  setColor = (s) => {
    if (s === "yes") {
      if (!this.state.voteYes) {
        return {
          color: "limegreen"
        }
      }
    }
    else if (s === "no") {
      if (!this.state.voteNo) {
        return {
          color: "red"
        }
      }
    }
    return {
      color: "Gainsboro"
    }
  }

  voteApprove = (e) => {
    if (!this.state.voteYes) {
      //increment approve vote variable
      //decrement disapprove vote variable
    }
    this.setState(
     {voteYes: true, voteNo: false}
    );
    return
  }

  voteDisapprove = (e) => {
    if (!this.state.voteNo) {
      //increment disapprove vote variable
      //decrement approve vote variable
    }
    
    return
  }


  render() {
    console.log(this.props.thread[0].comment);
    return (
      <div>
        <h1 className="questionFormat">{this.props.question}</h1>
        <div className="form-group w-50">
          <label for="comment">Reply:</label>
          <textarea className="form-control" rows="3" id="comment"></textarea>
        </div>
        {this.props.thread.map((t)=>{
          return(
            <div className="commentFormat">
            <h5 className="answerFormat">{t.comment}</h5>
            <p><span className="numLikes">{t.upvotes}</span>  <span className="numDisLikes">{t.downvotes}</span></p>
            <p><button onClick={() => this.voteApprove()}><span style={this.setColor("yes")}>Approve</span></button>        <span style={this.setColor("no")}>Disapprove</span> </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Forums;
