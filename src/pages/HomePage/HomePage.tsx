import { Navbar } from '@components/layout';
import { HeroSection, ProjectsSection, AboutHome, ContactSection } from '@components/sections';

export const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutHome />
      <ContactSection />
    </>
  )
}