import React, {useState} from 'react'
import Logo from '../assets/logo1.png'
import {FaBars , FaTimes,FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
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

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>

        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[3px] duration-300 bg-blue-600'>
              <a className='flex justify-between item-center w-full text-gray-300' href='/'>LinkedIn <FaLinkedinIn size={30}></FaLinkedinIn></a></li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[3px] duration-300 bg-[#333333]'>
              <a className='flex justify-between item-center w-full text-gray-300' href='/'>GitHub <FaGithub size={30}></FaGithub></a></li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[3px] duration-300 bg-[#fb0838]'>
              <a className='flex justify-between item-center w-full text-gray-300' href='/'>Email <HiOutlineMail size={30}></HiOutlineMail></a></li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[3px] duration-300 bg-[#565f69]">
              <a className='flex justify-between item-center w-full text-gray-300' href='/'>Resume <BsFillPersonFill size={30}></BsFillPersonFill></a></li>
            
        </ul>
      </div>

    </div>
  )
}

 export default Navbar
