import { Navbar } from '@components/layout';
import { HeroSection, ProjectsSection, AboutSection, ContactSection } from '@components/sections';

export const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}