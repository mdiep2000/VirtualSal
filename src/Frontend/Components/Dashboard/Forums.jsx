import React, { Component } from "react";
import "./Forums.css";
import SearchResults from "../Search/SearchResults";

class Forums extends Component {
  state = {
    sthread: [],
    reply: ""
  };

  componentDidMount = () => {
    console.log(this.props.thread);
    this.setState({ sthread: this.props.thread });
  };

  /*
  setColor = (s, key) => {
    this.state.sthread.map(st =>{
      if(st.key===key){
        console.log("line 19 comment thread started");
        console.log(st);
        if(s==="yes"){
          if(this.state.sthread.voteYes){
            console.log("bad");
            return  {
              color: "Gainsboro",
            };
          }
          console.log("good green is returned")
          return  {
            color: "green",
          };
        }
        if(s==="no"){
          if(this.state.sthread.voteYes){
            console.log("bad");
            return {
              color: "Gainsboro",
            };
          }
          console.log("good red is returned")
          return {
            color: "red",
          };
        }
      }
    }
    )
  };
  */

  voteApprove = (key) => {
    this.setState({sthread: this.state.sthread.map(st =>{
      if(st.key===key){
        if(!st.voteYes){
          st.voteYes=true
          st.upvotes++
        }
      }
      return st
    })});
  };

  voteDisapprove = (key) => {
    this.setState({sthread: this.state.sthread.map(st =>{
      if(st.key===key){
        if(!st.voteNo){
          st.voteNo=true
          st.downvotes++
        }
      }
      return st
    })});
  }

  handlesubmit = () => {
    if(this.state.reply==="" || this.state.reply===null){
      alert("One or more fields left blank");
      return;
    }

    var key = this.state.sthread[this.state.sthread.length -1].key;
    key=key+1;

    const newReply ={
      key: key,
      comment: this.state.reply,
      upvotes: 0,
      downvotes: 0,
      voteYes: false,
      voteNo: false
    }

    return;

  }

  onchange = e => {
    this.setState({
      reply: e.target.value
    });

  };

  render() {
    var threads = "";
    if (this.state.sthread) {
      threads = this.state.sthread.map((t) => (
        <div className="commentFormat">
          <h5 className="answerFormat">{t.comment}</h5>
          <p>
            <button className = "buttonFormat_yes" onClick={() => this.voteApprove(t.key)}>
            <span style={{color:"green"}}>Approve</span>
            </button>{"         "}
            <span className="numLikes">{t.upvotes}</span>{" "}
           <button className = "buttonFormat_no" onClick={() => this.voteDisapprove(t.key)}>
           <span style={{color: "red"}}>Disapprove</span>
           </button> {" "}
           <span className="numDisLikes">{t.downvotes}</span>
          </p>
        </div>
      ));
    } else {
      //i'd add something to fill this in case we get a forum without any comments ie null thread
      threads = <h2>No answers to this question from Trojans yet.</h2>
    }
    return (
      <div>
        <h1 className="questionFormat">{this.props.question}</h1>
        <form onSubmit={this.handlesubmit}>
        <div className="form-group w-50">
          <label for="comment"><font color="white">Reply:</font></label>
          <textarea className="form-control" rows="3" id="comment" name="reply" value={this.state.reply} onChange={this.onchange}></textarea>
        </div>
        <div className="submit">
            <input type="submit" value="Post Reply" />
        </div>
        </form>
        {threads}
      </div>
    );
  }
}

export default Forums;
