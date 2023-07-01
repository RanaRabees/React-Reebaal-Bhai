"use client"
import { useState } from 'react';

export default function Ten() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');
    if (status === 'success') {
        // eslint-disable-next-line react/no-unescaped-entities
        return <h1 className="text-xl font-bold text-center">That's right!</h1>
    }

    async function handleSubmit(e: any) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err: any) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e: any) {
        setAnswer(e.target.value);
    }

    return (
        <>
            <div className="text-xl font-bold text-center">
                <h2>City quiz</h2>
                <p>
                    In which city is there a billboard that turns air into drinkable water?
                </p>
                <form onSubmit={handleSubmit}>
                    <br />
                    <textarea
                        className="p-2 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-black bg-white text-black font-bold hover:text-white ml-4 border-2"
                        value={answer}
                        onChange={handleTextareaChange}
                        disabled={status === 'submitting'}
                    />
                    <br />
                    <button
                        className="p-3 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-white bg-black text-white font-bold hover:text-black ml-4 border-2" disabled={
                            answer.length === 0 ||
                            status === 'submitting'
                        }>
                        Submit
                    </button>
                    {/* {error !== null &&
                        <p className="Error">
                            {error.message}
                        </p>
                    } */}
                </form>
            </div>
        </>
    )
}

function submitForm(answer: any) {
    // Pretend it's hitting the network.
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima'
            if (shouldError) {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            } else {
                resolve();
            }
        }, 1500);
    });
}
