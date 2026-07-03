import React, { useState } from 'react'
import Home from './Pages/Home'
import OurStory from './Pages/OurStory'
import Header from './Component/Header'
import ContactUs from './Pages/ContactUs'
import { Routes,Route,
 } from 'react-router-dom'


function App() {
  

  return (
    <>
      <Header/>
      <main>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/Our-Story' element={<OurStory/>}/>
          <Route path='/Contact-Us' element={<ContactUs/>}/>

        </Routes>     
      </main>

    
      
    </>
  )
}

export default App
