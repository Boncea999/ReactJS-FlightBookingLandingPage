import logo from '../../assets/logo.png'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { FaTiktok, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">

        {/* Logo și Social */}
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} alt="Logo" className="Logo" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <div className="socialIcon flex">
            <BsFacebook className='icon' />
            <AiFillTwitterCircle className='icon' />
            <FaTiktok className='icon' />
            <AiFillYoutube className='icon' />
            <FaPinterest className='icon' />
          </div>

          <button
            className="scrollTop"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑ Back to Top
          </button>
        </div>

        {/* Linkuri - Information */}
        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <ul>
            <li><a href="#home">Manage Booking</a></li>
            <li><a href="#offers">Flight Status</a></li>
            <li><a href="#offers">Check-In</a></li>
            <li><a href="#about">Explore</a></li>
            <li><a href="#home">Contact Us</a></li>
          </ul>
        </div>

        {/* Linkuri - Services */}
        <div className="footerLinks">
          <span className="linkTitle">Services</span>
          <ul>
            <li><a href="#seats">Chauffeur</a></li>
            <li><a href="#about">Our Partners</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#about">Careers</a></li>
            <li><a href="#about">Rules</a></li>
          </ul>
        </div>

        {/* Linkuri - Quick Guide */}
        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <ul>
            <li><a href="#support">FAQs</a></li>
            <li><a href="#about">Features</a></li>
            <li><a href="#support">Baggage</a></li>
            <li><a href="#destinations">Route Map</a></li>
            <li><a href="#destinations">Our Communities</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright separat jos */}
      <div className="copyRight">
        <p>© {new Date().getFullYear()} Travel Agency. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
