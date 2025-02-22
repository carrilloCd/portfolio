import './CapabilitiesSection.scss';

const capabilities = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind',
  'Designing',
  'Figma']

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="capabilities-section">
      <h2 className="capabilities-section__title">My Capabilities</h2>

      <div>
        <p className="capabilities-section__description">I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. </p>

        <ul className="capabilities-section__list">
          {capabilities.map((capability) => (
            <li key={capability} className="capabilities-section__tag">{capability}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}