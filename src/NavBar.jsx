/* eslint-disable */
import React from 'react';

function NavBar() {
    return (
    <>
        <div className='flex items-center justify-between px-20 gap-10 min-h-20 bg-backgroundlight'>
            <div className='flex items-center justify-center gap-30'>
                <h1 className='text-primary font-mono text-3xl font-bold cursor-pointer'>BuyLeetCode</h1>
                <ul className='flex items-center justify-center gap-10'>
                    <li className='text-lg font-medium cursor-pointer text-white hover:text-green'>Questions</li>
                    <li className='text-lg font-medium cursor-pointer text-white hover:text-green'>Discuss</li>
                </ul>
            </div>
            <button className='greenButton'>Login</button>
        </div>
        <hr className='text-gray'/>
    </>
    );
}

export default NavBar;