import './AboutSection.scss';
import { Button } from '@components/ui';

export const AboutSection: React.FC = () => {
  return (
    <section className='about'>
      <h2 className='about__title'>About Me</h2>

      <div className='about__box-info'>
        <h3 className='about__subtitle'>I am a front-end developer based in Sydney. Has Mechanical Engineering background. </h3>

        <p className='about__description'>I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</p>

        <Button
          text='more about me'
          variant='link'
          url='#'
        />
      </div>
    </section>
  )
}