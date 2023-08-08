import React, {useState} from 'react'
import Logo from '../assets/logo1.png'
import {FaBars , FaTimes,FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonFill} from 'react-icons/bs'
import {Link} from 'react-scroll'



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
            <li>
            <Link to="home" smooth={true} duration={500}>
          Home
            </Link></li>
            <li>
            <Link to="about" smooth={true} duration={500}>
          About
            </Link></li>
            <li>
            <Link to="skills" smooth={true} duration={500}>
          Skills
            </Link></li>
            <li>
            <Link to="project" smooth={true} duration={500}>
          Projects
            </Link></li>
            <li>
            <Link to="contact" smooth={true} duration={500}>
          Contacts
            </Link></li>
        </ul>
 

      {/* hamburger menu */}

      <div onClick={handleclick} className='md:hidden z-10'>
        {!nav ?<FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>

      {/* mobile menu */}

      <ul className={!nav ? "hidden" :"absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center" }>
            <li  className='py-6 text-4xl'> <Link onClick={handleclick} to="home" smooth={true} duration={500}>
          Home
            </Link></li>

            <li  className='py-6 text-4xl'><Link onClick={handleclick} to="about" smooth={true} duration={500}>
          About
            </Link></li>

            <li className='py-6 text-4xl'> <Link to="skills" smooth={true} duration={500}>
          Skills
            </Link></li>

            <li className='py-6 text-4xl'> <Link to="project" smooth={true} duration={500}>
          Projects
            </Link></li>

            <li className='py-6 text-4xl'> <Link to="contact" smooth={true} duration={500}>
          Contacts
            </Link></li>

      </ul>
  
      {/* social icons */}

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>

        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[3px] duration-300 bg-blue-600'>
              <a className='flex justify-between item-center w-full text-gray-300' href='https://www.linkedin.com/in/priyanshu-pandey-8889r/' target="blank">LinkedIn <FaLinkedinIn size={30}></FaLinkedinIn></a></li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[3px] duration-300 bg-[#333333]'>
              <a className='flex justify-between item-center w-full text-gray-300' href='https://github.com/rashup198'target='blank'>GitHub <FaGithub size={30}></FaGithub></a></li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[3px] duration-300 bg-[#fb0838]'>
              <a className='flex justify-between item-center w-full text-gray-300' href = "mailto:rashup198@gmail.com" target='blank'>Email <HiOutlineMail size={30}></HiOutlineMail></a></li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[3px] duration-300 bg-[#565f69]">
              <a className='flex justify-between item-center w-full text-gray-300' href='https://drive.google.com/file/d/1ceb52YEZT-glKFeF0SR1r6f-_X4UwEIj/view?usp=sharing' target='blank'>Resume <BsFillPersonFill size={30}></BsFillPersonFill></a></li>
            
        </ul>
      </div>

    </div>
  )
}

 export default Navbar
