import './AboutPage.scss'
import { Navbar } from '@components/layout';
import { ContactSection, ExperienceSection, CapabilitiesSection, About } from '@components/sections';




export const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <About />
      <CapabilitiesSection />
      <ExperienceSection />
      <ContactSection />
    </>
  )
}