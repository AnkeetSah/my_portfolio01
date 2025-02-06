import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import About from '../pages/About/About';
import Projects from '../pages/projects/Projects';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/about" element={<About/>}></Route>
    </Routes>
  )
}

export default Routers
