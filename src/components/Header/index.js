import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./assets/index.css";

class Header extends Component {
  render() {
    return (
      <header className="navbar-header">
        <nav className="navbar">
          <ul className="item-list">
            <li className="item">
              <Link to="/" className="link">
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
