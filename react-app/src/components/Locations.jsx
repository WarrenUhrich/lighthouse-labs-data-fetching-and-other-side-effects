import React, { useState, useEffect } from 'react';

const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const URL = '/api/locations';

        fetch(URL)
        .then(res => res.json())
        .then(arrOfLocations => setLocations(arrOfLocations));
    }, []);

    return (
        <section>
            <h2>Locations from our Express Server (Separate App!)</h2>
            <ul>
                {locations.length === 0 && <li>Loading...</li>}
                {locations.length > 0 && locations.map(
                    (location, index) => <li key={index}>{location}</li>
                )}
            </ul>
        </section>
    );
};

export default Locations;
