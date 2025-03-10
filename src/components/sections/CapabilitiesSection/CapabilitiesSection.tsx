import './CapabilitiesSection.scss';

const capabilities = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind',
  'Figma',
  'Typescript', 'SASS']

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="capabilities-section">
      <h2 className="capabilities-section__title">My Capabilities</h2>

      <div>
        <p className="capabilities-section__description">I’m a front-end developer with a strong foundation in modern web technologies. I’m dedicated to creating fluid, responsive, and accessible digital experiences. My key capabilities include: </p>

        <ul className="capabilities-section__list">
          {capabilities.map((capability) => (
            <li key={capability} className="capabilities-section__tag">{capability}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}