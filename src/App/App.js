import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import Nav from "./../modules/Nav/Nav";
import Home from "./../modules/Home/Home";
import CreateVampireForm from "./../modules/CreateVampireForm/CreateVampireForm";
import store from '../services/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/create-vampire-form" component={CreateVampireForm} />
          <footer>footer</footer>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
