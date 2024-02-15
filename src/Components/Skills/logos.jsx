import React from 'react'
import './Skills.css'
import html from '../Assets/icons8-html.svg'
import css from '../Assets/icons8-css.svg'
import bootstrap from '../Assets/icons8-bootstrap.svg'
import javascript from '../Assets/icons8-javascript.svg'
import reactjs from '../Assets/icons8-react-native.svg'
import npm from '../Assets/icons8-npm.svg'
import figma from '../Assets/icons8-figma.svg'
import adobexd from '../Assets/icons8-adobe-xd.svg'
import canva from '../Assets/icons8-canva.svg'

const logos = () => {
  return (
    <div>
      <div className="logos">
        <div className="logos-slide">
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={bootstrap} alt="bootstrap" />
            <img src={javascript} alt="javascript" />
            <img src={reactjs} alt="reactjs" />
            <img src={npm} alt="npm" />
            <img src={figma} alt="figma" />
            <img src={adobexd} alt="adobexd" />
            <img src={canva} alt="canva" />

        </div>
        <div className="logos-slide">
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={bootstrap} alt="bootstrap" />
            <img src={javascript} alt="javascript" />
            <img src={reactjs} alt="reactjs" />
            <img src={npm} alt="npm" />
            <img src={figma} alt="figma" />
            <img src={adobexd} alt="adobexd" />
            <img src={canva} alt="canva" />

        </div>
      </div>
    </div>
  );
}

export default logos