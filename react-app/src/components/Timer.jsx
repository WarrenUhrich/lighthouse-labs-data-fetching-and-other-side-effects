import { useState, useEffect } from 'react';

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        const secondsInterval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        // Cleanup!
        // Occurs / runs when the component is removed
        // from the page (unmounted.)
        return () => {
            clearInterval(secondsInterval);
        };

    }, []); // if there is nothing to change...
            // ... your function only runs once!

    return (
        <section>
            <h2>Timer Component</h2>
            <p>
                {seconds} seconds have passed.
            </p>
        </section>
    );
}