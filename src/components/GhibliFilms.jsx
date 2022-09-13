import { useState, useEffect } from 'react';

const GhibliFilms = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFilms(data);
                // console.log(data);
            });
    }, []); // Run once at FIRST render

    const listOfFilmsJSX = films.map((film) => {
        return (
            <li key={film.id} style={{clear:'both', marginBottom: '32px'}}>
                <h3>{film.title} ({film.original_title})</h3>
                <p>
                    <img
                        src={film.image}
                        style={{
                            maxWidth: '100px',
                            float: 'left',
                            marginRight: '16px'
                        }}
                    />
                    {film.description}
                </p>
            </li>
        );
    });

    return (
        <section>
            <h2>List of Ghibli Films</h2>
            {films.length === 0 && <p>No films to display.</p>}
            {films.length > 0 && <ul>{listOfFilmsJSX}</ul>}
        </section>
    );
};

export default GhibliFilms;