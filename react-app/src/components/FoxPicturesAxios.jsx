import { useState, useEffect } from 'react';
import axios from 'axios';

const FoxPicturesAxios = () => {
    const [foxPics, setFoxPics] = useState([]);

    useEffect(() => {
        const FOX_URL = 'https://randomfox.ca/floof/';

        Promise.all([
            axios.get(FOX_URL),
            axios.get(FOX_URL),
            axios.get(FOX_URL),
            axios.get(FOX_URL),
            axios.get(FOX_URL),
            axios.get(FOX_URL),
            axios.get(FOX_URL),
            axios.get(FOX_URL)
        ]).then((allFoxPics) => {
            const newFoxPicsArr = [];
            allFoxPics.forEach((foxPic) => {
                newFoxPicsArr.push(foxPic.data);
            });
            setFoxPics(newFoxPicsArr);
        });

    }, []);

    return (
        <section>
            <h2>Fox Pictures Axios</h2>
            <ul>
                {foxPics.length > 0 && foxPics.map((foxPic, index) =>
                    <li key={index}>
                        <a href={foxPic.link}>
                            <img src={foxPic.image} style={{maxWidth: '100%'}} />
                        </a>
                    </li>
                )}
            </ul>
        </section>
    );
};

export default FoxPicturesAxios;
