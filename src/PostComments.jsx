/* eslint-disable */
import React from 'react';
import PostCard from './PostCard';

const posts = [
    {
        head: "How I Went from 0 to 300 LeetCode Problems in 3 Months",
        user: "CodeMaster99",
        content: "I started with easy problems and gradually moved to medium. I also used the discuss section to learn from others.",
        date: "2023-10-01",
        upvotes: 45,
        voted: false,
    },
    {
        head: "Best Practices for Solving LeetCode Problems",
        user: "AlgoQueen",
        content: "Always read the problem statement carefully. Try to understand the underlying concepts before jumping into coding.",
        date: "2023-09-25",
        upvotes: 120,
        voted: false,
    },
    {
        head: "Best Practices for Solving LeetCode Problems",
        user: "AlgoQueen",
        content: "Always read the problem statement carefully. Try to understand the underlying concepts before jumping into coding.",
        date: "2023-09-25",
        upvotes: 19,
        voted: false,
    }
]



function PostComments() {
    return (
    <>
        <div className='flex items-center justify-center w-full min-h-[calc(100vh-5rem)] '>
            <div className='min-h-[calc(100vh-5rem)] w-[70vw] bg-backgroundlight flex items-center justify-start flex-col gap-5 p-10'>
                {posts.map((item, index) => (
                    <PostCard key={index} data={item} />
                ))}
            </div>
        </div>
    </>
    );
}

export default PostComments;