"use client"
import React from 'react'

function Five() {
    return (
        <>
            <button className="p-4 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-black bg-white text-black font-bold hover:text-white mr-2 border-2" onClick={function handleClick() {
                alert('This alert with OnClick Function!');
            }}>Function Click</button>
            <br />
            <button className="p-4 text-xl rounded-lg hover:rounded-xl transition-all hover:bg-white bg-black text-white font-bold hover:text-black ml-2 border-2" onClick={() => {
                alert('This alert with OnClick FatArrow Function!');
            }}>Fatarrow Click</button>
        </>
    )
}

export default Five
