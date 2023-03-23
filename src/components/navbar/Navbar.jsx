import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './navbar.css'

function NavbarComponents() {
  return (
    <ul>
      <li><a href="#search">search</a></li>
      <li><a href="#carousel">galery</a></li>
      <li><a href="#blog">blog</a></li>
    </ul>
  )
}


function Navbar() {
  const [toggle, setToggle] = useState(false)

  return (
    <header id='home'>
      <nav className='nav-wrapper'>
        <h1>Logo</h1>
        <NavbarComponents/>
        <div className='sidebar-button'>
          {toggle 
            ? <button type="button" onClick={() => setToggle(false)}><FaTimes/></button>
            : <button type="button" onClick={() => setToggle(true)}><FaBars/></button>
          }
        </div>
      </nav>
      <div className='sidebar'>
        {toggle && (<NavbarComponents/>)}
      </div>
    </header>
  )
}

export default Navbar
