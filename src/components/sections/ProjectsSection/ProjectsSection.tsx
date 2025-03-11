import './ProjectsSection.scss'
import { ProjectCard } from '@components/ui'


import landingProject from '../../../assets/images/positivus-landing-project.png'
// import blogSite from '../../../assets/images/blog-site.png'
// import eCommerce from '../../../assets/images/e-commerce.png'
// // import landingProject900 from '../../../assets/images/landing-project-900.png'
// import blogSite900 from '../../../assets/images/blogSite900.png'
// import eCommerce900 from '../../../assets/images/eCommerce900.png'

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
          title='Positivus Digital Marketing Agency Website'
          description='This project is a comprehensive website designed to help businesses thrive online. As my first major portfolio project, I served as the front-end developer, responsible for developing a responsive, user-friendly platform using React, Typescript, SASS and React-Router.'
          year='2025'
          role='Front-end developer'
          demoUrl='https://carrillocd.github.io/positivus-landing-page/'
          githubUrl='https://github.com/carrilloCd/positivus-landing-page'
          imgResponsive={landingProject}
        />

        {/* <ProjectCard
          img={blogSite}
          title='Blog site for World News'
          description='Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.'
          client='World News'
          year='2022'
          role='Front-end developer'
          viewUrl='#'
          imgResponsive={blogSite900}
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
          imgResponsive={eCommerce900}
        /> */}

      </div>


    </section>
  )
}