import React, { Component } from "react";

/*Ahmed, I'm gonna pass the search key in as a prop, so once this page renders we can query backend which will return list of results.
You can display these however you want, but I assume theyll have name and link to page*/

class SearchResults extends Component {
  componentDidMount = () => {
    //called once page renders
    /*process the search key here (this.props.searchKey) and grab
    other needed information from backend*/
  };
  render() {
    return (
      <div>
        <h1>Search Results</h1>
        <h1>{this.props.searchKey}</h1>
      </div>
    );
  }
}

export default SearchResults;
