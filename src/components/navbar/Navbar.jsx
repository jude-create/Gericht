import React, { useState } from 'react';
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import logo from '../../assets/gericht.png';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='gericht__navbar'>
      
        <div className='gericht__navbar-logo'>
          <img src={logo} alt='logo' />
        </div>
      <ul className='gericht__navbar-links'>
        <li className='p__opensans' ><a href="#home">Home</a></li>
          <li className='p__opensans' ><a href="#pages">Pages</a></li>
          <li className='p__opensans' ><a href="#contact">Contact</a></li>
          <li className='p__opensans' ><a href="#blog">Blog</a></li>
          <li className='p__opensans'><a href="#landing">Landing</a></li>
      </ul>
     
      <div className='gericht__navbar-sign'>
        <a href='#login' className='p__opensans'>Log In / Register</a>
      <div />
      <a href='/' className='p__opensans'>Book Table</a>
    
 
      </div>
      <div className="gericht__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="gericht__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="gericht__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
