import { useState, useEffect } from 'react';
import axios from 'axios';

export default function StudentLocationList2() {
    const [state, setState] = useState({
        locations: [],
        students: []
    });

    useEffect(() => {
        const url = 'http://localhost:5000/api/';

        const locationsRequest = axios.get(`${url}locations`);
        const studentsRequest = axios.get(`${url}students`);

        Promise.all([locationsRequest, studentsRequest])
               .then((responses) => {
                    setState({
                        locations: responses[0].data,
                        students: responses[1].data
                    });
               });
    }, []);

    function studentsListItems() {
        return state.students.map((student, index) => <li key={index}>
            <dl>
                <dt>Name</dt><dd>{student.name}</dd>
                <dt>Location</dt><dd>{state.locations[student.location]}</dd>
                <dt>Favourite Web Technology</dt><dd>{student.favWebTech}</dd>
            </dl>
        </li>);
    }

    return (
        <section>
            <h2>Student Location List Component</h2>
            {(state.locations.length === 0 || state.students.length === 0) && <p>
                Loading...</p>}
            {state.locations.length > 0 && state.students.length > 0 && <ul>
                    {studentsListItems()}
                </ul>}
        </section>
    );
}
