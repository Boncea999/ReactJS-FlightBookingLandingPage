import { useEffect } from 'react';
import { FaWheelchair, FaPlaneDeparture, FaCar, FaHandsHelping } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imageGrid from '../../assets/imageGrid.webp';
import { useNavigate } from 'react-router-dom';

const Lounge = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div id="seats" className="lounge container flex">
      <div className="sectionContainer grid">
        {/* Imagine */}
        <div className="imgDiv">
          <img src={imageGrid} alt="Zonă lounge pentru minori neînsoțiți" />
        </div>

        {/* Conținut text */}
        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>

          <div className="grids grid">

            <div className="singleGrid" data-aos="fade-up">
              <FaWheelchair className="icon" />
              <span className="gridTitle">Help through the airport</span>
              <p>Un reprezentant te asistă de la intrarea în aeroport până la poarta de îmbarcare.</p>
            </div>

            <div className="singleGrid" data-aos="fade-up" data-aos-delay="100">
              <FaPlaneDeparture className="icon" />
              <span className="gridTitle">Priority Boarding</span>
              <p>Minorii neînsoțiți beneficiază de îmbarcare prioritară pentru confort și siguranță.</p>
            </div>

            <div className="singleGrid" data-aos="fade-up" data-aos-delay="200">
              <FaCar className="icon" />
              <span className="gridTitle">Chauffeur-drive service</span>
              <p>Serviciu de șofer privat pentru transfer între aeroport și destinație.</p>
            </div>

            <div className="singleGrid" data-aos="fade-up" data-aos-delay="300">
              <FaHandsHelping className="icon" />
              <span className="gridTitle">Care on Flight</span>
              <p>Însoțitori atenți asigură confortul copilului pe durata zborului.</p>
            </div>
          </div>

          {/* Buton acțiune (opțional) */}
          <button className="btn" style={{ marginTop: '20px' }} onClick={() => navigate('/lounge-details')}>
            Află mai multe despre Lounge
          </button>

        </div>
      </div>
    </div>
  );
};

export default Lounge;
