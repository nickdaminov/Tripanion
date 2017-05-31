import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tripanion</h2>
        </div>
        <div className="MainScreenOptions">

          <div><a href="/MyProfile.html" target="_blank"> My profile </a></div>
          <div><a href="/MyProfile.html" target="_blank"> Search for a trip </a></div>
          <div><a href="/MyProfile.html" target="_blank"> My matches </a></div>
        </div>
      </div>
    );
  }
}

export default App;
