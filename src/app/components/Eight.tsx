"use client"
import { useState } from 'react';

export default function Eight() {
    const [number, setNumber] = useState(0);
    return (
        <>
            <div className="flex justify-center">
                <h1 className="p-3 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-white bg-black text-white font-bold hover:text-black ml-4 border-2">{number}</h1>
                <button onClick={() => {
                    setNumber(number + 1);
                }} className="p-3 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-white bg-black text-white font-bold hover:text-black ml-4 border-2">add</button>
            </div>
        </>
    )
}