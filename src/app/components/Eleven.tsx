"use client"
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

// const notify = () => toast('Your Profile Saved Successfully.');

export default function Eleven() {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState('Rabees');
    const [lastName, setLastName] = useState('Hussain');

    return (
        <>
            <form className="text-2xl font-bold text-center" onSubmit={e => {
                e.preventDefault();
                setIsEditing(!isEditing);
            }}>
                <label>
                    First name:{' '}
                    {isEditing ? (
                        <input
                            className="p-2 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-black bg-white text-black font-bold hover:text-white ml-4 border-2"
                            value={firstName}
                            onChange={e => {
                                setFirstName(e.target.value)
                            }}
                        />
                    ) : (
                        <b>{firstName}</b>
                    )}
                </label><br /><br />
                <label>
                    Last name:{' '}
                    {isEditing ? (
                        <input
                            className="p-2 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-black bg-white text-black font-bold hover:text-white ml-4 border-2"
                            value={lastName}
                            onChange={e => {
                                setLastName(e.target.value)
                            }}
                        />
                    ) : (
                        <b>{lastName}</b>
                    )}
                </label><br /><br />
                {/* <button onClick={notify} className="p-3 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-white bg-black text-white font-bold hover:text-black ml-4 border-2" type="submit"> */}
                <button className="p-3 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-white bg-black text-white font-bold hover:text-black ml-4 border-2" type="submit">
                    {isEditing ? 'Save' : 'Edit'} Profile
                </button>
                <Toaster />
                <br /><br />
                <p><i>Welcome, {firstName} {lastName}!</i></p>
            </form>
        </>
    );
}
