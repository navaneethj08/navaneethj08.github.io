import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import './Typewriter.css'

const Typewriter = () => {
  return (
    <div>
        <p className="typewriter">
            I'm into {" "}
      <TypeAnimation className="typing"
        sequence={[
          "frontend development",
          1000,
          "UI/UX designs",
          1000,
          "web designing",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
      />
      </p>
    </div>
  )
}

export default Typewriter
