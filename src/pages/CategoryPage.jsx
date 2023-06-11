import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs'

const CategoryPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div className='flex flex-col justify-center items-center min-h-screen text-white'>
        <div>
            <button
            onClick={() => navigate(-1)}>
                Back
            </button>
            <h2>
                Blogs on <span>{category}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage