import React from 'react'
import { Link 
 } from 'react-router-dom'
 import Img1 from "../assets/Images/Image1.jpg"
import { PiSignInBold } from "react-icons/pi";
import { RiContactsBookLine } from "react-icons/ri";

const Header = () => {
  return (
    <> 
   <div className="bg-sky-900 text-white h-20 px-8 flex items-center justify-between">

  {/* Logo */}
  <img className="w-40 h-16 object-contain" src={Img1} alt="Logo" />

  {/* Navigation */}
  <div className="flex items-center gap-8 text-lg">
    <Link to="/" className="hover:text-yellow-300">
      Home
    </Link>

    <Link to="/Our-Story" className="hover:text-yellow-300">
      Our Story
    </Link>

    <Link to="/Contact-Us" className="hover:text-yellow-300">
      Contact Us
    </Link>
  </div>

  {/* Buttons */}
  <div className="flex items-center gap-4">
    <button className="flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg transition">
      <RiContactsBookLine size={20} />
      <span>Sign Up</span>
    </button>

    <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
      <PiSignInBold size={20} />
      <span>Log In</span>
    </button>
  </div>

</div>
    </>
  )
}

export default Header
