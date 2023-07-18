import { useState, useEffect } from 'react';
import axios from 'axios';

const StudentInfo = () => {
    const [state, setState] = useState({
        students: [],
        locations: []
    });

    useEffect(() => {
        const baseURL = 'http://localhost:8080';

        Promise.all([
            axios.get(`${baseURL}/api/locations`),
            axios.get(`${baseURL}/api/students`),
        ]).then(results => {
            const locations = results[0].data;
            const students = results[1].data;

            const newState = {
                locations,
                students
            };

            setState(newState);
        });
    }, []);

    return (
        <section>
            <h2>Students Information</h2>
            <ul>
                {state.students.map((student, index) => 
                    <li key={index}>
                        <h3>{student.name}</h3>
                        <dl>
                            <dt>Favourite Web Tech</dt>
                            <dd>{student.favourite}</dd>
                            <dt>City</dt>
                            <dd>{state.locations[student.city]}</dd>
                        </dl>
                    </li>
                )}
            </ul>
        </section>
    );
};

export default StudentInfo;
