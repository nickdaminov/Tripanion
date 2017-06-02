import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './mainComponent.css'
import background from './a.jpg'
class Home extends Component {
    render() {
        return (
            <div className="main">
                <img src={background} className="background"/>
            </div>
        );
    }
}

export default Home;