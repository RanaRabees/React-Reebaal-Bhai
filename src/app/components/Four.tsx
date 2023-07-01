"use client"
import { useState, useEffect } from 'react';
const today = new Date();

function formatDate(date: any) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}

export default function Four() {
    return (
        <div style={{ backgroundColor: 'black' }} >
            <br />
            <h1 className='text-4xl text-center text-lime-500'>Today Is {formatDate(today)}</h1>
            <Counter />
            <br />
        </div >
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + 1);
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return <h1 className='text-4xl text-center text-lime-500'><br />Seconds passed: {count}</h1>;
}
