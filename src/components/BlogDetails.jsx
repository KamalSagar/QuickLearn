import React from 'react'
import {NavLink} from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='bg-slate-800 p-10 pl-14 pr-14 rounded-lg mb-10'>
        <NavLink to={`/blog/${post.id}`}>
            <span className='text-yellow-400 text-lg font-bold'>{post.title}</span>
        </NavLink>
        <p className='text-sm mt-[4px]'>
            By 
            <span className='italic'> {post.author}</span>
            on {" "}
            <span className='underline font-bold'>{post.category}</span>
            
        </p>
        <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
        <p className='text-md mt-[14px]'>{post.content}</p>
        <div className='flex gap-x-2'>
            {post.tags.map( (tag,index) => (
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                    <span className="text-blue-500 underline font-bold text-xs mt-[5px]">{`#${tag}`}</span>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default BlogDetails