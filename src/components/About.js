import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full  h-screen bg-[#0a192f] text-gray-300' >

        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1300px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                </div>
                     <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>
                           Hi, I'm Priyanshu, nice to meet you. Please take a look around and feel free to contact me if you have any questions. 
                        </p>
                    </div>

                    <div>
                        <p>
                            I am a 3rd year student at the Vellore Institute of Information Technology, Chennai. I am a Frontend developer. I am also a part of HumanoidX Club of my college. I am a quick learner and I am always looking for new opportunities to learn and grow.
                        </p>
                    </div>


                </div>
            </div>

        </div>
      
    </div>
  )
}

export default About
