import './Navbar.scss'
import { Link } from 'react-router'

export const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link to='/'>
          Carlos Carrillo
        </Link>
      </div>

      <ul className='navbar__menu'>
        <li><a href="#work" className='navbar__item'>Work</a></li>
        <li><Link to="about" className='navbar__item'>About</Link></li>
        <li><a href="#contact" className='navbar__item'>Contact</a></li>
      </ul>
      <div className='navbar__bars'></div>
    </nav>
  )
}