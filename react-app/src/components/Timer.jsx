import { useState, useEffect } from 'react';

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const secondsInterval = setInterval(() => {
            setSeconds((prev) => {
                return prev + 1;
            });
        }, 1000);

        // Cleanup! If the component is removed, this runs.
        // We don't want timeouts or intervals to run after the component is gone.
        return () => {
            clearInterval(secondsInterval);
        };
    }, []);

    useEffect(() => {
        document.title = `${seconds} seconds have passed`;
    }, [seconds]);

    return (
        <section>
            <h2>Timer Component</h2>
            <p>
                {seconds} seconds have passed.
            </p>
        </section>
    );
}
