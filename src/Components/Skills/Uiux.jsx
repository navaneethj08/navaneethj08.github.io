import React from 'react'
import './Skills.css'

const uiux = () => {
  return (
    <div  className="skills-content">
    <h3 className="skills-title">UI/UX Designer</h3>

    <div className="skills-box">
        <div className="skills-group">
            <div className="skills-data">
            <p>Figma</p>
            <p> </p>
            </div>
            <div className="progress-line" data-percent="75%">
                <span style={{width: "75%"}}></span>
            </div>
        </div>
        <div className="skills-group">
            <div className="skills-data">
            <p>Adobe XD</p>
            <p> </p>
            </div>
            <div className="progress-line" data-percent="60%">
                <span style={{width: "60%"}}></span>
            </div>
        </div>
        <div className="skills-group">
            <div className="skills-data">
            <p>Canva</p>
            <p> </p>
            </div>
            <div className="progress-line" data-percent="85%">
                <span style={{width: "85%"}}></span>
            </div>
        </div>
        
        
    </div>
</div>

  )
}

export default uiux