import React from 'react'
import './Skills.css'

const Frontend = () => {
  return (
    <div  className="skills-content">
        <h3 className="skills-title">Frontend Developer</h3>

        <div className="skills-box">
            <div className="skills-group">
                <div className="skills-data">
                <p>HTML</p>
                <p> </p>
                </div>
                <div className="progress-line" data-percent="90%">
                    <span style={{width: "90%"}}></span>
                </div>
            </div>
            <div className="skills-group">
                <div className="skills-data">
                <p>CSS</p>
                <p> </p>
                </div>
                <div className="progress-line" data-percent="80%">
                    <span style={{width: "80%"}}></span>
                </div>
            </div>
            <div className="skills-group">
                <div className="skills-data">
                <p>JavaScript</p>
                <p> </p>
                </div>
                <div className="progress-line" data-percent="60%">
                    <span style={{width: "60%"}}></span>
                </div>
            </div>
            <div className="skills-group">
                <div className="skills-data">
                <p>ReactJs</p>
                <p> </p>
                </div>
                <div className="progress-line" data-percent="75%">
                    <span style={{width: "75%"}}></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend