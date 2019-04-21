import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./../modules/Nav/Nav";
import Home from "./../modules/Home/Home";
import CreateVampireForm from "./../modules/CreateVampireForm/CreateVampireForm";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/create-vampire-form" component={CreateVampireForm} />
          <footer>footer</footer>
        </div>
      </Router>
    );
  }
}

export default App;
