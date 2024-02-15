import React from 'react'
import './HeroSection.css'
import { SocialIcon } from 'react-social-icons'
import Typewriter from '../TypewriterEffect/Typewriter';
import { FiDownload } from "react-icons/fi";
import MyPDF from '../Assets/NavaneethJ Resume new.pdf'
import hero_bottom from '../Assets/bottom-wave1.svg'
 
const HeroSection = () => {
  return (
    <section id="Hero">
      <img src={hero_bottom} alt="" className="hero-bottom" />
      <div className="intro">
        <div className="hero-social-icons">
        <SocialIcon url="https://www.instagram.com/_the_scorpionix_08/" target="_blank" style={{ height: 30, width: 30 }}/>
        <SocialIcon url="https://www.linkedin.com/in/navaneethj08/" target="_blank" style={{ height: 30, width: 30 }}/>
        <SocialIcon url="https://github.com/navaneethj08" target="_blank" style={{ height: 30, width: 30 }}/>
        <SocialIcon url="https://t.me/the_scorpionix_08" network="t.me" target="_blank" style={{ height: 30, width: 30 }}/>
        </div>
        <h6 className="hello">Hello,</h6>
        <h1 className="header">I'm <span className="hero-name">Navaneeth</span></h1>
        <Typewriter/>
        <p className="hero-text">The crossover between designing and coding has always been of interest to me,<br></br> 
        with having a wide range of skills that include web designing & front-end development</p>
        <div>
        <a href={MyPDF} download="NavaneethJ Resume.pdf" className="resume-btn" >Resume <FiDownload /></a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection

