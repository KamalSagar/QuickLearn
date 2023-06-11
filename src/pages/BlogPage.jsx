import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import {useContext} from 'react'

import {AppContext} from '../context/AppContext'

import BlogDetails from '../components/BlogDetails'
import Spinner from '../components/Spinner'

const BlogPage = () => {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const { loading, setLoading } = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("Url is : ");
        console.log(url);
        try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
            console.log("Error occurs in blog id call");
            setBlog(null);
            setRelatedBlogs([]);
        }
    }

    useEffect( () => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname])

  return (
    <div className='text-white flex flex-col h-full min-h-screen items-center mt-24 mb-10'>
        <div>
            <button
            className="border-2 border-gray-300 py-1 px-4 rounded-md mb-2"
            onClick={() => navigate(-1)} >
            Back
            </button>
        </div>
        {
            loading ?
            (<div className='flex min-h-screen w-full justify-center items-center -mt-20'>
                <Spinner/>
            </div>) :
            blog ?
            (<div className='w-[90%] flex flex-col items-center'>
                <BlogDetails post = {blog}/>
                <div className='bg-blue-800 mb-10 p-5 w-80'>
                    <h2 className='text-center text-xl font-bold'>Related Blogs</h2>
                </div>
            
                {
                    relatedblogs.map( (post) => (
                        <div key={post.id}
                        className='w-[80%]'>
                            <BlogDetails post={post}/>
                        </div>
                    ))
                }
            </div>) :
            (<div className='flex min-h-screen w-full justify-center items-center -mt-20'>
                <p>No Blog Found</p>
            </div>)
        }
    </div>
  )
}

export default BlogPage