import { Link } from 'react-router';
import './AboutHome.scss';
import aboutHomeImage from '../../../assets/images/about-home-image.png'


export const AboutHome: React.FC = () => {
  return (
    <section className='about-section'>
      <h2 className='about-section__title'>About Me</h2>

      <div className='about-section__box-info'>
        <h3 className='about-section__subtitle'>I am a front-end developer based in Sydney. Has Mechanical Engineering background. </h3>

        <p className='about-section__description'>I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing.
          <span>
            Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
          </span> </p>

        <Link to="about" className='button button--link'>More About Me</Link>
      </div>

      <div className='about-section__box-image'>
        <img src={aboutHomeImage} alt='Developer' className='about-section__image' />
      </div>
    </section>
  )
}