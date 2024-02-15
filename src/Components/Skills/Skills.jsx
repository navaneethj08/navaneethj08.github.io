import React from 'react'
import './Skills.css'
import Frontend from  './Frontend'
import Uiux from './Uiux'
import Logos from './logos'
import skills_img from '../Assets/skills illustration.png'

const Skills = () => {
  return (
    <section id="Skills">
      <h1 className="skills-header">My Skills</h1>
      <p className="skills-subheader">I am a skilled and passionate web developer with experience in creating visually 
        appealing and user-friendly websites. I have a strong understanding of 
        design and a keen eye for detail. I am proficient in 
        HTML, CSS, JavaScript, ReactJS as well as design software 
        such as Figma, Adobe XD, etc.
      </p>
      <div className="skills-container">
        <Frontend />
        <Uiux />
      </div>
      <Logos />
      <h2 className="sub-header">What I do</h2>
      
      <div className="sub-skills">
        <div className="designer">
          designer
          <p className="designer-txt">Design intuitive interfaces. Create engaging user experiences. 
          Optimize visual aesthetics.</p>
        </div>
        <img src={skills_img} className="skills-img" alt=""/>
        <div className="developer">
        {"<"}developer{">"}
          <p className="developer-txt">Integrate both design and programming to create user-friendly 
          interfaces for websites & web apps.</p>
        </div>
      </div>
      
    </section>
  )
}

export default Skills
