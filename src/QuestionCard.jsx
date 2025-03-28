import { AiFillTrophy } from "react-icons/ai";
/* eslint-disable */
import React, { useEffect } from 'react';

const diffMap = {
    "Easy": "green",
    "Medium": "primary",
    "Hard": "red"
}


function QuestionCard({ data }) {

    useEffect((item) => {
        console.log(data)
    }, [data])






    return (
        <>
            <div className='border-primary border-2 h-70 w-fit p-5 rounded-3xl bg-backgroundlight flex items-start justify-start flex-col gap-3 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer'>
                {/* title */}
                <h1 className="text-primary font-bold text-3xl">{`${data.id}.${data.title}`}</h1>
                {/* topics */}
                <div className="flex items-center justify-start gap-3">
                    {data.related_topics?.split(',').slice( 0 , 3).map((item, index) => (
                        <div key={index} className="tag border-primary">
                            {item}
                        </div>
                    ))}
                </div>
                {/* acceptance_rate */}
                <h1 className="flex items-center justify-center tag border-green w-fit">{`${data.acceptance_rate}%`}<AiFillTrophy /></h1>
                {/* companies */}
                <div className="flex items-center justify-center gap-3">
                    {data.companies?.split(',').slice(0 , 3).map((item, index) => (
                        <div key={index} className="tag border-primary">
                            {item}
                        </div>
                    ))}
                </div>
                {/* Difficulty */}
                <h1 className={`tag border-${diffMap[data.difficulty]}`}>{data.difficulty}</h1>

            </div>
        </>
    );
}

export default QuestionCard;