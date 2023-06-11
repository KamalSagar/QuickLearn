import React from 'react'
import Pagination from '../components/Pagination'
import Blogs from '../components/Blogs'

const Articles = () => {
  return (
    <div className='w-screen h-full min-h-screen flex flex-col items-center mt-28'>        
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default Articles