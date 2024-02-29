import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoxPicturesAxios = () => {
    const [foxPics, setFoxPics] = useState([]);

    useEffect(() => {

        const FOX_URL = 'https://randomfox.ca/floof/';

        Promise
        .all([
            axios.get(FOX_URL).then(res => res.data.image),
            axios.get(FOX_URL).then(res => res.data.image),
            axios.get(FOX_URL).then(res => res.data.image),
            axios.get(FOX_URL).then(res => res.data.image),
            axios.get(FOX_URL).then(res => res.data.image)
        ])
        .then(foxPicArray => setFoxPics(foxPicArray));
    }, []);

    return (
        <section>
            <h2>Fox Pictures (Axios)</h2>
            <ul>

                {foxPics.length === 0 && <li>Loading...</li>}
                {foxPics.length > 0 && foxPics.map(
                    (foxPic, i) => <li key={i}><img src={foxPic} width="380" /></li>
                )}

            </ul>
        </section>
    );
};

export default FoxPicturesAxios;
