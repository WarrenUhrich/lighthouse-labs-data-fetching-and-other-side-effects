import { useState, useEffect } from 'react';

const IntervalCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const countInterval = setInterval(() => {
            setCount((prev) => {
                return prev + 1;
            });
        }, 1000); // Repeat every 1s

        const cleanUp = () => {
            clearInterval(countInterval);
        };

        // Cleanup belongs in a useEffect return
        return cleanUp;
    }, []); // This only runs on FIRST render

    return <p>{count} seconds have passed.</p>;
};

export default IntervalCounter;
