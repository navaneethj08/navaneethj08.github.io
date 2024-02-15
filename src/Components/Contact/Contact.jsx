import React, {useRef} from 'react'
import './Contact.css'
import { MdOutlineSupportAgent } from "react-icons/md";
import { SocialIcon } from 'react-social-icons'
import { RiMailSendLine } from "react-icons/ri";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8m1cylt', 'template_a7xlznn', form.current, {
        publicKey: 'qNVdk2_82q7IO2xrW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent successfully');
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Failed! couldn't send Email");
        },

      );
  };
  return (
    <section id="Contact">
        <h1 className="contact-header">Contact Me</h1>
        <h2 className="cont-subheader"><MdOutlineSupportAgent/> Get in touch with me</h2>
        <div className="socials">
        <SocialIcon url="https://www.instagram.com/_the_scorpionix_08/" target="_blank" style={{ height: 50, width: 50 }}/>
        <SocialIcon url="https://www.linkedin.com/in/navaneethj08/" target="_blank" style={{ height: 50, width: 50 }}/>
        <SocialIcon url="https://github.com/navaneethj08" target="_blank" style={{ height: 50, width: 50 }}/>
        <SocialIcon url="https://t.me/the_scorpionix_08" network="t.me" target="_blank" style={{ height: 50, width: 50 }}/>
        </div>
        <form className="contactform" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='from_name' />
            <input type="email" className="email" placeholder='Your Email' name='from_email' />
            <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitbtn"><RiMailSendLine /> Send</button>
        </form>

      
    </section>
  )
}

export default Contact

