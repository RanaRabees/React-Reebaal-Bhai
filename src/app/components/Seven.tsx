"use client"
import { useState } from 'react';


function sendMessage(message: any) {
    // ...
}

export default function Seven() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('Hi!');
    if (isSent) {
        return <h1 className="text-xl font-bold text-center">Your message is on its way!</h1>
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setIsSent(true);
            sendMessage(message);
        }}>
            <div className='flex justify-center align-middle'>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="p-2 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-black bg-white text-black font-bold hover:text-white ml-4 border-2"
                />
                <button type="submit" className="p-3 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-white bg-black text-white font-bold hover:text-black ml-4 border-2">Send</button>
            </div>
        </form>
    );
}