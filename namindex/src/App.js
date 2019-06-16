import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import "./Default.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Router Fruiter</h1>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route
              path="/about"
              component={About}
            />

            <Route
              path="/contact"
              component={Contact}
            />

            <Route component={Error}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
