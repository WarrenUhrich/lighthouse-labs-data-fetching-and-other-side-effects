import React, { useState, useEffect } from 'react';

const IntervalCounter = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const secondsInterval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        // Clean-up function!
        return () => {
            clearInterval(secondsInterval);
        };
    }, []);

    return (
        <section>
            <h2>Interval Counter</h2>
            <p>{seconds} seconds have passed.</p>
        </section>
    );
};

export default IntervalCounter;
