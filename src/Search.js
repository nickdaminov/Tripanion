import React, { Component } from 'react';
import './App.css';
import SearchBar from './search/SearchBar'
import TripList from './search/TripList'

class Search extends Component {
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
            <div>
                <div>
                    <SearchBar onTermChange={this.handleChange} />
                    <TripList trips={this.state.trips} />
                </div>
            </div>
        );
    }
}

export default Search;