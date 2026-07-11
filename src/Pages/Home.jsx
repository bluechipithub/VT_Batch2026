import React from 'react'

import Img2 from "../assets/Images/Image2.jpg"
const Home = () => {
  return (
    <div className='mt-30'>
      <div className='flex '> 
        <div>
      <p className='text-6xl  mt-28 mr-30 ml-20'>THE BEST WAY TO START</p>
      <p className='text-6xl ml-25 '>YOUR MORNING WITH</p>
      <p className='text-6xl ml-47 '>CUP OF COFFEE</p>
        </div>
      <img className="w-150 h-100 rounded-4xl " src={Img2} alt=""/>
      </div>
    </div>
  )
}

export default Home
