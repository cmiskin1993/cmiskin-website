import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Home from './components/static/Home'
import Work from './components/Work/Work'
import About from './components/About/About'
import Contact from './components/Contact/Contact';

function App() {


  return (
          <Router>
          <Navbar />
            <Routes>
              <Route path="/" element ={<Home />} />
              <Route path='/work' element ={<Work />} />
              <Route path='/about' element ={<About />} />
              <Route path='/contact' element ={ <Contact />} />
            </Routes>
          </Router>

  );
}

export default App;
