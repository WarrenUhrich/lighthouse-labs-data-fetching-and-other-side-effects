import { useState, useEffect } from 'react';

const IntervalCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const secondsInterval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        // When unmounted, clearInterval
        return () => {
            clearInterval(secondsInterval);
        };
    }, []); // Only run side-effect once... no dependencies

    return (
        <section>
            <h2>Interval Counter</h2>
            <p>{count} seconds have passed.</p>
        </section>
    );
};

export default IntervalCounter;
