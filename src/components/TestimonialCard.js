import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';


const TestimonialCard = (props) => {
    let review = props.review;
    return (
      <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-[10] mx-auto'>
          <img 
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
          src="https://media.licdn.com/dms/image/D4D03AQE0JMuo39z17A/profile-displayphoto-shrink_800_800/0/1681541680010?e=2147483647&v=beta&t=XUDWBMkJ4KASHULEvBhLkcUXJjIHcj1UZL8SkeTjGy0"/>
          <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute
           top-[-6px] z-[-10] left-[10px]'></div>
        </div>
        
        <div className='text-center mt-7'>
          <p className='tracking-wider font-bold text-3xl text-gray-100 capitalize mb-2'>Kamal Sagar</p>
          <p className='text-violet-300 uppercase text-sm'>{review.heading}</p>
        </div>
  
  
        <div className='text-violet-400 mx-auto mt-5'>
          <FaQuoteLeft/>
        </div>
  
        <div className='text-center mt-4 text-slate-500'>
          {review.text}
        </div>
  
        <div  className='text-violet-400 mx-auto mt-5'>
          <FaQuoteRight/>
        </div>
      </div>
    )
  
}

export default TestimonialCard