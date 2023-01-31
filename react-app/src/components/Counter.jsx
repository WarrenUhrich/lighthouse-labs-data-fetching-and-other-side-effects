import { useState, useEffect } from 'react';

/**
 * React Hooks
 * 
 * 1. Only want to call these at top-level
 * 2. Only call hooks in React functions
 */

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Button Clicked ${count} Times`;
    }, [count]);

    return (
        <section>
            <h2>Counter Component</h2>
            <button onClick={() => setCount(prev => prev + 1)}>
                This Counter has been clicked
                &nbsp;
                {count}
                &nbsp;
                times!
            </button>
        </section>
    );
}