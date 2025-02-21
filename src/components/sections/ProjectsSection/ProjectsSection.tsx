import './ProjectsSection.scss'
import { ProjectCard } from '@components/ui'


import landingProject from '../../../assets/images/landing-project.png'
import blogSite from '../../../assets/images/blog-site.png'
import eCommerce from '../../../assets/images/e-commerce.png'

export const ProjectsSection: React.FC = () => {
  return (
    <section className='projects' id='work'>
      <header>
        <h2 className='projects__title'>Featured Projects</h2>
        <p className='projects__description'>Here are some of the seleted projects that showcase my passion for front-end development.</p>
      </header>

      <div className='projects__list'>
        <ProjectCard
          tag='Conceptual Work'
          img={landingProject}
          title='Promotional landing page for our favorite show'
          description='Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.'
          year='2023'
          role='Front-end developer'
          demoUrl='#'
          githubUrl='#'
        />

        <ProjectCard
          img={blogSite}
          title='Blog site for World News'
          description='Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.'
          client='World News'
          year='2022'
          role='Front-end developer'
          viewUrl='#'
        />

        <ProjectCard
          img={eCommerce}
          title='E-commerce product page'
          description='Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.'
          tag='Challenge'
          year='2022'
          role='Front-end developer'
          demoUrl='#'
          githubUrl='#'
        />

      </div>


    </section>
  )
}