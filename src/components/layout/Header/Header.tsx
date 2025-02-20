import './Header.scss'

export const Header: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Carlos Carrillo</h1>

        <nav>
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

      </header>
    </div>
  )
}

export default Header