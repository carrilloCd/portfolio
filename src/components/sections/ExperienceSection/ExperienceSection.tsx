import './ExperienceSection.scss'

export const ExperienceSection: React.FC = () => {
  return (
    <section className="experience-section" id='work'>
      <h2 className='experience-section__title'>My Experience</h2>

      <div>
        <div className='experience-section__group-info'>
          <h3 className='experience-section__position'>Freelance Developer <span className='experience__duration'>Nov 2023 - Present</span></h3>
          <p className='experience-section__details'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>

        <div className='experience-section__group-info'>
          <h3 className='experience-section__position'>Front-End Intern <span className='experience__duration'>Sep 2023 — Nov 2023</span></h3>
          <p className='experience-section__company'>Roos Tech</p>

          <p className='experience-section__details'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </section>
  )
}