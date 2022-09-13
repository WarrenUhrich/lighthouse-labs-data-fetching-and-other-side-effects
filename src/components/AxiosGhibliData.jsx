import { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosGhibliData = () => {
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const ajaxFilms = axios.get('https://ghibliapi.herokuapp.com/films');
        const ajaxPeople = axios.get('https://ghibliapi.herokuapp.com/people');
        const ajaxLocations = axios.get('https://ghibliapi.herokuapp.com/locations');
    
        const allPromises = [ajaxFilms, ajaxPeople, ajaxLocations];

        Promise.all(allPromises)
            .then((values) => {
                 console.log(values);
                setFilms(values[0].data);
                setPeople(values[1].data);
                setLocations(values[2].data);
            });
    }, []); // Run once at FIRST render

    return (
        <section>
            <h2>List of Ghibli Films, People, and Locations (Axios)</h2>
            <h3>Films:</h3>
            <ul>
                {films.map((film) => <li key={film.id}>{film.title}</li>)}
            </ul>
            <h3>People:</h3>
            <ul>
                {people.map((person) => <li key={person.id}>{person.name}</li>)}
            </ul>
            <h3>Locations:</h3>
            <ul>
                {locations.map((location) => <li key={location.id}>{location.name}</li>)}
            </ul>
        </section>
    );
};

export default AxiosGhibliData;
