import React from 'react';
import Trip from './Trip';

const TripList = (props) => {
    const tripElems = props.trips.map((trip) => {
        return <Trip key={trip.id}  />
    });

    return (
        <div className="trip-list">{tripElems}</div>    );
};

export default TripList;