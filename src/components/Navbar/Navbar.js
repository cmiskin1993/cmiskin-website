import React from 'react';
import { NavLink } from 'react-router-dom'
import '../Navbar/Navbar.css'
import logo from '/Users/cnestel-admin/Documents/Carrie/cmiskin-website/src/images/CarrieMiskin_Flower-01.png'

const Navbar = () => {



  return(
    <ul>
        <li><NavLink to="/"><img src={logo} id="logo" alt="logo"/></NavLink> </li>
        <li><NavLink to="/work">Work</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  )
}

export default Navbar