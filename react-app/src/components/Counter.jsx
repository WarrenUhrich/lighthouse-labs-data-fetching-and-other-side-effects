import { useState, useEffect } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count Clicked ${count} Times!`;
    }, [count]); // If anything in the dependency array changes...
                 // ... run our function!

    return (
        <section>
            <h2>Counter Component</h2>
            <button onClick={() => { setCount((prev) => prev + 1); }}>
                This counter has been clicked
                &nbsp;
                {count}
                &nbsp;
                times!
            </button>
        </section>
    );
}