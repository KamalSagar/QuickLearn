import React from 'react'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs'

import { useNavigate, useLocation } from 'react-router-dom'



const TagPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);

  return (
    <div className='flex flex-col items-center text-white mt-24'>
        <div className='flex flex-col items-center gap-y-5'>
            <div>
                <button
                className="border-2 border-gray-300 py-1 px-4 rounded-md"
                onClick={() => navigate(-1)}
                >
                    Back
                </button>

            </div>
            <div className='bg-slate-700 py-2 px-4 rounded min-w-80 mb-5'>
                <h2 className='text-center'>
                    Blogs Tagged <span className='text-blue-500'>#{tag}</span>
                </h2>
            </div>
            <Blogs/>
            <Pagination/>
        </div>
    </div>
  )
}

export default TagPage