import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import Skills from './Pages/Skills/Skills'
import Projects from './Pages/Projects/Projects'
import Experience from './Pages/Experience/Experience'
import About from './Pages/About/About'
import Education from './Pages/Education/Education'
import {  BrowserRouter, Route,  Routes } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
    
      <Navbar/>
       <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/skills' element = {<Skills/>}/>
        <Route path='/projects' element = {<Projects/>}/>
        <Route path='/experience' element = {<Experience/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/education' element = {<Education/>}/>
      </Routes> 

      <Footer/>
      
  </>
  )
}

export default App
