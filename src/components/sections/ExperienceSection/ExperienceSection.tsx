import './ExperienceSection.scss'

export const ExperienceSection: React.FC = () => {
  return (
    <section className="experience-section" id='work'>
      <h2 className='experience-section__title'>My Experience</h2>

      <div>
        <div className='experience-section__group-info'>
          <h3 className='experience-section__role'>Freelance Front-end Developer <span className='experience-section__duration'>Feb 2023 – Mar 2025</span></h3>

          <div>
            <p className='experience-section__company'>To-Do Application:</p>
            <p className='experience-section__details'>Developed a responsive and intuitive task management app that allows users to create, edit, and delete tasks seamlessly.</p>

            <p className='experience-section__company'>Notes List App:</p>
            <p className='experience-section__details'>Designed and implemented a clean notes management system, enhancing usability and functionality.</p>

            <p className='experience-section__company'>Quiz Game</p>
            <p className='experience-section__details'>Built interactive quiz games using React, providing engaging and dynamic user experiences.</p>
          </div>
        </div>
      </div>
    </section>
  )
}