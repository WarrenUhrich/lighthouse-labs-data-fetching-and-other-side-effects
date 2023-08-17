import { useState, useEffect } from 'react';

const FoxPictures = () => {
    const [foxPics, setFoxPics] = useState([]);

    useEffect(() => {
        const FOX_URL = 'https://randomfox.ca/floof/';

        Promise.all([
            fetch(FOX_URL).then(response => response.json()),
            fetch(FOX_URL).then(response => response.json()),
            fetch(FOX_URL).then(response => response.json()),
            fetch(FOX_URL).then(response => response.json()),
            fetch(FOX_URL).then(response => response.json()),
            fetch(FOX_URL).then(response => response.json()),
            fetch(FOX_URL).then(response => response.json()),
            fetch(FOX_URL).then(response => response.json())
        ]).then((allFoxPics) => {
            setFoxPics(allFoxPics);
        });

        // fetch(FOX_URL)
        //     .then((response) => {
        //         // console.log(response);
        //         return response.json();
        //     })
        //     .then((foxInfo) => {
        //         // console.log(foxInfo);
        //         setFoxPics(prev => {
        //             return [...prev, foxInfo];
        //         });
        //     });

    }, []);

    return (
        <section>
            <h2>Fox Pictures</h2>
            <ul>
                {foxPics.length > 0 && foxPics.map((foxPic, index) =>
                    <li key={index}>
                        <a href={foxPic.link}>
                            <img src={foxPic.image} />
                        </a>
                    </li>
                )}
            </ul>
        </section>
    );
};

export default FoxPictures;
