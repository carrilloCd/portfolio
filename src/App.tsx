import { Navbar } from '@components/layout';
import { HeroSection, ProjectsSection } from '@components/sections';

export const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
    </div>
  )
}


