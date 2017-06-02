import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './mainComponent.css'

class MyProfile extends Component {
    constructor() {
        super();
        this.state = {
        };

    }

    render() {
        return (
            <div className="main">
                <div>
                    Name: Joe Black
                </div>
                <div>
                    Country: UK
                </div>
                <div>
                    Age: 19
                </div>
                <div>
                    Email: joeblack@mail.com
                </div>
            </div>

        );
    }
}

export default MyProfile;
