import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "font-awesome/css/font-awesome.min.css"
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Academics from './Pages/Academics'
import Admission from './Pages/Admission'
import OfficesAndDirectories from './Pages/OfficesAndDirectories'
import ResearchAndInnovation from './Pages/ResearchAndInnovation'
import Footer from './Components/Footer'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <div className='flex-grow'>
          <switch>
          <Header/>
          <Navbar/>
      
          <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="About Us" element={<AboutUs/>}/>
        <Route path="Academics" element={<Academics/>}/>
        <Route path="Admission" element={<Admission/>}/>
        <Route path="Offices and Directories" element={<OfficesAndDirectories/>}/>
        <Route path="Research and Innovations" element={<ResearchAndInnovation/>}/>
      </Routes>
          </switch>

        </div>
        <Footer/>
      </div>
     

     
     
    </Router>
  )
}

export default App