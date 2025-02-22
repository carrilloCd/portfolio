import './AboutPage.scss'
import { Navbar } from '@components/layout';
import { ContactSection, ExperienceSection, CapabilitiesSection, MoreAboutSection } from '@components/sections';




export const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <MoreAboutSection />
      <CapabilitiesSection />
      <ExperienceSection />
      <ContactSection />
    </>
  )
}