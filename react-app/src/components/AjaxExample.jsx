import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AjaxExample() {
    const [results, setResults] = useState(false);

    useEffect(() => {
        axios.get('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json')
            .then(response => setResults(response.data.dataseries))
            .catch(error => console.log(error));
    }, []);

    return (

        <section>
            <h2>Weather API Component</h2>

            {results !== false && <ul>

                    {results.map((result, i) => <li key={i}>

                            {result.temp2m} C

                        </li>)}

                </ul>}

            {results === false && <p>Loading...</p>}

            {results !== false && results.length === 0 && <p>No results found.</p>}

        </section>

    );

}
