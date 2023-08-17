import { useState, useEffect } from 'react';

const IntervalCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {

        const counterInterval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        // If the component is unmounted, we should cleanup.
        return () => {
            // Delete this interval so it won't run in the background.
            clearInterval(counterInterval);
        };

    }, []); // Nothing to change.. will just run ONCE on mount.

    return (
        <section>
            <h2>Interval Counter</h2>
            <p>{count} seconds have passed.</p>
        </section>
    );
};

export default IntervalCounter;
