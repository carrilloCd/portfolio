import { Link } from 'react-router';
import './AboutHome.scss';
import aboutHomeImage from '../../../assets/images/about-home-image.png'


export const AboutHome: React.FC = () => {
  return (
    <section className='about-section'>
      <h2 className='about-section__title'>About Me</h2>

      <div className='about-section__box-info'>
        <h3 className='about-section__subtitle'>I'm Carlos Carrillo, a Venezuelan-born front-end developer currently based in Lima, Peru. </h3>

        <p className='about-section__description'>I'm actively expanding my expertise in React while continuously exploring opportunities to apply my skills and learn new technologies.
          <span>
            With a solid foundation in TypeScript, Git, GitHub, HTML, and CSS, I specialize in building fluid, responsive, and accessible web experiences. My portfolio reflects my passion for creating user-friendly interfaces, and I'm eager to contribute my skills to innovative projects.
          </span> </p>

        <Link to="about" className='button button--link'>More About Me</Link>
      </div>

      <div className='about-section__box-image'>
        <img src={aboutHomeImage} alt='Developer' className='about-section__image' />
      </div>
    </section>
  )
}