import React from 'react';

const experiences = [
  {
    position: 'Implementation Engineer (Intern + Full-Time)',
    company: 'Anphonic.ai',
    location: 'Remote',
    duration: 'October 2024 – Present',
    achievements: [
      'Working closely with clients to understand requirements and successfully deploy Anphonic’s solutions to their systems.',
      'Collaborated with the product and engineering teams to implement and configure product features based on client use-cases.',
      'Handled end-to-end onboarding and implementation, including data mapping, integration testing, and rollout.',
      'Provided technical support and documentation to ensure smooth transition to the support team after implementation.',
      'Played a key role in refining internal tools and workflows, improving onboarding time and customer satisfaction.',
    ],
  },
  {
    position: 'SDE Intern',
    company: 'Healspan',
    location: 'Bangalore',
    duration: 'May 2024 – July 2024',
    achievements: [
      'Improved insurance tracking experience for hospital frontend personnel by processing emails and notifying updates faster.',
      'Developed a software solution to automate the extraction of email attachments based on specific keywords.',
      'Implemented AWS Lambda for automated execution, with scheduling managed by AWS CloudWatch.',
      'Containerized the application using Docker, pushed the image to AWS Elastic Container Registry (ECR), and configured Lambda to use the Docker container for processing.',
      'Enhanced efficiency and reduced costs by automating the extraction and storage of email attachments in AWS S3.',
    ],
  },
  {
    position: 'Full Stack Developer Intern',
    company: 'SAGE',
    location: 'Hyderabad',
    duration: 'August 10, 2023 – December 15, 2023',
    achievements: [
      'Led the development of a groundbreaking MVP application enabling influencers and hotels to create and sell itineraries effortlessly.',
      'Engineered robust RESTful APIs with Express.js, ensuring seamless communication between the frontend and backend.',
      'Implemented a dynamic MongoDB database with Mongoose, optimizing data storage and retrieval.',
      'Designed an intuitive React.js frontend, delivering a user-friendly experience for both influencers and hotel staff.',
      'Developed a secure authentication system using JWT, safeguarding user data and transactions.',
      'Leveraged AWS services for efficient hosting, storage, and deployment, achieving high scalability and reliability.',
    ],
  },
  
];

const Experience = () => {
  return (
    <div name='experience' className='w-full text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-14'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
          <p className='py-6'>Here are some of my past experiences:</p>
        </div>

        <div className='space-y-8'>
          {experiences.map((experience, index) => (
            <div key={index} className='bg-[#1a2238] p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-semibold'>{experience.position}</h3>
              <p className='text-lg font-medium text-gray-400'>{experience.company} - {experience.location}</p>
              <p className='text-sm text-gray-500'>{experience.duration}</p>
              <ul className='list-disc list-inside mt-4 space-y-2'>
                {experience.achievements.map((item, i) => (
                  <li key={i} className='text-gray-300'>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
