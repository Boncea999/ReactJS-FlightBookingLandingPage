import logo from '../../assets/logo.png'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { FaTiktok, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer bg-gray-100 pt-10">
      <div className="sectionContainer container grid grid-cols-1 md:grid-cols-4 gap-8 px-6">

        {/* Logo și Social */}
        <div className="gridOne space-y-4">
          <div className="logoDiv">
            <img src={logo} alt="Logo" className="Logo w-28" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur.</p>

          <div className="socialIcon flex gap-4">
            <a href="https://www.facebook.com/Skyscanner" target="_blank" rel="noopener noreferrer">
              <BsFacebook className="icon text-2xl hover:text-blue-600 transition-transform duration-300 hover:scale-125" />
            </a>
            <a href="https://twitter.com/KAYAK" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterCircle className="icon text-2xl hover:text-sky-500 transition-transform duration-300 hover:scale-125" />
            </a>
            <a href="https://www.tiktok.com/@expedia" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="icon text-2xl hover:text-black transition-transform duration-300 hover:scale-125" />
            </a>
            <a href="https://www.youtube.com/c/Cheapflights" target="_blank" rel="noopener noreferrer">
              <AiFillYoutube className="icon text-2xl hover:text-red-600 transition-transform duration-300 hover:scale-125" />
            </a>
            <a href="https://www.pinterest.com/skyscanner/" target="_blank" rel="noopener noreferrer">
              <FaPinterest className="icon text-2xl hover:text-red-500 transition-transform duration-300 hover:scale-125" />
            </a>
          </div>

          <button
            className="scrollTop mt-4 px-3 py-1 border border-gray-400 rounded hover:bg-gray-200 transition duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑ Back to Top
          </button>
        </div>

        {/* Linkuri - Information */}
        <div className="footerLinks">
          <span className="linkTitle font-semibold mb-2 block">Information</span>
          <ul className="space-y-1 text-sm">
            <li><a href="#home">Manage Booking</a></li>
            <li><a href="#offers">Flight Status</a></li>
            <li><a href="#offers">Check-In</a></li>
            <li><a href="#about">Explore</a></li>
            <li><a href="#home">Contact Us</a></li>
          </ul>
        </div>

        {/* Linkuri - Services */}
        <div className="footerLinks">
          <span className="linkTitle font-semibold mb-2 block">Services</span>
          <ul className="space-y-1 text-sm">
            <li><a href="#seats">Chauffeur</a></li>
            <li><a href="#about">Our Partners</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#about">Careers</a></li>
            <li><a href="#about">Rules</a></li>
          </ul>
        </div>

        {/* Linkuri - Quick Guide */}
        <div className="footerLinks">
          <span className="linkTitle font-semibold mb-2 block">Quick Guide</span>
          <ul className="space-y-1 text-sm">
            <li><a href="#support">FAQs</a></li>
            <li><a href="#about">Features</a></li>
            <li><a href="#support">Baggage</a></li>
            <li><a href="#destinations">Route Map</a></li>
            <li><a href="#destinations">Our Communities</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyRight text-center mt-10 pb-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Travel Agency. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
