import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Forums from "./Forums";
import Course from "./Course";
import Review from "./Review";
/*Ahmed, I'm gonna pass the search key in as a prop, so once this page renders we can query backend which will return list of results.
You can display these however you want, but I assume theyll have name and link to page*/

var exampleList = [
  {
    type: "forum",
    id: 1,
    data: {
      question: "what's up?",
      upvotes: 5,
      downvotes: 4,
      thread: [
        {
          comment: "nothing much",
          upvotes: 3,
          downvotes: 2,
        },
      ],
    },
  },
  {
    type: "review",
    id: 2,
    data: {
      course: "CSCI-104 Data Structures and Object Oriented Programming",
      professor: "cote",
      workload: 3,
      clarity: 4,
      comment: "good prof",
    },
  },
  {
    type: "forum",
    id: 3,
    data: {
      question: "other exanoke?",
      upvotes: 5,
      downvotes: 4,
      thread: [
        {
          comment: "example ",
          upvotes: 1,
          downvotes: 3,
        },
        {
          comment: "example ",
          upvotes: 3,
          downvotes: 1,
        },
      ],
    },
  },
];
class SearchResults extends Component {
  state = {
    resultsList: [
      {
        type: "",
        id: "",
      },
    ],
  };
  componentDidMount = () => {
    //called once page renders
    /*process the search key here (this.props.searchKey) and grab
    other needed information from backend*/
    this.setState({
      resultsList: [
        {
          type: "forum",
          id: "",
        },
      ],
    }); //for testing purpose
  };

  render() {
    var searchLinks = this.state.resultsList.map((result) => (
      <Link
        key={result.id}
        to={"dashboard/" + result.type + "=" + result.id.toString()}
      >
        {result.type + "-id=" + result.id.toString()}
      </Link>
    ));
    var searchPaths = null;
    for (var i = 0; i < this.state.resultsList.length; i++) {
      var result = this.state.resultsList[i];
      var path = null;
      if (result.type === "forum") {
        path = (
          <Route path={"dashboard/forum=" + result.id.toString()}>
            <Forums
              key={result.id}
              question={result.question}
              upvotes={result.upvotes}
              downvotes={result.downvotes}
              thread={result.thread}
            />
          </Route>
        );
      } else if (result.type === "course") {
        path = (
          <Route path={"dashboard/course=" + result.id.toString()}>
            <Course
              key={result.id}
              question={result.question}
              upvotes={result.upvotes}
              downvotes={result.downvotes}
              thread={result.thread}
            />
          </Route>
        );
      } else if (result.type === "review") {
        path = (
          <Route path={"dashboard/review=" + result.id.toString()}>
            <Review
              key={result.id}
              question={result.question}
              upvotes={result.upvotes}
              downvotes={result.downvotes}
              thread={result.thread}
            />
          </Route>
        );
      }
      searchPaths += path;
    }
    return (
      <div>
        <h1>Search Results</h1>
        {/* {searchResults} */}
        <h1>{this.props.searchKey}</h1>
        <Router>
          {searchLinks}
          <Switch>{searchPaths}</Switch>
        </Router>
      </div>
    );
  }
}

export default SearchResults;
