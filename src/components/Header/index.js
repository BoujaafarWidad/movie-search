import React, { Component } from "react";
import { Link } from "react-router-dom";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import "./assets/index.css";

class Header extends Component {
  render() {
    return (
      <header className="navbar-header">
        <nav className="navbar">
          <ul className="item-list">
            <li className="item">
              <Link to="/" className="link">
                <LocalMoviesIcon className="icon" />
                BRAND
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
