import React, { useState, useEffect } from 'react';

const FoxPictures = () => {
    const [foxPics, setFoxPics] = useState([]);

    useEffect(() => {

        const FOX_URL = 'https://randomfox.ca/floof/';

        Promise
        .all([
            fetch(FOX_URL).then(res => res.json()).then(obj => obj.image),
            fetch(FOX_URL).then(res => res.json()).then(obj => obj.image),
            fetch(FOX_URL).then(res => res.json()).then(obj => obj.image),
            fetch(FOX_URL).then(res => res.json()).then(obj => obj.image),
            fetch(FOX_URL).then(res => res.json()).then(obj => obj.image)
        ])
        // .then(foxPicArray => console.log(foxPicArray));
        .then(foxPicArray => setFoxPics(foxPicArray));

        // fetch(FOX_URL)
        // .then(response => response.json())
        // .then(console.log);

    }, []);

    return (
        <section>
            <h2>Fox Pictures</h2>
            <ul>

                {foxPics.length === 0 && <li>Loading...</li>}
                {foxPics.length > 0 && foxPics.map(
                    (foxPic, i) => <li key={i}><img src={foxPic} width="380" /></li>
                )}

            </ul>
        </section>
    );
};

export default FoxPictures;
