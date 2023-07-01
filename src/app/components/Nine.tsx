"use client"
import { useState } from 'react';

export default function Nine() {
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    function handleFirstNameChange(e: any) {
        setPerson({
            ...person,
            firstName: e.target.value
        });
    }

    function handleLastNameChange(e: any) {
        setPerson({
            ...person,
            lastName: e.target.value
        });
    }

    function handleEmailChange(e: any) {
        setPerson({
            ...person,
            email: e.target.value
        });
    }
    return (
        <>
            <div className="text-xl font-bold text-center">
                <div>
                    <h1>Your Data Is Below</h1>
                    <br />
                    {person.firstName}{' '}
                    <br />
                    {person.lastName}{' '}
                    <br />
                    {person.email}
                    <br /><br /><br />
                </div>
                <label>
                    First name:
                    <input
                        className="p-2 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-black bg-white text-black font-bold hover:text-white ml-4 border-2"
                        value={person.firstName}
                        onChange={handleFirstNameChange}
                    />
                </label><br /><br />
                <label>
                    Last name:
                    <input
                        className="p-2 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-black bg-white text-black font-bold hover:text-white ml-4 border-2"
                        value={person.lastName}
                        onChange={handleLastNameChange}
                    />
                </label><br /><br />
                <label>
                    Email:
                    <input
                        className="p-2 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-black bg-white text-black font-bold hover:text-white ml-4 border-2"
                        value={person.email}
                        onChange={handleEmailChange}
                    />
                </label><br /><br />
            </div>
        </>
    );
}
