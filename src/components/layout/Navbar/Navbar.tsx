import './Navbar.scss'

export const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
      <header className='navbar__content'>
        <h1 className='navbar__title'>Carlos Carrillo</h1>

        <nav className='navbar__menu'>
          <a href="#" className='navbar__item'>Work</a>
          <a href="#" className='navbar__item'>About</a>
          <a href="#" className='navbar__item'>Contact</a>
        </nav>

      </header>
    </div>
  )
}