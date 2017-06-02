import React, { Component } from 'react';
import './App.css';
import SearchBar from './search/SearchBar'
import TripList from './search/TripList'
import request from 'superagent';
import './mainComponent.css'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            trips: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (a) => {
        const url = ``;

        request.get(url, (err, res) => {
            this.setState({gifs: res.body.data})
        });
    };
    render() {
        return (
            <div className="main">
                <div>
                    <SearchBar onTermChange={this.handleChange} />
                    <TripList trips={this.state.trips} />
                </div>
            </div>
        );
    }
}

export default Search;