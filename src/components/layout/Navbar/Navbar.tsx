import { useState } from 'react';
import './Navbar.scss'
import { Link, useLocation } from 'react-router'

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link to='/'>
          Carlos Carrillo
        </Link>
      </div>

      <ul className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}>
        <li onClick={toggleMenu}><a href="#work" className='navbar__item'>Work</a></li>
        <li onClick={toggleMenu}>
          <Link to="about" onClick={(e) => { if (location.pathname === '/about') e.preventDefault() }} className='navbar__item'>
            About
          </Link></li>
        <li onClick={toggleMenu}><a href="#contact" className='navbar__item'>Contact</a></li>
      </ul>
      <div className='navbar__bars' onClick={toggleMenu}></div>
    </nav>
  )
}