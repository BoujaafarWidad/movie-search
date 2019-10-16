import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./css/index.css";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  onInputChange(term) {
    this.setState({ term });
  }
  render() {
    console.log(this.state.term);
    return (
      <div className="container">
        <div className="search-bar">
          <input
            onChange={event => this.onInputChange(event.target.value)}
            name="search"
          />
          <button type="submit">
            <SearchIcon />
            Search
          </button>
        </div>
      </div>
    );
  }
}
export default Container;
