import { useEffect } from "react"
import { Link } from 'react-router-dom'
import supportimg from "../../assets/supportimg.webp"
import Aos from 'aos'
import 'aos/dist/aos.css'


function Support() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div id="offers" className="support container section">
      <div className="sectionContainer">

        <div className="titlesDiv">
          <small>Travel Support</small>
          <h2>Find help with Booking</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit. </p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">

            <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
              <span className="number">01</span>
              <h4>Travel requirements for USA</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. At! </p>
              <Link to="/support/usa" className="btn">Learn More</Link>
            </div>

            <div data-aos='fade-down' data-aos-duration='3500' className="singleInfo">
              <span className="number colorOne">02</span>
              <h4>Travel Insurance</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. At! </p>
              <Link to="/support/insurance" className="btn">Learn More</Link>
            </div>

            <div data-aos='fade-down' data-aos-duration='4500' className="singleInfo">
              <span className="number colorTwo">03</span>
              <h4>Services at your arrival</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. At! </p>
              <Link to="/support/arrival" className="btn">Learn More</Link>
            </div>

          </div>

          <div className="imgDiv">
            <img data-aos='fade-left' data-aos-duration='4500' src={supportimg} alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Support
