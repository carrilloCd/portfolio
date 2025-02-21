import './Form.scss'
import { Button } from '@components/ui';

export const Form: React.FC = () => {
  return (
    <form className='form' autoComplete='off'>
      <div className='form__group'>
        <input id='name' type="text" className='form__input' required placeholder='Name' />
        <label htmlFor='name' className='form__label'>
          Name
        </label>
      </div>

      <div className='form__field'>
        <input id='email' type="email" className='form__input' required placeholder='Email' />
        <label htmlFor='email' className='form__label'>
          Email
        </label>
      </div>

      <div className='form__field'>
        <input id='subject' type="text" className='form__input' required placeholder='Subject' />
        <label className='form__label'>
          Subject
        </label>
      </div>

      <div className='form__field'>
        <textarea className='form__text-area' id='message' placeholder='Message'></textarea>
        <label className='form__label' htmlFor='message'>
          Message
        </label>
      </div>

      <Button
        text='Submit'
        variant='secondary'
      />
    </form>
  )
}