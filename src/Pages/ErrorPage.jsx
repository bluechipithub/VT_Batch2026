import React from 'react'
import { Link 
 } from 'react-router-dom'
import Img4 from "../assets/Images/Image4.png";
const ErrorPage = () => {
  return (
    <div>

    <div>
    <img className="w-150 h-100 rounded-4xl ml-110 " src={Img4} alt=""/>
    </div>

    <div>
<button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition ml-170">
  <Link to="/">!Back To Home</Link>
    </button>
  </div>
    

    </div>
  )
}

export default ErrorPage