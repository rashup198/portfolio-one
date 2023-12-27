import React from 'react';
import JavaScript from "../assets/javascript.png"
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png'
import css from '../assets/css.png'
import GitHub from '../assets/github.png'
import html from '../assets/html.png'
import express from "../assets/express.png"
import node from "../assets/node.png"
import mongo from "../assets/mongo.png"
import aws from "../assets/aws.png"
import postm from "../assets/postman.png"
import firebase from "../assets/firebase.png"





const Skills = () => {
  return (
    <div name= 'skills' className='bg-[#0a192f]'>

        <div className='container bg-[#0a192f] max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300'>

            <div className='mt-14'>
                <p className='text-4xl  font-bold inline border-b-4 border-pink-600'>Experience</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8  '>

                <div  className='shadow-md m-4 shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={JavaScript} className='w-30 mx-auto'></img>
                    <p className='my-4'>JavaScript</p>
                </div>

                <div  className='shadow-md m-4 shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={ReactImg} className='w-30 mx-auto'></img>
                    <p className='my-4'>React.js</p>
                </div>

                <div  className='shadow-md m-4 shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={node} className='w-30 mx-auto'></img>
                    <p className='my-4'>Node.js</p>
                </div>

                <div  className='shadow-md m-4 shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={mongo} className='w-30 mx-auto'></img>
                    <p className='my-4'>MongoDb</p>
                </div>

                <div  className='shadow-md m-4 shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={express} className='w-30 mx-auto mt-[70px]'></img>
                    <p className='my-4'>Express.js</p>
                </div>

                <div  className='shadow-md m-4 shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={postm} className='w-[100vw] h-[20vh] mt-[50px]'></img>
                    <p className=' text-center my-4'>Postman</p>
                </div>

                <div  className='shadow-md shadow-[#040c16] hover:scale-110 duration-200 m-4'>
                    <img src={html} className='w-30 mx-auto'></img>
                    <p className='my-4'>HTML</p>
                </div>

                <div  className='shadow-md m-4 shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={css} className='w-30 mx-auto'></img>
                    <p className='my-4'>CSS</p>
                </div>

                <div  className='shadow-md m-4 shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={Tailwind} className='w-30 mx-auto'></img>
                    <p className='my-4'>Tailwind</p>
                </div>


                <div  className='shadow-md m-4 shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={aws} className='w-30 mx-auto'></img>
                    <p className='my-4'>AWS</p>
                </div>

                <div  className='shadow-md m-4 shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={firebase} className='w-30 mx-auto'></img>
                    <p className='my-4'>Firebase</p>
                </div>

                <div  className='shadow-md m-4 shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={GitHub} className='w-30 mx-auto'></img>
                    <p className='my-4'>GitHub</p>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Skills
