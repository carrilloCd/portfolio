import './ProjectCard.scss';
import { Button } from '@components/ui';

interface ProjectCardProps {
  tag?: string;
  img: string;
  title: string;
  description: string;
  year: string;
  role: string;
  demoUrl?: string;
  githubUrl?: string;
  viewUrl?: string;
  client?: string;
  imgResponsive?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  tag,
  img,
  title,
  description,
  client,
  role,
  year,
  demoUrl,
  githubUrl,
  viewUrl,
  imgResponsive
}) => {
  return (
    <article className='project'>
      <div className='project__image-container'>
        {tag && (<p className='project__tag'>{tag}</p>)}

        <picture>
          <source srcSet={img} media='(min-width: 901px)' />
          <img className='project__image' src={imgResponsive} alt="Project photo" />
        </picture>
      </div>

      <div className='project__box-info'>
        <h3 className='project__title'>{title}</h3>

        <p className='project__description'>{description}</p>

        <table className='project__table'>
          <thead>
            <tr>
              <th colSpan={2}>Project Info</th>
            </tr>
          </thead>

          <tbody>
            {client && (
              <tr>
                <td>Client</td>
                <td>{client}</td>
              </tr>
            )}

            <tr>
              <td>Year</td>
              <td>{year}</td>
            </tr>
            <tr>
              <td>Role</td>
              <td>{role}</td>
            </tr>
          </tbody>
        </table>

        <div className='project__buttons'>
          {demoUrl &&
            <Button
              text='Live Demo'
              icon={
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.9897 14.2176L12.3036 3.90369V11.3891L14.3033 11.3891L14.3033 0.489781L3.40391 0.489781L3.40391 2.48948L10.8893 2.48948L0.575487 12.8033L1.9897 14.2176Z" fill="#D3E97A" />
                </svg>
              }
              url={demoUrl}
              variant='link'
              blank
            />
          }

          {githubUrl &&
            <Button
              text='See on Github'
              icon={
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.0282 0.166748C5.06011 0.166748 0.223022 5.00383 0.223022 10.9719C0.223022 15.7451 3.31811 19.7957 7.61244 21.2257C8.15302 21.3232 8.34802 20.9906 8.34802 20.7046C8.34802 20.4478 8.33936 19.7675 8.33611 18.8673C5.32986 19.5194 4.69502 17.4178 4.69502 17.4178C4.20536 16.1698 3.49577 15.8372 3.49577 15.8372C2.51536 15.1666 3.57052 15.1818 3.57052 15.1818C4.65602 15.2576 5.22477 16.2954 5.22477 16.2954C6.18894 17.9464 7.75544 17.4698 8.36861 17.1935C8.46719 16.4948 8.74886 16.0181 9.05652 15.7483C6.65802 15.4764 4.13602 14.5491 4.13602 10.4075C4.13602 9.22992 4.55744 8.26358 5.24536 7.50958C5.13594 7.2355 4.76219 6.13592 5.35261 4.64958C5.35261 4.64958 6.25936 4.35817 8.32311 5.75567C9.2045 5.51589 10.1137 5.3935 11.0271 5.39167C11.9406 5.39315 12.8498 5.51554 13.7311 5.75567C15.7959 4.35708 16.7016 4.64958 16.7016 4.64958C17.292 6.13592 16.9215 7.2355 16.8089 7.50958C17.5022 8.26358 17.9182 9.22883 17.9182 10.4075C17.9182 14.5599 15.394 15.4721 12.9869 15.7397C13.3714 16.0733 13.7181 16.732 13.7181 17.7395C13.7181 19.1847 13.7051 20.3503 13.7051 20.7046C13.7051 20.9938 13.8979 21.3297 14.4494 21.2235C18.7415 19.7913 21.8334 15.744 21.8334 10.9719C21.8334 5.00383 16.9963 0.166748 11.0282 0.166748Z" fill="#D3E97A" />
                </svg>
              }
              url={githubUrl}
              variant='link'
              blank
            />
          }

          {viewUrl &&
            <Button
              text='View Project'
              icon={
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.9897 14.2176L12.3036 3.90369V11.3891L14.3033 11.3891L14.3033 0.489781L3.40391 0.489781L3.40391 2.48948L10.8893 2.48948L0.575487 12.8033L1.9897 14.2176Z" fill="#D3E97A" />
                </svg>
              }
              url={viewUrl}
              variant='link'
              blank
            />
          }
        </div>
      </div>
    </article>
  )
}