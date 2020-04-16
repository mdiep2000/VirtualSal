import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Forums from "../Dashboard/Forums";
import Course from "../Dashboard/Course";
import Review from "../Dashboard/Review";
import "./Search.css";

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
  {
    type: "course",
    id: 4,
    data: {
      semester: "Spring",
      year: "2020",
      course: "CSCI201 - Principles of Software Development",
      professor: "Jeffery Miller",
      sectionNumber: "30112",
    },
  },
  {
    type: "course",
    id: 5,
    data: {
      semester: "Spring",
      year: "2020",
      course: "CSCI270 - Introduction to Algorithms and Theory of Computing",
      professor: "Shahrair Shamsian",
      sectionNumber: "30231",
    },
  },
];

class SearchResults extends Component {
  state = {
    resultsList: [
      {
        type: "",
        id: "",
        data: [],
      },
    ],
  };
  componentDidMount = () => {
    //called once page renders
    /*process the search key here (this.props.searchKey) and grab
    other needed information from backend*/
    this.setState({
      resultsList: exampleList, //for testing purpose
    });
  };

  linkTitle = (result) => {
    if (result.type === "forum") {
      return result.data.question;
    } else {
      return result.data.course;
    }
  };
  render() {
    const searchLinks = this.state.resultsList.map((result) => (
      <div>
        <hr />
        <h1 className="searchResultsLink">
          {result.type.toUpperCase() + ": "}
        </h1>
        <Link
          className="searchResultsLink"
          key={result.id}
          to={result.type + "-id=" + result.id.toString()}
        >
          {this.linkTitle(result)}
        </Link>
        <hr />
      </div>
    ));
    const searchPaths = this.state.resultsList.map((result) => {
      if (result.type === "forum") {
        return (
          <Route path={"/dashboard/forum-id=" + result.id.toString()}>
            <Forums
              key={result.id}
              question={result.data.question}
              upvotes={result.data.upvotes}
              downvotes={result.data.downvotes}
              thread={result.data.thread}
            />
          </Route>
        );
      } else if (result.type === "course") {
        return (
          <Route path={"/dashboard/course-id=" + result.id.toString()}>
            <Course
              key={result.id}
              semester={result.data.semester}
              year={result.data.year}
              courseName={result.data.course}
              professor={result.data.professor}
              sectionNumber={result.data.sectionNumber}
            />
          </Route>
        );
      } else if (result.type === "review") {
        return (
          <Route path={"/dashboard/review-id=" + result.id.toString()}>
            <Review
              key={result.id}
              course={result.data.course}
              professor={result.data.professor}
              workload={result.data.workload}
              clarity={result.data.clarity}
              comment={result.data.comment}
            />
          </Route>
        );
      } else {
        return;
      }
    });
    // console.log("searchLinks");
    // console.log(searchLinks);
    // console.log("searchPaths");
    // console.log(searchPaths);
    return (
      <Router>
        <Switch>
          <Route path="/dashboard/search-results">
            <div className="searchResultsContainer">
              <h1 className="searchResultsTitle">Search Results</h1>
              <h2 className="searchResultsSearchKey">
                Showing Results For: {this.props.searchKey}
              </h2>
              {searchLinks}
            </div>
          </Route>
          {searchPaths}
        </Switch>
      </Router>
    );
  }
}

export default SearchResults;
