import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const BlogsContainer = () => {
    const [blogs, setBlogs] = useState([])
    const [marked, setMarked] = useState([]);
    const [timeToRead, setTimeToRead] = useState(0);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleMarkAsRead = (id) => {
        const selectedBlog = blogs.find(blog => blog.id === id);
        setMarked([...marked, selectedBlog])
        setTimeToRead(timeToRead + selectedBlog.time_to_read)
        
    }
    return (
        <div className='grid grid-cols-4 gap-10'>
            <div className='col-span-3'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleMarkAsRead={handleMarkAsRead}></Blog>)
                }
            </div>
            <div className=''>
                <h2 className='text-2xl'>Marks as read</h2>
                <p> {timeToRead} </p>
                <ul>
                    { 
                        marked.map(blog => <li key={blog.id}> {blog.blog_title} </li>)
                    }

                </ul>

            </div>
        </div>
    );
};

export default BlogsContainer;