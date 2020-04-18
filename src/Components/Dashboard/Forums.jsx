import React, { Component } from "react";
import "./Forums.css";

class Forums extends Component {
  state = {
    voteYes: false,
    voteNo: false
  };
  

  setColor = (s) =>{
    if(s==="yes"){
      if(!this.state.voteYes){
        return "green"
      }
    }
    if(s==="no"){
      if(!this.state.voteNo){
        return "red"
      }
    }
    return "Gainsboro"
  }

  voteApprove =(e) =>{
    if(!this.state.voteYes){
      //increment approve vote variable
      //decrement disapprove vote variable
    }
    this.setState({
      voteYes: true,
      voteNo: false
    })
    return
  }

  voteDisapprove = (e) =>{
    if(!this.state.voteNo){
      //increment disapprove vote variable
      //decrement approve vote variable
    }
    this.setState({
      voteNo: true,
      voteYes: false
    })
    return
  }

  render() {
    return(
      <div>
      <h1 className="questionFormat">{this.props.question}</h1>
      <div className="form-group w-50">
      <label for="comment">Reply:</label>
      <textarea class="form-control" rows="3" id="comment"></textarea>
      </div>
      {this.props.thread.map((t) => (
        <div>
        <h4>{t.comment}</h4>
        <p className="voteText"><button onClick={this.voteApprove} onMouseOver={this.approveHover}><span color={this.setColor("yes")}>Approve</span></button>  <button onClick={this.voteDisapprove()} onMouseOver={this.disapproveHover()}><span color={this.setColor("no")}>Disapprove</span></button></p>
        <p className="voteText"><span color="green">{t.upvotes} </span>  <span color="red">{t.downvotes}</span></p>

        </div>
      ))}
      </div>
    )
  }
}

export default Forums;
