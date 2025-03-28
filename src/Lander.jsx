/* eslint-disable */
import React from 'react';

function Lander() {
    return (
    <>
        <header className='flex items-center justify-center h-[calc(100vh-10rem)] flex-col gap-5'>
            <h1 className='text-8xl text-primary font-bold'>Get Hired</h1>
            <p className='text-gray'>Solve <span className='text-primary font-bold'>LeetCode</span> <span className='text-red font-bold text-xl'>HARD</span> Questions With A Click Of A Button</p>
            <button className='greenButton'>Questions</button>
        </header>
    </>
    );
}

export default Lander;