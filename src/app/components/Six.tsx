/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from 'react';
import { Imglist } from '../lib/Imgs';


export default function Six() {
    const [index, setIndex] = useState(0);
    const hasNext = index < Imglist.length - 1;
    // const hasPrev = index < Imglist.length - 1;

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handleBackClick() {
        if (hasNext) {
            setIndex(index - 1);
        } else {
            setIndex(0);
        }
    }
    let sculpture = Imglist[index];
    return (
        <>
            <center className=''>
                <br />
                <img
                    onClick={handleNextClick}
                    className='hover:cursor-pointer lg:h-[600px] md:h-[600px] h-[300px] w-screen rounded-3xl'
                    src={sculpture.url}
                    alt={sculpture.alt}
                />
                <br /><br />
                <div className='flex justify-center align-middle'>
                    <button onClick={handleNextClick} className="p-3 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-black bg-white text-black font-bold hover:text-white mr-4 border-2">Next</button>
                    <h3 className='text-xl'>({index + 1} of {Imglist.length})</h3>
                    <button onClick={handleBackClick} className="p-3 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-white bg-black text-white font-bold hover:text-black ml-4 border-2">Previous</button>
                </div>
            </center>
        </>
    );
}

