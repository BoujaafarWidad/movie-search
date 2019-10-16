import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Container from "./Container";
import Footer from "./footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Container} />
          </Switch>
          <Footer />
        </Router>
      </Fragment>
    );
  }
}

export default App;
