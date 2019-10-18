import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import MovieList from "../movie-list";
import "./css/index.css";
import Spinner from "../spinner";

class Container extends Component {
  state = {
    term: "",
    movies: []
  };

  onInputChange(term) {
    this.setState({ term });
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${this.state.term}`)
      .then(res => {
        this.setState({ movies: res.data }, () => {
          if (this.props.onSearch) {
            this.props.onSearch(this.state.movies);
          }
        });
      });
  }

  _handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    // if (this.state.movies.length === 0) {
    //   return <Spinner />;
    // }
    return (
      <div>
        <h1 className="find-movie">Find a Movie</h1>
        <form onSubmit={this._handleSubmit}>
          <div className="container-search-bar">
            <div className="search-bar">
              <input
                placeholder="search ..."
                onChange={event => this.onInputChange(event.target.value)}
                name="search"
              />
              <button type="submit">
                <SearchIcon />
                Search
              </button>
            </div>
          </div>
          <MovieList movies={this.state.movies} />
        </form>
      </div>
    );
  }
}
export default Container;
