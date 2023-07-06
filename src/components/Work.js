import React from 'react'
import project1 from "../assets/projects/work1.png"
import project2 from "../assets/projects/work2.png"
import project3 from "../assets/projects/work3.png"
import project4 from "../assets/projects/work4.png"
import project5 from "../assets/projects/work5.png"
import project6 from "../assets/projects/work6.png"

   


const Work = () => {
  return (
    <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
    
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
            <p className='py-6'>Check out some of my recent Projects</p>
        </div>

        
        <div className='grid sm:grid-col-2 md:flex flex-wrap gap-4'>
            <div style={{backgroundImage: `url(${project1})`}}  className='shadow-lg  shadow-[#040c16] group conatiner rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effect */}
                <div className='opacity-0 group-hover:opacity-100 group-hover:bg-blue-700 duration-200 h-full'>
                    <span className='text-2xl font-bold text-white tracking-wider'>

                        Shoping Cart

                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://shoping-cart21.netlify.app/' target='blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Live link</button></a>
                        <a href='https://github.com/rashup198/Shoping-cart' target='blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>GitHub Repo</button></a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage: `url(${project2})`}}  className='shadow-lg  shadow-[#040c16] group conatiner rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effect */}
                <div className='opacity-0 group-hover:opacity-100 group-hover:bg-blue-700 duration-200  h-full'>
                    <span className='text-2xl font-bold text-white tracking-wider'>

                        GitHub Profile finder

                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://github-profile-finder12.netlify.app/' target='blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Live link</button></a>
                        <a href='https://github.com/rashup198/GitHub-profile-finder' target='blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>GitHub Repo</button></a>
                    </div>
                </div>
            </div>  

            <div style={{backgroundImage: `url(${project3})`}}  className='shadow-lg  shadow-[#040c16] group conatiner rounded-md flex justify-center items-center mx-auto content-div'>

{/* hover effect */}
<div className='opacity-0 group-hover:opacity-100 group-hover:bg-blue-700  duration-200  h-full'>
    <span className='text-2xl font-bold text-white tracking-wider'>

        Password Generator

    </span>
    <div className='pt-8 text-center'>
        <a href='https://passwordgen88.netlify.app/' target='blank'>
        <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Live link</button></a>
        <a href='https://github.com/rashup198/Password_Genrator' target='blank'>
        <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>GitHub Repo</button></a>
    </div>
</div>
</div>

<div style={{backgroundImage: `url(${project4})`}}  className='shadow-lg  shadow-[#040c16] group conatiner rounded-md flex justify-center items-center mx-auto content-div'>

{/* hover effect */}
<div className='opacity-0 group-hover:opacity-100 duration-200  group-hover:bg-blue-700 h-full'>
    <span className='text-2xl font-bold text-white tracking-wider'>

        Microsoft Website Clone

    </span>
    <div className='pt-8 text-center'>
        <a href='https://microsoft-clone-12.netlify.app/' target='blank'>
        <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Live link</button></a>
        <a href='https://github.com/rashup198/microsoft' target='blank'>
        <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>GitHub Repo</button></a>
    </div>
</div>
</div>  
<div style={{backgroundImage: `url(${project5})`}}  className='shadow-lg  shadow-[#040c16] group conatiner rounded-md flex justify-center items-center mx-auto content-div'>

{/* hover effect */}
<div className='opacity-0 group-hover:opacity-100 duration-200  group-hover:bg-blue-700 h-full'>
    <span className='text-2xl font-bold text-white tracking-wider'>

        Rivera Clone
    </span>
    <div className='pt-8 text-center'>
        <a href='https://rivera-fest.netlify.app/' target='blanl'>
        <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Live link</button></a>
        <a href='https://github.com/rashup198/Riviera' target='blank'>
        <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>GitHub Repo</button></a>
    </div>
</div>
</div>
<div style={{backgroundImage: `url(${project6})`}}  className='shadow-lg  shadow-[#040c16] group conatiner rounded-md flex justify-center items-center mx-auto content-div'>

{/* hover effect */}
<div className='opacity-0 group-hover:opacity-100 duration-200  group-hover:bg-blue-700 h-full'>
    <span className='text-2xl font-bold text-white tracking-wider'>

        Booking Site

    </span>
    <div className='pt-8 text-center'>
        <a href='https://github.com/rashup198/booking' target='blank'>
        <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>Live link</button></a>
        <a href='https://pandeybooking.netlify.app/' target='blank'>
        <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>GitHub Repo</button></a>
    </div>
</div>
</div>

        </div>
      </div>
    </div>
    
  )
}

export default Work
