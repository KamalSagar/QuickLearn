import React from 'react'
import Testimonial from '../components/Testimonial'
import reviews from '../data'

const About = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-600 mt-10">
     
      <div className="text-center">
        
        <h1 className="text-4xl font-bold">About Me</h1>
        <div className="bg-violet-400 h-1 w-1/12 mt-1 mx-auto"></div>
        
        <Testimonial reviews={reviews}/>

      </div>
    </div>
  )
}

export default About