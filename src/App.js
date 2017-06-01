import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import {Router, Route, browserHistory} from "react-router";
//import {MyProfile} from "./MyProfile"
//import {MyMatches} from "./MyMatches"
import SearchBar from './search/SearchBar'
import TripList from './search/TripList'
class App extends Component {
    constructor() {
        super();
        this.state = {
            trips: [

            ]
        }
    }
    handleChange(a) {
        console.log(a);
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tripanion</h2>
        </div>
          <div>
              <SearchBar onTermChange={this.handleChange} />
              <TripList trips={this.state.trips} />
          </div>
      </div>
    );
  }
}

export default App;
