import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationsAxios = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const URL = '/api/locations';

        axios.get(URL).then(res => setLocations(res.data));
    }, []);

    return (
        <section>
            <h2>Locations from our Express Server (Separate App!) (Axios)</h2>
            <ul>
                {locations.length === 0 && <li>Loading...</li>}
                {locations.length > 0 && locations.map(
                    (location, index) => <li key={index}>{location}</li>
                )}
            </ul>
        </section>
    );
};

export default LocationsAxios;
