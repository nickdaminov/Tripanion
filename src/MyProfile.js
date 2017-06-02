import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './mainComponent.css'

class MyProfile extends Component {
    constructor() {
        super();
       /* this.state = {
            name: this.props.name,
            country: this.props.country,
            age: this.props.age,
            email: this.props.email
        };
*/
    }

    render() {
        return (
            <div className="main">
                <div>
                    Name: Nick
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
