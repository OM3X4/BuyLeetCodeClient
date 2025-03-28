/* eslint-disable */
import React, { useState , useEffect } from 'react';
import { data } from './assets/data2_modified2';
import QuestionCard from './QuestionCard';



function Questions() {

    const [topic , setTopic] = useState("0");
    const [Diff , setDiff] = useState("0");

    useEffect((item) => {
        console.log(topic , Diff)
    } ,[topic , Diff ])


    return (
    <>
        <div className='flex items-center justify-between min-h-[calc(100vh-5rem)] w-screen'>
            <div className='flex-[4]'>
                <QuestionCard data={data[0]}/>
            </div>
            <div className='bg-backgroundlight flex-1  h-[calc(100vh-5rem)] flex items-center py-10 flex-col px-5'>
                <h1>Filter</h1>
                <div className='flex items-center justify-center gap-6'>
                    <h1 className='text-sm'>Topics</h1>
                    <input
                            type="text"
                            className=" w-full self-start bg-background my-2 rounded-lg px-4 py-1 border-2 border-gray focus:outline-none focus:border-green"
                            list='datalist'
                            onChange={e => setTopic(e.target.value)}
                    />
                    <datalist id='datalist'>
                        <option value="0">None</option>
                        <option value="Array">Array</option>
                        <option value="String">String</option>
                        <option value="HashMap">HashMap</option>
                    </datalist>
                </div>
                <div className='flex items-center justify-center gap-6'>
                    <h1 className='text-sm'>Topics</h1>
                    <select id='datalist'
                        onChange={e => setDiff(e.target.value)}
                        className=" w-full self-start bg-background my-2 rounded-lg px-4 py-1 border-2 border-gray focus:outline-none focus:border-green">
                        <option value="0">None</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
            </div>
        </div>
    </>
    );
}

export default Questions;