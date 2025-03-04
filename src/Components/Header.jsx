import React from 'react'
import logo from "../assets/logo.jpg"
import emblem from "../assets/emblem.png"

const Header = () => {
  return (
    <header className='bg-white p-2  flex  justify-center items-center fixed w-full top-0  z-50 '> 
        
            <img src={emblem} alt="national logo" className='w-30 h-25 inline pr-5' />
            <span className='text-3xl font-bold'>ARDHI UNIVERSITY  MWANZA CAMPUS</span>
            <img src={logo} alt="university logo" className='w-30 h-25 p-5'/>
    
    </header>
  )
}

export default Header