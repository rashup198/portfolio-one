import React from 'react';
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/work5.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/work6.png";
import project5 from "../assets/projects/project2.png";
import project6 from "../assets/projects/work2.png";


const projects = [
  {
    image: project1,
    title: 'StreamLine ',
    repoLink: 'https://github.com/rashup198/Yt-manager',
    liveLink: 'https://streamline-yt.netlify.app/',
  },
  {
    image: project2,
    title: 'Pg/Hostel Rental Site',
    repoLink: 'https://github.com/rashup198/Renter',
    liveLink: 'https://github.com/rashup198/Renter',
  },
  
  {
    image: project3,
    title: 'Employee management system',
    repoLink: 'https://github.com/rashup198/Employee-management-system',
    liveLink: 'https://passwordgenerator.com',
  },
  {
    image: project4,
    title: 'Booking Site',
    repoLink: 'https://github.com/rashup198/plan_with_Priyanshu',
    liveLink: 'https://pandeybooking.netlify.app/',
  },
  {
    image:project5,
    title :'Freelance Work',
    liveLink:'https://acquisitionfreedom.com/'
  },
  {
    image: project6,
    title: 'GitHub Profile Finder',
    repoLink: 'https://github.com/rashup198/GitHub-profile-finder',
    liveLink: 'https://github-profile-finder12.netlify.app/',
  },
];

const Work = () => {
  return (
    <div name='project' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-14'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
          <p className='py-6'>Check out some of my recent works</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.image})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-lg overflow-hidden mx-auto content-div object-contain'>
              <div className='opacity-0 group-hover:opacity-100 duration-300 ease-in-out transform group-hover:scale-105 bg-gradient-to-t from-[#0a192f] to-transparent h-full w-full text-center flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider mb-4'>{project.title}</span>
                <div className='flex flex-col gap-4'>
                  <a href={project.repoLink} target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out'>
                      GitHub Repo
                    </button>
                  </a>
                  {project.liveLink && (
                    <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
                      <button className='text-center rounded-lg px-4 py-3 bg-green-500 text-white font-bold text-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out'>
                        Live Demo
                      </button>
                    </a>
                  )}
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
