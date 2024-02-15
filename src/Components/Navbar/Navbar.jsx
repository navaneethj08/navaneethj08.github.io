import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import logo from '../Assets/N-logo.png'
import { IoMenu } from "react-icons/io5"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <Link activeClass='none' className="nav-logo" to='Hero' 
        spy={true} smooth={true} offset={-100} duration={500}>
          <h1>{"<"}</h1>
          <img src={logo} alt="logo" />
          <h3>avaneeth</h3>
          <h1>{"/>"}</h1>
        </Link>
        <div className="nav-menu">
          <Link activeClass='active' to='Hero' spy={true} smooth={true} offset={-100} duration={500} className="nav-links">Home</Link>
          <Link activeClass='active' to='About' spy={true} smooth={true} offset={-100} duration={500} className="nav-links">About</Link>
          <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-40} duration={500} className="nav-links">Skills</Link>
          {/* <Link activeClass='active' to='Hero' spy={true} smooth={true} offset={-100} duration={500} className="nav-links">Projects</Link> */}
          <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-50} duration={500} className="nav-links">Contact</Link>
        </div>

        <IoMenu alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMobMenu" style={{display: showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='Hero' spy={true} smooth={true} offset={-100} duration={500} className="navMob-links" onClick={()=>setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='About' spy={true} smooth={true} offset={-100} duration={500} className="navMob-links" onClick={()=>setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-40} duration={500} className="navMob-links" onClick={()=>setShowMenu(false)}>Skills</Link>
          {/* <Link activeClass='active' to='Hero' spy={true} smooth={true} offset={-100} duration={500} className="navMob-links" onClick={()=>setShowMenu(false)}>Projects</Link> */}
          <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-50} duration={500} className="navMob-links" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>

      </nav>
    </div>
  );
}

export default Navbar

