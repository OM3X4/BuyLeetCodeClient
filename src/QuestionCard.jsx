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
            <div className='border-primary border-2 h-50 w-70 p-3 rounded-3xl bg-backgroundlight'>
                <h1>{`${data.id}.${data.title}`}</h1>
                <div className="flex items-center justify-center gap-3">
                    {data.related_topics?.split(',').slice( 0 , 3).map((item, index) => (
                        <div key={index} className="tag border-primary">
                            {item}
                        </div>
                    ))}
                </div>
                <h1 className="flex items-center justify-center tag border-green w-fit">{`${data.acceptance_rate}%`}<AiFillTrophy /></h1>
                <div className="flex items-center justify-center gap-3">
                    {data.companies?.split(',').slice(0 , 3).map((item, index) => (
                        <div key={index} className="tag border-primary">
                            {item}
                        </div>
                    ))}
                </div>
                <h1>{data.difficulty}</h1>

            </div>
        </>
    );
}

export default QuestionCard;