import React from 'react';
import Trip from './Trip';

const TripList = (props) => {
    const trips = props.trips.map((trip) => {

    });

    return (
        <ul>{trips}</ul>
    );
};

export default TripList;