import './ContactSection.scss';
import { Button, Form } from '@components/ui';


export const ContactSection: React.FC = () => {
  return (
    <section className='contact' id='contact'>

      <div className="contact__box">

        <div className="contact__info">
          <h2 className='contact__title'>Let's Connect</h2>
          <div className='contact__paragraph'>
            <p >Say hello at <a href="email:carloscarrillo238@gmail.com">carloscarrillo238@gmail.com</a></p>
            <p >For more info, here's my <a href="#">resume</a></p>
          </div>

          <div className="contact__social-networks">
            <Button
              icon={
                <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.316 0.806676V16.992H13.3413V8.98801C13.3413 6.87601 13.7387 4.83068 16.3573 4.83068C18.94 4.83068 18.972 7.24534 18.972 9.12134V16.9933H24V8.11734C24 3.75734 23.0613 0.406677 17.9653 0.406677C15.5187 0.406677 13.8787 1.74934 13.208 3.02001H13.14V0.806676H8.316ZM0.126663 0.806676H5.16V16.992H0.126663V0.806676Z" fill="#D3E97A" />
                </svg>
              }
              url='https://linkedin.com'
              blank
            />
            <Button
              icon={
                <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.0347 0.666687C6.68933 0.666687 0.735992 6.62002 0.735992 13.9654C0.735992 19.84 4.54533 24.8254 9.83066 26.5854C10.496 26.7054 10.736 26.296 10.736 25.944C10.736 25.628 10.7253 24.7907 10.7213 23.6827C7.02133 24.4854 6.23999 21.8987 6.23999 21.8987C5.63733 20.3627 4.76399 19.9534 4.76399 19.9534C3.55733 19.128 4.85599 19.1467 4.85599 19.1467C6.19199 19.24 6.89199 20.5174 6.89199 20.5174C8.07866 22.5494 10.0067 21.9627 10.7613 21.6227C10.8827 20.7627 11.2293 20.176 11.608 19.844C8.65599 19.5094 5.55199 18.368 5.55199 13.2707C5.55199 11.8214 6.07066 10.632 6.91733 9.70402C6.78266 9.36669 6.32266 8.01335 7.04933 6.18402C7.04933 6.18402 8.16533 5.82535 10.7053 7.54535C11.7901 7.25025 12.9091 7.09961 14.0333 7.09735C15.1576 7.09918 16.2766 7.24982 17.3613 7.54535C19.9027 5.82402 21.0173 6.18402 21.0173 6.18402C21.744 8.01335 21.288 9.36669 21.1493 9.70402C22.0027 10.632 22.5147 11.82 22.5147 13.2707C22.5147 18.3814 19.408 19.504 16.4453 19.8334C16.9187 20.244 17.3453 21.0547 17.3453 22.2947C17.3453 24.0734 17.3293 25.508 17.3293 25.944C17.3293 26.3 17.5667 26.7134 18.2453 26.5827C23.528 24.82 27.3333 19.8387 27.3333 13.9654C27.3333 6.62002 21.38 0.666687 14.0347 0.666687Z" fill="#D3E97A" />
                </svg>

              }
              url='https://github.com'
              blank
            />
            <Button
              icon={
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.0402 0.666687H26.3133L16.9799 10.2874L28 23.3334H19.3414L12.5944 15.4252L4.83534 23.3334H0.562249L10.5703 13.0578L0 0.666687H8.88353L15.012 7.92002L22.0402 0.666687ZM20.5221 21.0163H22.8835L7.59036 2.83261H5.00402L20.5221 21.0163Z" fill="#D3E97A" />
                </svg>

              }
              url='https://x.com'
              blank
            />
            <Button
              icon={
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.9987 9.836C14.3635 9.836 12.7953 10.4856 11.6391 11.6418C10.4829 12.798 9.83333 14.3662 9.83333 16.0013C9.83333 17.6365 10.4829 19.2047 11.6391 20.3609C12.7953 21.5171 14.3635 22.1667 15.9987 22.1667C17.6338 22.1667 19.202 21.5171 20.3582 20.3609C21.5144 19.2047 22.164 17.6365 22.164 16.0013C22.164 14.3662 21.5144 12.798 20.3582 11.6418C19.202 10.4856 17.6338 9.836 15.9987 9.836ZM15.9987 20.0053C14.9364 20.0053 13.9176 19.5833 13.1665 18.8322C12.4153 18.0811 11.9933 17.0623 11.9933 16C11.9933 14.9377 12.4153 13.9189 13.1665 13.1678C13.9176 12.4167 14.9364 11.9947 15.9987 11.9947C17.0609 11.9947 18.0797 12.4167 18.8309 13.1678C19.582 13.9189 20.004 14.9377 20.004 16C20.004 17.0623 19.582 18.0811 18.8309 18.8322C18.0797 19.5833 17.0609 20.0053 15.9987 20.0053Z" fill="#D3E97A" />
                  <path d="M22.408 11.0467C23.2018 11.0467 23.8453 10.4031 23.8453 9.60933C23.8453 8.81551 23.2018 8.172 22.408 8.172C21.6142 8.172 20.9707 8.81551 20.9707 9.60933C20.9707 10.4031 21.6142 11.0467 22.408 11.0467Z" fill="#D3E97A" />
                  <path d="M27.3773 8.14799C27.0687 7.35089 26.597 6.62703 25.9924 6.02273C25.3879 5.41843 24.6639 4.94701 23.8667 4.63865C22.9338 4.28846 21.9482 4.09911 20.952 4.07865C19.668 4.02265 19.2613 4.00665 16.0053 4.00665C12.7493 4.00665 12.332 4.00665 11.0587 4.07865C10.0632 4.09806 9.07834 4.28745 8.14667 4.63865C7.34925 4.94665 6.62502 5.41795 6.02045 6.02229C5.41587 6.62663 4.9443 7.35068 4.636 8.14799C4.28574 9.0808 4.09682 10.0664 4.07733 11.0627C4.02 12.3453 4.00267 12.752 4.00267 16.0093C4.00267 19.2653 4.00267 19.68 4.07733 20.956C4.09733 21.9533 4.28533 22.9373 4.636 23.872C4.94517 24.669 5.41719 25.3928 6.02191 25.997C6.62663 26.6013 7.35075 27.0728 8.148 27.3813C9.07791 27.7456 10.0632 27.9485 11.0613 27.9813C12.3453 28.0373 12.752 28.0547 16.008 28.0547C19.264 28.0547 19.6813 28.0547 20.9547 27.9813C21.9508 27.9611 22.9363 27.7722 23.8693 27.4227C24.6663 27.1136 25.3902 26.6417 25.9946 26.0373C26.5991 25.4328 27.0709 24.709 27.38 23.912C27.7307 22.9787 27.9187 21.9947 27.9387 20.9973C27.996 19.7147 28.0133 19.308 28.0133 16.0507C28.0133 12.7933 28.0133 12.38 27.9387 11.104C27.9231 10.0937 27.7332 9.09365 27.3773 8.14799ZM25.7533 20.8573C25.7447 21.6257 25.6045 22.387 25.3387 23.108C25.1384 23.6265 24.8319 24.0973 24.4388 24.4902C24.0456 24.8831 23.5746 25.1894 23.056 25.3893C22.343 25.6539 21.5898 25.7942 20.8293 25.804C19.5627 25.8627 19.2053 25.8773 15.9573 25.8773C12.7067 25.8773 12.3747 25.8773 11.084 25.804C10.3239 25.7947 9.5711 25.6544 8.85867 25.3893C8.33825 25.1906 7.86534 24.8849 7.47052 24.4919C7.0757 24.099 6.76778 23.6275 6.56667 23.108C6.30459 22.3947 6.16442 21.6424 6.152 20.8827C6.09467 19.616 6.08133 19.2587 6.08133 16.0107C6.08133 12.7613 6.08133 12.4293 6.152 11.1373C6.16062 10.3693 6.30087 9.60855 6.56667 8.88799C6.97333 7.83599 7.80667 7.00799 8.85867 6.60532C9.57145 6.34151 10.324 6.20127 11.084 6.19065C12.352 6.13332 12.708 6.11732 15.9573 6.11732C19.2067 6.11732 19.54 6.11732 20.8293 6.19065C21.5899 6.1998 22.3431 6.34008 23.056 6.60532C23.5746 6.80568 24.0455 7.11226 24.4386 7.50536C24.8317 7.89846 25.1383 8.36941 25.3387 8.88799C25.6007 9.60125 25.7409 10.3535 25.7533 11.1133C25.8107 12.3813 25.8253 12.7373 25.8253 15.9867C25.8253 19.2347 25.8253 19.584 25.768 20.8587H25.7533V20.8573Z" fill="#D3E97A" />
                </svg>

              }
              url='https://intagram.com'
              blank
            />
          </div>
        </div>


        <footer>
          <p>&copy; 2025 Carlos Carrillo</p>
        </footer>
      </div>

      <Form />
    </section>
  )
}