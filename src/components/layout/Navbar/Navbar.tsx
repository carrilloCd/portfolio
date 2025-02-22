import './Navbar.scss'
import { Link } from 'react-router'

export const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
      <header className='navbar__content'>
        <h1 className='navbar__title'>
          <Link to='/'>
            Carlos Carrillo
          </Link>
        </h1>

        <nav className='navbar__menu'>
          <a href="#work" className='navbar__item'>Work</a>
          <Link to="about" className='navbar__item'>About</Link>
          <a href="#contact" className='navbar__item'>Contact</a>
        </nav>

      </header>
    </div>
  )
}