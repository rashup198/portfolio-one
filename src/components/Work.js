import React from 'react';
import project1 from "../assets/projects/work1.png";
import project2 from "../assets/projects/work2.png";
import project3 from "../assets/projects/work3.png";
import project4 from "../assets/projects/work4.png";
import project5 from "../assets/projects/work5.png";
import project6 from "../assets/projects/work6.png";
import { HiArrowNarrowRight } from 'react-icons/hi';

const projects = [
    {
        image: project4,
        title: 'Pathsala edTech Platform',
        repoLink: 'https://github.com/rashup198/edTech',
    },
    {
        image: project5,
        title: 'Pg/Hostel Rental Site',
        repoLink: 'https://github.com/rashup198/Renter',
    },
  {
    image: project1,
    title: 'Shopping Cart',
    repoLink: 'https://github.com/rashup198/Shoping-cart',
  },
  {
    image: project2,
    title: 'GitHub Profile Finder',
    repoLink: 'https://github.com/rashup198/GitHub-profile-finder',
  },
  {
    image: project3,
    title: 'Password Generator',
    repoLink: 'https://github.com/rashup198/Password_Genrator',
  },
  
  {
    image: project6,
    title: 'Booking Site',
    repoLink: 'https://pandeybooking.netlify.app/',
  },
];

const Work = () => {
  return (
    <div name='project' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-14'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
          <p className='py-6'>Check out some of my recent Projects</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.image})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              <div className='opacity-0 group-hover:opacity-100 duration-200 group-hover:bg-blue-700 h-full w-full text-center'>
                <span className='text-2xl font-bold text-white tracking-wider text-center'>{project.title}</span>
                <div className='pt-8 text-center'>
                  <a href={project.repoLink} target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>GitHub Repo</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
