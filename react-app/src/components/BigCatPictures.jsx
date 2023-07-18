import { useState, useEffect } from 'react';
import axios from 'axios';

const BigCatPictures = () => {
    const [bigCatPics, setBigCatPics] = useState([]);

    useEffect(() => {
        const bigCatPicAPIURL = 'https://randombig.cat/roar.json';
        Promise.all([
            axios.get(bigCatPicAPIURL),
            axios.get(bigCatPicAPIURL),
            axios.get(bigCatPicAPIURL),
            axios.get(bigCatPicAPIURL),
            axios.get(bigCatPicAPIURL)
        ]).then(results => {
            const bigCatPicsArr = results.map((result) => result.data.url);
            setBigCatPics(bigCatPicsArr);
        });
    }, []);
    
    return(
        <section>
            <h2>Big Cat Pictures</h2>
            <ul>
                {bigCatPics.map((url, index) =>
                    <li key={index}>
                        <img src={url} width="200" />
                    </li>
                )}
            </ul>
        </section>
    );
};

export default BigCatPictures;
