import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
  },
  {
    type: "forum",
    id: 3,
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
    //   var searchLinks = this.state.resultsList.map((resultID) => (
    //     <Link key={resultID} to={"dashboard/result=" + resultID.toString()}>
    //       {"link" + resultID.toString()}
    //     </Link>
    //    ));
    //    for(var i = 0; i<this.state.resultsList.length; i++){
    //       var component = null;
    //       if(result.type === "forum"){
    //         component = <Forum key={result.id} question={result.question} upvotes={result.upvotes} downvotes={result.downvotes} thread={results.thread} />
    //       } else if(result.type === "course"){
    //         component = <Course key={result.id} question={result.question} upvotes={result.upvotes} downvotes={result.downvotes} thread={results.thread} />
    //       } else if(result.type === "review"){
    //         component = <Review key={result.id} question={result.question} upvotes={result.upvotes} downvotes={result.downvotes} thread={results.thread} />
    //       }
    //       searchLinks += <Route path={"dashboard/result=" + resultID.toString()}>{component}</Route>
    //   };
    return (
      <div>
        <h1>Search Results</h1>
        {/* {searchResults} */}
        <h1>{this.props.searchKey}</h1>
        <Router>{}</Router>
      </div>
    );
  }
}

export default SearchResults;
