import React from 'react'
import { Link 
 } from 'react-router-dom'


const Header = () => {
  return (
    <> 
    <div className="text-2xl text-center font-bold bg-blue-800 text-black flex gap-4 ">
       <div className='cursor-pointer'><Link to="/">Home </Link></div> 
      <div className='cursor-pointer'><Link to="/Our-Story">Our Story </Link></div>
      <div className='cursor-pointer'><Link to="/Contact-Us">Contact Us </Link></div> 
      
    </div>
    </>
  )
}

export default Header
