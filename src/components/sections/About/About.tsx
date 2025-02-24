import { Button } from '@components/ui'
import './About.scss'
import about from '../../../assets/images/about-image.png'
import aboutResponsive from '../../../assets/images/about-image-responsive.png'

export const About: React.FC = () => {
  return (
    <section className='about' id='about'>
      <div className='about__details'>
        <h2 className='about__title'>About Me</h2>

        <div className='about__box-info'>
          <h3 className='about__subtitle'>I am a front-end developer based in Sydney. Has Mechanical Engineering background. </h3>

          <p className='about__description'>I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</p>

          <div className='about__contact-buttons'>
            <Button
              url="#"
              variant='primary'
              text='download resume'
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              }
            />

            <Button
              url="https://www.linkedin.com"
              variant='icon'
              icon={
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.39825 7.79682C6.70735 7.79682 7.76858 6.73558 7.76858 5.42649C7.76858 4.11739 6.70735 3.05615 5.39825 3.05615C4.08915 3.05615 3.02792 4.11739 3.02792 5.42649C3.02792 6.73558 4.08915 7.79682 5.39825 7.79682Z" fill="#D3E97A" />
                  <path d="M10.0068 9.59282V22.7434H14.0898V16.2402C14.0898 14.5242 14.4127 12.8623 16.5403 12.8623C18.6388 12.8623 18.6648 14.8242 18.6648 16.3485V22.7445H22.75V15.5327C22.75 11.9902 21.9873 9.26782 17.8468 9.26782C15.8589 9.26782 14.5264 10.3587 13.9815 11.3912H13.9263V9.59282H10.0068ZM3.35292 9.59282H7.4425V22.7434H3.35292V9.59282Z" fill="#D3E97A" />
                </svg>
              }
            />

            <Button
              url="https://www.github.com"
              variant='icon'
              icon={
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.0282 0.166748C5.06008 0.166748 0.223 5.00383 0.223 10.9719C0.223 15.7451 3.31808 19.7957 7.61242 21.2257C8.153 21.3232 8.348 20.9906 8.348 20.7046C8.348 20.4478 8.33933 19.7675 8.33608 18.8673C5.32983 19.5194 4.695 17.4178 4.695 17.4178C4.20533 16.1698 3.49575 15.8372 3.49575 15.8372C2.51533 15.1666 3.5705 15.1818 3.5705 15.1818C4.656 15.2576 5.22475 16.2954 5.22475 16.2954C6.18892 17.9464 7.75542 17.4698 8.36858 17.1935C8.46717 16.4948 8.74883 16.0181 9.0565 15.7483C6.658 15.4764 4.136 14.5491 4.136 10.4075C4.136 9.22992 4.55742 8.26358 5.24533 7.50958C5.13592 7.2355 4.76217 6.13592 5.35258 4.64958C5.35258 4.64958 6.25933 4.35817 8.32308 5.75567C9.20448 5.51589 10.1137 5.3935 11.0271 5.39167C11.9405 5.39315 12.8498 5.51554 13.7311 5.75567C15.7959 4.35708 16.7016 4.64958 16.7016 4.64958C17.292 6.13592 16.9215 7.2355 16.8088 7.50958C17.5022 8.26358 17.9182 9.22883 17.9182 10.4075C17.9182 14.5599 15.394 15.4721 12.9868 15.7397C13.3714 16.0733 13.7181 16.732 13.7181 17.7395C13.7181 19.1847 13.7051 20.3503 13.7051 20.7046C13.7051 20.9938 13.8979 21.3297 14.4493 21.2235C18.7415 19.7913 21.8333 15.744 21.8333 10.9719C21.8333 5.00383 16.9963 0.166748 11.0282 0.166748Z" fill="#D3E97A" />
                </svg>

              }
            />

          </div>
        </div>
      </div>

      <div className="about__photo">
        <picture>
          <source srcSet={about} media='(min-width: 901px)' />
          <img src={aboutResponsive} alt="Project photo" />
        </picture>
        {/* <img src={about} alt="photo of person" /> */}
      </div>
    </section>
  )
}