import {React, useState} from 'react'
import { AiOutlineMenu , AiOutlineClose} from "react-icons/ai";


const Navbar = () => {
  const [nav,setNav]= useState(false);
  const handleNav = () =>{
    setNav(!nav);
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className=' w-full text-3xl font-bold text-[#03deff]'>REACT.</h1>
        <ul className='flex hidden'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>

        <div onClick={handleNav} className='cursor-pointer'>
            {
            !nav ?<AiOutlineMenu size={24}/> :<AiOutlineClose size={24}/>
            }
        </div>
 
        <div className={nav ? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300]' : 'fixed left-[-100%]'}>
        <h1 className='m-4 w-full text-3xl font-bold text-[#03deff]'>REACT.</h1>
        <ul className=' uppercase p-4'>
            <li className='p-4 border-b border-gray-900'>Home</li>
            <li className='p-4 border-b border-gray-900'>Company</li>
            <li className='p-4 border-b border-gray-900'>Resources</li>
            <li className='p-4 border-b border-gray-900'>About</li>
            <li className='p-4 border-b border-gray-900'>Contact</li>
        </ul>

        </div>
    </div>
  )
}

export default Navbar