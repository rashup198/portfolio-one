import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-center text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>
              Hi, I'm Priyanshu, nice to meet you. Please take a look around and feel free to contact me if you have any questions.
            </p>
          </div>
          <div>
            <p className='text-xl'>
              I am passionate about building excellent software that improves the lives of those around me. Currently a 3rd-year student at the Vellore Institute of Technology, Chennai, I specialize as a Full Stack Developer. I am actively involved in the HumanoidX Club at my college. A quick learner, I'm always seeking new opportunities to learn and grow in both frontend and backend technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
