import React from 'react';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleMarkAsRead }) => {
    const { blog_title, date, author_name, image_url, time_to_read } = blog;
    return (
        <div className="card w-[60%] bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {blog_title} </h2>
                <p> {author_name} </p>
                <p> {date} </p>
                
                <span className='flex justify-center items-center'> <button className='p-2'><FaRegBookmark /></button> {time_to_read} </span>
                <div className="card-actions justify-end">
                    <button onClick={ () => handleMarkAsRead(blog.id)} className="btn btn-primary">Mark as read</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;