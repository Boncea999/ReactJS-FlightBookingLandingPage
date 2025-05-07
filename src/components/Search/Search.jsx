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
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [reservationDetails, setReservationDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [showFlights, setShowFlights] = useState(false); // Stare pentru a arăta/ascunde zborurile

  const allFlights = [
    {
      id: 1,
      airline: 'Airline 1',
      origin: 'București',
      destination: 'Cluj-Napoca',
      departure: '2025-07-01T10:00:00',
      arrival: '2025-07-01T12:00:00',
      price: 250,
      class: 'Economy',
    },
    {
      id: 2,
      airline: 'Airline 2',
      origin: 'București',
      destination: 'Timișoara',
      departure: '2025-07-02T09:00:00',
      arrival: '2025-07-02T11:00:00',
      price: 300,
      class: 'Business Class',
    },
    {
      id: 3,
      airline: 'Airline 3',
      origin: 'Cluj-Napoca',
      destination: 'București',
      departure: '2025-07-01T14:00:00',
      arrival: '2025-07-01T16:00:00',
      price: 400,
      class: 'First Class',
    },
    {
      id: 4,
      airline: 'Airline 4',
      origin: 'București',
      destination: 'Constanța',
      departure: '2025-07-03T08:00:00',
      arrival: '2025-07-03T10:00:00',
      price: 180,
      class: 'Economy',
    },
    {
      id: 5,
      airline: 'Airline 5',
      origin: 'Iași',
      destination: 'Cluj-Napoca',
      departure: '2025-07-05T11:00:00',
      arrival: '2025-07-05T12:30:00',
      price: 220,
      class: 'Economy',
    },
    {
      id: 6,
      airline: 'Airline 6',
      origin: 'București',
      destination: 'Oradea',
      departure: '2025-07-06T15:00:00',
      arrival: '2025-07-06T17:00:00',
      price: 280,
      class: 'Business Class',
    },
    {
      id: 7,
      airline: 'Airline 7',
      origin: 'Cluj-Napoca',
      destination: 'București',
      departure: '2025-07-07T07:30:00',
      arrival: '2025-07-07T09:30:00',
      price: 250,
      class: 'Economy',
    },
    {
      id: 8,
      airline: 'Airline 8',
      origin: 'Timișoara',
      destination: 'București',
      departure: '2025-07-08T10:15:00',
      arrival: '2025-07-08T12:15:00',
      price: 310,
      class: 'First Class',
    },
    {
      id: 9,
      airline: 'Airline 9',
      origin: 'București',
      destination: 'Arad',
      departure: '2025-07-09T13:00:00',
      arrival: '2025-07-09T15:00:00',
      price: 200,
      class: 'Economy',
    },
    {
      id: 10,
      airline: 'Airline 10',
      origin: 'Cluj-Napoca',
      destination: 'Timișoara',
      departure: '2025-07-10T17:30:00',
      arrival: '2025-07-10T19:30:00',
      price: 350,
      class: 'Business Class',
    }
  ];

  // Filtrare zboruri
  const handleSearchFlights = () => {
    setLoading(true);
    setError('');

    const filteredFlights = allFlights.filter(f =>
      (!location || f.origin.toLowerCase().includes(location.toLowerCase())) &&
      (!destination || f.destination.toLowerCase().includes(destination.toLowerCase())) &&
      (!checkIn || f.departure.slice(0, 10) >= checkIn) &&
      (!checkOut || f.arrival.slice(0, 10) <= checkOut) &&
      (!flightClass || f.class === flightClass)
    );

    if (filteredFlights.length === 0) {
      setError('No flights found for your search.');
    } else {
      const flightsWithTotal = filteredFlights.map(flight => ({
        ...flight,
        totalPrice: flight.price * travelers,
      }));
      setAvailableFlights(flightsWithTotal);
    }

    setLoading(false);
  };

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
  };

  const handleReservationChange = (e) => {
    const { name, value } = e.target;
    setReservationDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleReserveFlight = () => {
    if (!reservationDetails.name || !reservationDetails.email || !reservationDetails.phone) {
      setError('Please fill in all reservation fields.');
      return;
    }

    setReservationSuccess(true);
    setError('');
  };

  const handleShowAllFlights = () => {
    setAvailableFlights(allFlights.map(flight => ({
      ...flight,
      totalPrice: flight.price * travelers,
    })));
    setShowFlights(true); // Arată zborurile
  };

  const handleHideAllFlights = () => {
    setShowFlights(false); // Ascunde zborurile
  };

  return (
    <div className="search section container">
      <div className="sectionContainer">
        <div className="btns flex">
          <div className={`singleBtn ${flightClass === 'Economy' ? 'active' : ''}`} onClick={() => setFlightClass('Economy')}><span>Economy</span></div>
          <div className={`singleBtn ${flightClass === 'Business Class' ? 'active' : ''}`} onClick={() => setFlightClass('Business Class')}><span>Business Class</span></div>
          <div className={`singleBtn ${flightClass === 'First Class' ? 'active' : ''}`} onClick={() => setFlightClass('First Class')}><span>First Class</span></div>
        </div>

        <div className="searchInputs flex">
          <div className="singleInput flex">
            <div className="iconDiv"><HiOutlineLocationMarker className="icon" /></div>
            <div className="texts">
              <h4>Origin</h4>
              <input type="text" placeholder="Where are you flying from?" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv"><HiOutlineLocationMarker className="icon" /></div>
            <div className="texts">
              <h4>Destination</h4>
              <input type="text" placeholder="Where would you like to go?" value={destination} onChange={(e) => setDestination(e.target.value)} />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv"><RiAccountPinCircleLine className="icon" /></div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="number" min="1" value={travelers} onChange={(e) => setTravelers(parseInt(e.target.value) || 1)} />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv"><RxCalendar className="icon" /></div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv"><RxCalendar className="icon" /></div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
            </div>
          </div>

          <button className="btn btnBlock flex" onClick={handleSearchFlights}>{loading ? 'Loading...' : 'Search Flights'}</button>
        </div>

        <div className="btns flex">
          <button className="btn btnBlock flex" onClick={handleShowAllFlights}>Show All Flights</button>
          <button className="btn btnBlock flex" onClick={handleHideAllFlights}>Hide All Flights</button>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="availableFlights">
          {showFlights && availableFlights.length > 0 ? availableFlights.map(flight => (
            <div key={flight.id} className="flight">
              <h5>{flight.airline}</h5>
              <p>{flight.origin} → {flight.destination}</p>
              <p>Departure: {new Date(flight.departure).toLocaleString()}</p>
              <p>Arrival: {new Date(flight.arrival).toLocaleString()}</p>
              <p>Class: {flight.class}</p>
              <p>Price per traveler: ${flight.price}</p>
              <p>Total price for {travelers} traveler(s): ${flight.totalPrice}</p>
              <button className="btn" onClick={() => handleSelectFlight(flight)}>Reserve</button>
            </div>
          )) : !loading && <p>No flights found</p>}
        </div>
      </div>
    </div>
  );
}

export default Search;
