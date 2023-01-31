import { useState, useEffect } from 'react';
import axios from 'axios';

export default function StudentLocationList() {
    const [locations, setLocations] = useState([]);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/api/';

        axios.get(`${url}locations`)
             .then((response) => {
                console.log(response.data);
                setLocations(response.data);
             });

        axios.get(`${url}students`)
             .then((response) => {
                console.log(response.data);
                setStudents(response.data);
             });
    }, []);

    function studentsListItems() {
        return students.map((student, index) => <li key={index}>
            <dl>
                <dt>Name</dt><dd>{student.name}</dd>
                <dt>Location</dt><dd>{locations[student.location]}</dd>
                <dt>Favourite Web Technology</dt><dd>{student.favWebTech}</dd>
            </dl>
        </li>);
    }

    return (
        <section>
            <h2>Student Location List Component</h2>
            {(locations.length === 0 || students.length === 0) && <p>
                Loading...</p>}
            {locations.length > 0 && students.length > 0 && <ul>
                    {studentsListItems()}
                </ul>}
        </section>
    );
}
