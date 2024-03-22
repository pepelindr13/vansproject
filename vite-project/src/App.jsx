import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Home from './Pages/Home'
import Vans from './Pages/Vans'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='/vans' element={<Vans/>}/>

      </Routes>
    
    </>
  )
}

export default App
