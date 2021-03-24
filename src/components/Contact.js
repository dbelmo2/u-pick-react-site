import React from 'react'
import { Button } from './Button';
import './Contact.css';
import emailjs from 'emailjs-com';


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_8i41bav', 'template_xnxh5ew', e.target, 'user_PQ7gyW7ogbb3RUw963d7N')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }


function snedEmail(e) {
  console.log("button worked");
}
export function Contact() {
    return (
        <>
          <form onSubmit={sendEmail}>
            <input
              className='contact__email-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <input
              height="50px"
              className='contact__message-input'
              name='message'
              type='message'
              placeholder='Your message'
            />
            <Button buttonStyle='btn--outline' type='submit'>Submit</Button>
          </form>
        </>
    )
}

