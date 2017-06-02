import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
//import {Router, Route, browserHistory} from "react-router";
import MyProfile from "./MyProfile"
import MyMatches from "./MyMatches"
import Home from "./Home"
import Search from "./Search"

class App extends Component {
  render() {
      return(
          <Router>
              <div  className="App">
                  <div className="topnav" id="myTopnav">

                      <h2>Tripanion</h2>
                      <Link to="/">Home</Link>
                      <Link to="/profile">My Profile</Link>
                      <Link to="/matches">My Trips</Link>
                      <Link to="/search">Search Trip</Link>

                  </div>

                  <Route exact path="/" component={Home}/>
                  <Route path="/profile" component={MyProfile}/>
                  <Route path="/matches" component={MyMatches}/>
                  <Route path="/search" component={Search}/>

              </div>
          </Router>
      );
  }
}

export default App;
