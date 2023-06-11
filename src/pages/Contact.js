import React from 'react'
import "../components/AniButton.css"
import {AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    
        <div className="flex flex-col items-center bg-slate-800 min-h-screen">
            <div className="w-7/12">
                <h1 className="text-5xl text-blue-400 pt-5">Contact me</h1>
                <h3 className="text-2xl text-slate-400 pt-5">
                    Questions, thoughts, or just want to say hello?</h3>
            
                <div className="mt-[25px] flex justify-center items-center">
                    <form className="form" action="">
                        <div className="w-full">
                            <input type="text" 
                            className="w-full h-10 px-5 text-xl rounded shadow-md shadow-sky-300 font-bold border-none mt-6"
                            name="name"
                            placeholder="Enter your name"/>
                            

                            <input type="email" 
                            className="w-full h-10 px-5 text-xl rounded shadow-md shadow-sky-300 font-bold border-none mt-6"
                            name="email"
                            placeholder="Enter your email address"/>
                            
                            <input type="text"
                            className="w-full h-10 px-5 text-xl rounded shadow-md shadow-sky-300 font-bold border-none mt-6"
                            name="subject"
                            placeholder="Enter your subject"/>
                            
                            <textarea name="message" id="" 
                            cols="30" rows="10" className="w-full h-56 px-5 pt-4 text-xl rounded shadow-md shadow-sky-300 font-bold border-none mt-6"
                            placeholder="Enter your message"></textarea>

                        
                        </div>

                        <div className='flex justify-between'>
                            <button type="submit" className="btn my-5" id="submit-btn">
                                Send Message  
                            </button>

                            <div className='flex text-5xl gap-x-2 py-5'>
                                <div className='text-red-500'>
                                    <NavLink to={"https://www.instagram.com/kamal._.sagar/"} target='#'>
                                        <AiOutlineInstagram/>
                                    </NavLink>
                                </div>

                                <div className='text-blue-700'>
                                    <NavLink to={"https://www.linkedin.com/in/kamal-sagar-727472188/"} target='#'>
                                        <AiFillLinkedin/>
                                    </NavLink>
                                </div>

                
                            </div>
                        </div>
                            
                        
                    </form>
                </div>
            </div>
        </div>
    
  )
}

export default Contact