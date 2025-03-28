import { BiMessageAlt } from "react-icons/bi";
/* eslint-disable */
import React , {useState} from 'react';
import { BiUpvote } from "react-icons/bi";
import { BiSolidUpvote } from "react-icons/bi";
function PostCard({ data }) {

    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <div>
                <div className='border-primary border-2 w-fit p-5 rounded-3xl bg-backgroundlight flex items-start justify-start flex-col gap-3 cursor-pointer'>
                    {/* user */}
                    <div>
                        <h1 className=" font-bold text-xl">By <span className='text-red'>@{data.user} </span><span className='text-gray text-sm'>At {data.date}</span></h1>

                    </div>
                    {/* title */}
                    <h1 className="text-primary font-bold text-3xl">{data.head}</h1>
                    {/* content */}
                    <p className="">{data.content}</p>

                    {/* upvotes */}
                    <div className="flex items-center justify-start gap-3">
                        <h1
                            className="text-primary flex gap-1 items-center rounded-full bg-background px-2 py-1 group relative overflow-hidden"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {data.upvotes}
                            {data.voted ? (
                                <BiSolidUpvote />
                            ) : (
                                <BiUpvote className={`transition-all ${isHovered ? "fly-animation" : ""}`} />
                            )}
                        </h1>
                        <div className="text-primary flex gap-1 items-center rounded-full bg-background px-2 py-1 group relative overflow-hidden"
                        >
                            <BiMessageAlt className="text-xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostCard;