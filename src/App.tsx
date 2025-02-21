import { Navbar } from '@components/layout';
import { HeroSection, ProjectsSection, AboutSection, ContactSection } from '@components/sections';

export const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}


