import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
/* eslint-disable */
import React, { useState } from 'react';

function SignUp() {

    const [isPasswordShown, setIsPasswordShown] = useState(false)

    return (
        <>
            <div className='flex items-center justify-center h-screen bg-black'>
                <div className='h-[90vh] w-[70vw] bg-background flex items-center justify-start'>
                    <div className='flex items-center py-5 h-full w-1/2 px-15 bg-backgroundlight flex-col'>
                        <h1 className='self-start text-primary text-4xl font-bold cursor-pointer mb-15'>BuyLeetCode</h1>
                        <div className='self-start px-10'>
                            <h2 className='text-3xl font-bold'>Get Started</h2>
                            <h4 className='text-gray text-sm'>Create An Account</h4>
                        </div>
                        <div className='bg-white w-full h-5 my-5'></div>
                        <h6 className='self-start'>Username</h6>
                        <input
                            type="text"
                            className=" w-full self-start bg-background my-2 rounded-lg px-4 py-1 border-2 border-gray focus:outline-none focus:border-green
                    placeholder:italic"
                            placeholder='yourname123'
                        />
                        <h6 className='self-start'>Email</h6>
                        <input
                            type="email"
                            className=" w-full self-start bg-background my-2 rounded-lg px-4 py-1 border-2 border-gray focus:outline-none focus:border-green
                    placeholder:italic"
                            placeholder='you@example.com'
                        />
                        <h6 className='self-start'>Password</h6>
                        <div className="relative w-full">
                            <input
                                type={isPasswordShown ? "text" : "password"}
                                className="self-start bg-background my-2 rounded-lg px-4 py-1 border-2 border-gray focus:outline-none focus:border-green w-full pr-10"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                                onClick={() => setIsPasswordShown(!isPasswordShown)}
                            >
                                {isPasswordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </button>
                        </div>

                        <button className='!rounded-xl greenButton w-full text-2xl font-bold my-5'>Sign Up</button>
                        <h6 className="text-gray text-sm">Have An Account? <span className="text-md text-white underline cursor-pointer">Sign In</span></h6>
                        <p className="text-gray text-xs text-center mt-10 ">
                            By continuing, you agree to BuyLeetCode's Terms of Service and Privacy Policy,
                            and to receive periodic emails with updates.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;