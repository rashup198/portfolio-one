import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
        {/* container */}

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

            {/* text */}
            <p className='text-pink-600'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Priyanshu Pandey</h1>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend developer</h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Frontend developer crafting immersive web experiences, optimizing performance, and collaborating to deliver pixel-perfect products. Let's create exceptional digital experiences together! </p>

            <div>
            <Link to="project" smooth={true} duration={500}>
            <button className='group text-white border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200'>View Work 
                <span className='group-hover:rotate-90 duration-200'><HiArrowNarrowRight className='ml-3'></HiArrowNarrowRight></span>
                </button>
            </Link>
                
            </div>

        </div>


    </div>
  )
}

export default Home
