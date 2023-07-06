import React, {useState} from 'react'
import Logo from '../assets/logo1.png'
import {FaBars , FaTimes,FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {HioutlineMail} from 'react-icons/hi'
import {BsFillPersonFill} from 'react-icons/bs'



const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleclick =()=>setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      
      <div>
            <img src={Logo} alt='logo img'width={"150px"} ></img>
      </div>

     {/* menu */}
        <ul className='hidden md:flex gap-7'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contacts</li>
        </ul>
 

      {/* hamburger menu */}

      <div onClick={handleclick} className='md:hidden z-10'>
        {!nav ?<FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>

      {/* mobile menu */}

      <ul className={!nav ? "hidden" :"absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center" }>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Contacts</li>
      </ul>
  
      {/* social icons */}

      <div className='flex fixed flex-col top-[35%] left-0'>

        <ul>
            <li><a href='/'>LinkedIn <FaLinkedinIn></FaLinkedinIn></a></li>
            <li><a href='/'>LinkedIn</a></li>
        </ul>
      </div>

    </div>
  )
}

 export default Navbar
