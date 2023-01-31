import {useState, useEffect} from 'react';
import axios from 'axios';

export default function MangaSearch() {
    const [searchText, setSearchText] = useState('Solo Leveling');
    const [results, setResults] = useState([]);

    const handleMangaRequest = () => {
        axios.get(`https://api.mangadex.org/manga?title=${searchText}`)
             .then((data) => {
                // console.log(data.data.data);
                setResults(data.data.data);
             });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        handleMangaRequest();
    };

    useEffect(() => {
        handleMangaRequest();
    }, []);

    return (
        <section>
            <h2>Manga Search</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchText}
                    onChange={event => setSearchText(event.target.value)}
                />
                <input type="submit" />
            </form>
            {results.length === 0 ? <p>No results.</p> : <ul>
                    {results.map(manga => <li key={manga.id}>
                        <a href={manga.attributes.links?.amz}>
                            {manga.attributes.title.en}
                        </a>
                        <p>{manga.attributes.description.en}</p>
                    </li>)}
                </ul>}
        </section>
    );
}