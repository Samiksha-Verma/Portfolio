import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import {  NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
   <nav className='bg-black text-white h-20 flex justify-around items-center outline-1'>
    {/* LOGO */}
    <div className='text-2xl'>
      LOGO
    </div>
    {/* MENU BAR AND ACTIVE LINK */}
    <ul className='flex gap-6 text-md'>
      <li> <NavLink to='/About' className={({ isActive }) =>
          isActive ? "text-blue-800 font-bold" : "text-white"
        }>About</NavLink> </li>
            <li> <NavLink to= '/Skills' className={({ isActive }) =>
          isActive ? "text-blue-800 font-bold" : "text-white"
        }>Skills</NavLink> </li>
            <li> <NavLink to= '/Projects' className={({ isActive }) =>
          isActive ? "text-blue-800 font-bold" : "text-white"
        }>Projects</NavLink> </li>
            <li> <NavLink to= '/Experience' className={({ isActive }) =>
          isActive ? "text-blue-800 font-bold" : "text-white"
        }>Experience</NavLink> </li>
            <li> <NavLink to= '/Education' className={({ isActive }) =>
          isActive ? "text-blue-800 font-bold" : "text-white"
        }>Education</NavLink> </li>  
    </ul>
   
   {/* ICON LINK */}
    <div className='flex gap-4 text-3xl'>
      <a
        href="https://www.linkedin.com/in/samiksha-a13a79291/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/Samiksha-Verma"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>     
    </div>
   </nav>
  )
}

export default Navbar
