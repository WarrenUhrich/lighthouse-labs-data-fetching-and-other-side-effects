import { useState, useEffect } from 'react';
import axios from 'axios';

const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {

        const LOCATIONS_URL = 'http://localhost:8500/api/locations';

        axios.get(LOCATIONS_URL)
             .then((response) => {
                console.log(response.data);
                setLocations(response.data);
             });

    }, []);

    return (
        <section>
            <h2>Locations</h2>
            <ul>
                {locations.length > 0 && locations.map((location, i) =>
                    <li key={i}>
                        {location}
                    </li>
                )}
            </ul>
        </section>
    );
};

export default Locations;
