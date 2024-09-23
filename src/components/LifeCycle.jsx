import React, { useState, useEffect } from 'react';

function LifeCycle() {
    const [count, setCount] = useState(0);
    const [hour, setHour] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (count === 59) { 
                setHour(prevHour => prevHour + 1);
                setCount(0); 
            } else {
                setCount(prevCount => prevCount + 1);
            }
        }, 1000);

        // Cleanup function
        return () => {
            clearInterval(timer);
        };
    }, []); // Empty array means this runs only once on mount

    return <div>{hour} : {count}</div>;
}

export default LifeCycle;
