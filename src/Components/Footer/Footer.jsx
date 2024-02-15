import React from 'react'
import './Footer.css'
import logo from '../Assets/N-logo.png'
import { Link } from 'react-scroll'
import { HiArrowCircleRight } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <Link activeClass='none' className="footer-logo" to='Hero' 
            spy={true} smooth={true} offset={-100} duration={500} >
            <h1>{"<"}</h1>
            <img src={logo} alt="logo" />
            <h3>avaneeth</h3>
            <h1>{"/>"}</h1>
            <br />
          </Link>
          <p className="footer-txt">
            Thank you for visiting my portfolio website. Connect with me over
            socials.
          </p>

        </div>

        <div className="footer-mid">
          <div className="quick-links">
            <h3>Quick links</h3>
          </div>
          <div className="quick-menu">
            <Link activeClass='none' to='Hero' spy={true} smooth={true} offset={-100} duration={500} className="footer-links"><HiArrowCircleRight className="mini-icons"/> Home</Link>
            <Link activeClass='none' to='About' spy={true} smooth={true} offset={-100} duration={500} className="footer-links"><HiArrowCircleRight className="mini-icons"/> About</Link>
            <Link activeClass='none' to='Skills' spy={true} smooth={true} offset={-100} duration={500} className="footer-links"><HiArrowCircleRight className="mini-icons"/> Skills</Link>
            {/* <Link activeClass='none' to='Hero' spy={true} smooth={true} offset={-100} duration={500} className="footer-links"><HiArrowCircleRight className="mini-icons"/> Projects</Link> */}
            <Link activeClass='none' to='Contact' spy={true} smooth={true} offset={-100} duration={500} className="footer-links"><HiArrowCircleRight className="mini-icons"/> Contact</Link>
          </div>

        </div>

        <div className="footer-right">
          <div className="more-details">
            <h3>More details</h3>
          </div>
          <div className="contact-info">
            <p className="mob1"><FaPhone className="mini-icons" /> +91 8975408990</p>
            <p className="mob2"><FaPhone className="mini-icons"/> +91 9309055209</p>
            <p className="email-id"><MdEmail className="mini-icons"/> navaneethj2000@gmail.com</p>
            <p className="mob1"><FaLocationDot className="mini-icons"/> Goa, India-403706</p>
        </div>

        </div>
      </div>
      <div className="dev-sec">
        Designed with <FaHeart className="heart" /> by <span className="dev-name">Navaneeth J</span>
      </div>

    </footer>
  );
}

export default Footer








