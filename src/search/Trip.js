import React from 'react';

const Trip = (trip) => {
    return (
        <div className="trip-item">
            <img src={trip.url} />
        </div>
    )
};

export default Trip;