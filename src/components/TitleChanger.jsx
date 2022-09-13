import { useState, useEffect } from 'react';

const TitleChanger = () => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        document.title = title;
    }, [title]); // If title changes, run our function

    return (
        <section>
            <h2>Page Title Changer</h2>
            <label>
                Enter a title for this page:
                <input
                    type="text"
                    value={title}
                    onChange={(event) => {
                        setTitle(
                            event.target.value
                        );
                    }}
                />
            </label>
        </section>
    );
};

export default TitleChanger;
