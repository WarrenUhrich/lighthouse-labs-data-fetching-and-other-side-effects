import React, { useState, useEffect } from 'react';

const TitleComponent = () => {
    const [title, setTitle] = useState('My React App');

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <section>
            <h1>{title}</h1>
            <input
                type="text"
                onChange={e => setTitle(e.target.value)}
                value={title}
            />
        </section>
    );
};

export default TitleComponent;
