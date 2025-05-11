import './search.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { RxCalendar } from 'react-icons/rx';

function Search() {
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [flightClass, setFlightClass] = useState('');
  const [availableFlights, setAvailableFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedFlightId, setSelectedFlightId] = useState(null);
  const [reservationDetails, setReservationDetails] = useState({ name: '', email: '', phone: '', password: '' });
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [showFlights, setShowFlights] = useState(false);

  const allFlights = [
    { id: 1, airline: 'Airline 1', origin: 'București', destination: 'Cluj-Napoca', departure: '2025-07-01T10:00:00', arrival: '2025-07-01T12:00:00', price: 250, class: 'Economy' },
    { id: 2, airline: 'Airline 2', origin: 'București', destination: 'Timișoara', departure: '2025-07-02T09:00:00', arrival: '2025-07-02T11:00:00', price: 300, class: 'Business Class' },
    { id: 3, airline: 'Airline 3', origin: 'Cluj-Napoca', destination: 'București', departure: '2025-07-01T14:00:00', arrival: '2025-07-01T16:00:00', price: 400, class: 'First Class' },
    { id: 4, airline: 'Airline 4', origin: 'București', destination: 'Constanța', departure: '2025-07-03T08:00:00', arrival: '2025-07-03T10:00:00', price: 180, class: 'Economy' },
    { id: 5, airline: 'Airline 5', origin: 'Iași', destination: 'Cluj-Napoca', departure: '2025-07-05T11:00:00', arrival: '2025-07-05T12:30:00', price: 220, class: 'Economy' },
    { id: 6, airline: 'Airline 6', origin: 'București', destination: 'Oradea', departure: '2025-07-06T15:00:00', arrival: '2025-07-06T17:00:00', price: 280, class: 'Business Class' },
    { id: 7, airline: 'Airline 7', origin: 'Cluj-Napoca', destination: 'București', departure: '2025-07-07T07:30:00', arrival: '2025-07-07T09:30:00', price: 250, class: 'Economy' },
    { id: 8, airline: 'Airline 8', origin: 'Timișoara', destination: 'București', departure: '2025-07-08T10:15:00', arrival: '2025-07-08T12:15:00', price: 310, class: 'First Class' },
    { id: 9, airline: 'Airline 9', origin: 'București', destination: 'Arad', departure: '2025-07-09T13:00:00', arrival: '2025-07-09T15:00:00', price: 200, class: 'Economy' },
    { id: 10, airline: 'Airline 10', origin: 'Cluj-Napoca', destination: 'Timișoara', departure: '2025-07-10T17:30:00', arrival: '2025-07-10T19:30:00', price: 350, class: 'Business Class' }
  ];
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const show = urlParams.get('showFlights');
    const flightId = urlParams.get('flight');

    if (show === 'true') {
      if (flightId) {
        const selected = allFlights.find(f => f.id === parseInt(flightId));
        if (selected) {
          setAvailableFlights([{ ...selected, totalPrice: selected.price * travelers }]);
          setShowFlights(true);
          document.querySelector('.search.section.container')?.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        handleShowAllFlights();
        document.querySelector('.search.section.container')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const validateReservation = () => {
    const { name, email, phone, password } = reservationDetails;
    const emailValid = /\S+@\S+\.\S+/.test(email);
    const passValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/.test(password);
    if (!name || !email || !phone || !password) return 'All fields are required.';
    if (!emailValid) return 'Invalid email format.';
    if (!passValid) return 'Password must contain uppercase, lowercase, special character and be 6+ chars.';
    return '';
  };

  const handleSearchFlights = () => {
    setError('');
    if (!location && !destination && !checkIn && !checkOut && !flightClass) {
      setError('Please fill in at least one search field.');
      return;
    }
    setLoading(true);
    const filtered = allFlights.filter(f =>
      (!location || f.origin.toLowerCase().includes(location.toLowerCase())) &&
      (!destination || f.destination.toLowerCase().includes(destination.toLowerCase())) &&
      (!checkIn || f.departure.slice(0, 10) >= checkIn) &&
      (!checkOut || f.arrival.slice(0, 10) <= checkOut) &&
      (!flightClass || f.class === flightClass)
    );
    if (filtered.length === 0) {
      setError('No flights found.');
    }
    setAvailableFlights(filtered.map(f => ({ ...f, totalPrice: f.price * travelers })));
    setLoading(false);
    setShowFlights(true);
  };

  const handleShowAllFlights = () => {
    setAvailableFlights(allFlights.map(f => ({ ...f, totalPrice: f.price * travelers })));
    setShowFlights(true);
  };

  const handleHideAllFlights = () => setShowFlights(false);

  const handleSelectFlight = (id) => {
    setSelectedFlightId(id === selectedFlightId ? null : id);
    setReservationSuccess(false);
    setReservationDetails({ name: '', email: '', phone: '', password: '' });
  };

  const handleReservationChange = (e) => {
    const { name, value } = e.target;
    setReservationDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleReserve = () => {
    const validationError = validateReservation();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    setReservationSuccess(true);
  };

  return (
    <div className="search section container">
      <div className="sectionContainer">
        <div className="btns flex">
          {['Economy', 'Business Class', 'First Class'].map(cl => (
            <div key={cl} className={`singleBtn ${flightClass === cl ? 'active' : ''}`} onClick={() => setFlightClass(cl)}>
              <span>{cl}</span>
            </div>
          ))}
        </div>

        <div className="searchInputs flex">
          <div className="singleInput flex">
            <div className="iconDiv"><HiOutlineLocationMarker className="icon" /></div>
            <div className="texts">
              <h4>Origin</h4>
              <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="From?" />
            </div>
          </div>
          <div className="singleInput flex">
            <div className="iconDiv"><HiOutlineLocationMarker className="icon" /></div>
            <div className="texts">
              <h4>Destination</h4>
              <input type="text" value={destination} onChange={e => setDestination(e.target.value)} placeholder="To?" />
            </div>
          </div>
          <div className="singleInput flex">
            <div className="iconDiv"><RiAccountPinCircleLine className="icon" /></div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="number" value={travelers} onChange={e => setTravelers(Math.max(1, parseInt(e.target.value) || 1))} />
            </div>
          </div>
          <div className="singleInput flex">
            <div className="iconDiv"><RxCalendar className="icon" /></div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
            </div>
          </div>
          <div className="singleInput flex">
            <div className="iconDiv"><RxCalendar className="icon" /></div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
            </div>
          </div>
          <button className="btn btnBlock flex" onClick={handleSearchFlights}>
            {loading ? 'Loading...' : 'Search Flights'}
          </button>
        </div>

        <div className="btns flex">
          <button className="btn btnBlock flex" onClick={handleShowAllFlights}>Show All Flights</button>
          <button className="btn btnBlock flex" onClick={handleHideAllFlights}>Hide All Flights</button>
        </div>

        {error && <p className="error-message">{error}</p>}

        {showFlights && availableFlights.length > 0 && (
          <div className="availableFlights">
            {availableFlights.map(flight => (
              <div key={flight.id} className="flight">
                <h5>{flight.airline}</h5>
                <p>{flight.origin} → {flight.destination}</p>
                <p>Departure: {new Date(flight.departure).toLocaleString()}</p>
                <p>Arrival: {new Date(flight.arrival).toLocaleString()}</p>
                <p>Class: {flight.class}</p>
                <p>Price/traveler: ${flight.price}</p>
                <p>Total for {travelers}: ${flight.totalPrice}</p>
                <button className="btn" onClick={() => handleSelectFlight(flight.id)}>Reserve</button>

                {selectedFlightId === flight.id && (
                  <div className="reservationForm">
                    <h4>Complete your reservation:</h4>
                    <input name="name" placeholder="Name" value={reservationDetails.name} onChange={handleReservationChange} />
                    <input name="email" placeholder="Email" value={reservationDetails.email} onChange={handleReservationChange} />
                    <input name="phone" placeholder="Phone" value={reservationDetails.phone} onChange={handleReservationChange} />
                    <input name="password" placeholder="Password" type="password" value={reservationDetails.password} onChange={handleReservationChange} />
                    <button className="btn" onClick={handleReserve}>Confirm Reservation</button>
                    {reservationSuccess && <p className="success-message">Reservation successful!</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;