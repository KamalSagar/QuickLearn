import React from 'react'
import homeImage from '../assets/home.jpg'
import Typewriter from "typewriter-effect"
import { Link } from 'react-router-dom'
import "../components/AniButton.css"


const Home = ({isLoggedIn}) => {

  return (
    <div className='flex h-screen justify-center items-center text-white text-3xl'>
      <div className='relative'>
        <img src={homeImage}
          className='h-screen w-screen opacity-30'
        />
      </div>

      <div className='absolute top-40 right-80 w-80'>  
         <h1 className="flex flex-col items-start gap-y-4 text-3xl font-bold md:text-4xl xl:text-6xl aos-init aos-animate">
         <span>Learn</span>
         <span className='text-blue-400'>
          <Typewriter
                options={{
                  strings: ['Development', 'Business','Design','Lifestyle'],
                  autoStart: true,
                  loop: true,
                }}
              />
         </span>
         </h1>

         <p className='mt-10 font-bold text-yellow-500 w-[120%]'>
          We help you to upgrade your skills to the next level and you became industry ready after completion of our courses.
         </p>
        
        <Link to='/courses'>
          <button className='expbtn'>
            Explore Now
          </button>
        </Link>       
      </div>

      <div className='absolute w-6/12 h-20 flex gap-x-4 justify-center items-center p-5 bottom-40 left-10'>

       <Link to='/articles'>
          <div className=' bg-white text-red-600 text-4xl font-bold bg-opacity-40 py-5 px-10 w-[250px] min-w-full text-center'>
          Read</div>
       </Link>

       <Link to='/courses'> 
          <div className='bg-white text-blue-800 text-4xl font-bold bg-opacity-40 py-5 px-10 w-[250px] min-w-full text-center'>Watch</div>
       </Link>

      </div>
    </div>
  )
}

export default Home
