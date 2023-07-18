import { useState, useEffect } from "react";

const TitleComponent = () => {
    const [title, setTitle] = useState('useEffect React App');

    useEffect(() => {

        console.log('Title changed to:', title);

        // Updates the <title> element in our page:
        document.title = title;

    }, [title]); // Runs our func ONLY WHEN title changes

    return (
        <section>
            <h1>{title}</h1>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
        </section>
    );
};

export default TitleComponent;
