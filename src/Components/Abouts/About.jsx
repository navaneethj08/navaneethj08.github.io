import React from 'react'
import './About.css'
import abt_img from '../Assets/NJimg.png'
import blob_img from '../Assets/blob-haikei.svg'
import { GrSend } from "react-icons/gr";
const About = () => {
  return (
    <section id="About">
      <h1 className="abt-header">About Me</h1>

      <div className="abt-info">
        <img src={blob_img} alt="" className="blob-img" />
        <img src={abt_img} alt="my pic" className="abt-img" />
        

        <div className="abt-text">
          <p className="abt-desc">
            Heya ! I'm Navaneeth Jayachander, a frontend focused web developer
            and designer from Goa, India. I have done my B.E in Electronics and
            Telecommunication engineering. I am an active learner, always
            looking for new challenges and opportunities to grow as a developer.
            I create visually appealing, responsive and user-friendly interfaces
            to optimize website performance and enhance user experiences.
          </p>
          <button className="contact-btn" onClick={() => {
            document.getElementById("Contact").scrollIntoView({behavior: 'smooth'});
          }}>Contact me <GrSend /></button>
        </div>
      </div>
    </section>
  );
}

export default About




// <h1 className="abt-header">About Me</h1>

// <div className="abt-info">
// <img src={abt_img} alt="my_photo" className="abt-img" />
//   <p className="abt-text">
//     
// </div>
// <img src={test_img} alt="my_photo" className="abt-img blob" />