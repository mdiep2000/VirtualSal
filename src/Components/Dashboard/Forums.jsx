import React, { Component } from "react";
import "./Forums.css";
import SearchResults from "../Search/SearchResults.jsx"

class Forums extends Component {
  state = {
    voteYes: false,
    voteNo: false,
    sthread: this.props.thread
  };


  setColor = (s) => {
    if (s === "yes") {
      if (!this.state.voteYes) {
        return "green"
      }
    }
    else if (s === "no") {
      if (!this.state.voteNo) {
        return "red"
      }
    }
    return "Gainsboro"
  }

  voteApprove = (e) => {
    if (!this.state.voteYes) {
      //increment approve vote variable
      //decrement disapprove vote variable
    }
    this.setState({
      voteYes: true,
      voteNo: false
    })
    this.setColor("yes")
    this.setColor("no")
    return
  }

  voteDisapprove = (e) => {
    if (!this.state.voteNo) {
      //increment disapprove vote variable
      //decrement approve vote variable
    }
    this.setState({
      voteNo: true,
      voteYes: false
    })
    this.setColor("yes")
    this.setColor("no")
    return
  }


  render() {
    /*
    const comm = this.state.sthread.map((t)=>{
      return(
        <div>
              <h4>{t.comment}</h4>
              <p className="voteText"><button onClick={this.voteApprove}><span color={this.setColor("yes")}>Approve</span></button>  <button onClick={this.voteDisapprove}><span color={this.setColor("disapprove")}>Disapprove</span></button></p>
              <p className="voteText"><span color="green">{t.upvotes} </span>  <span color="red">{t.downvotes}</span></p>
            </div>
      );
    });
    */
    return (
      <div>
        <h1 className="questionFormat">{this.props.question}</h1>
        <div className="form-group w-50">
          <label for="comment">Reply:</label>
          <textarea class="form-control" rows="3" id="comment"></textarea>
        </div>
      </div>
    );
  }
}

export default Forums;
