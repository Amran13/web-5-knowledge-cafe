import React from 'react';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleMarkAsRead }) => {
    const { blog_title, date, author_name, author_img, image_url, time_to_read } = blog;
    return (
        <div className="card w-full bg-base-100 shadow-xl mb-6">
            <figure><img className='w-full' src={image_url} alt="Shoes" /></figure>
            <div className="">
                <h2 className="card-title text-3xl font-bold my-4"> {blog_title} </h2>
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <div>
                            <img className='w-16 rounded-full mr-4' src={author_img} alt="" />
                        </div>
                        <div>
                            <p> {author_name} </p>
                            <p> {date} </p>
                        </div>
                    </div>
                    <div>
                        <span className='flex justify-center items-center'> <button className='p-2'><FaRegBookmark /></button> {time_to_read} min read </span>
                    </div>
                </div>

                <div className="card-actions justify-end">
                    <button onClick={() => handleMarkAsRead(blog.id)} className="btn btn-primary">Mark as read</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;