import { RxCalendar } from 'react-icons/rx';
import { BsShieldCheck, BsFillBookmarkFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Info = () => {
  const navigate = useNavigate();

  return (
    <div id="about" className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2>Make memories of the World</h2>
          <button className="btn">View All</button>
        </div>

        <div className="cardsDiv grid">
          <div
            className="singleCard grid"
            onClick={() => navigate('/book-info')}
          >
            <div className="iconDiv flex">
              <RxCalendar className="icon" />
            </div>
            <span className="cardTitle">Book Now</span>
            <p>Rezervă rapid și ușor biletele tale.</p>
          </div>

          <div
            className="singleCard grid"
            onClick={() => navigate('/safety-info')}
          >
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className="icon" />
            </div>
            <span className="cardTitle">Safety</span>
            <p>Prioritizăm siguranța ta la fiecare zbor.</p>
          </div>

          <div
            className="singleCard grid"
            onClick={() => navigate('/save-info')}
          >
            <div className="iconDiv flex colorTwo">
              <BsFillBookmarkFill className="icon" />
            </div>
            <span className="cardTitle">Save More</span>
            <p>Reduceri și beneficii exclusive pentru tine.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
