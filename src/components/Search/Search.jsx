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

  const handleSearchFlights = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/getFlights?location=${location}&destination=${destination}&checkIn=${checkIn}&checkOut=${checkOut}&class=${flightClass}`
      );
      const data = await response.json();

      const flightsWithTotal = data.flights.map(flight => ({
        ...flight,
        totalPrice: flight.price * travelers,
      }));

      setAvailableFlights(flightsWithTotal);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  return (
    <div className="search section container">
      <div className="sectionContainer">
        <div className="btns flex">
          <div
            className={`singleBtn ${flightClass === 'Economy' ? 'active' : ''}`}
            onClick={() => setFlightClass('Economy')}
          >
            <span>Economy</span>
          </div>
          <div
            className={`singleBtn ${flightClass === 'Business Class' ? 'active' : ''}`}
            onClick={() => setFlightClass('Business Class')}
          >
            <span>Business Class</span>
          </div>
          <div
            className={`singleBtn ${flightClass === 'First Class' ? 'active' : ''}`}
            onClick={() => setFlightClass('First Class')}
          >
            <span>First Class</span>
          </div>
        </div>

        <div className="searchInputs flex">
          {/* Origin */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Origin</h4>
              <input
                type="text"
                placeholder="Where are you flying from?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          {/* Destination */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Destination</h4>
              <input
                type="text"
                placeholder="Where would you like to go?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>

          {/* Travelers */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input
                type="number"
                min="1"
                placeholder="Add guests"
                value={travelers}
                onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
              />
            </div>
          </div>

          {/* Check In */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
          </div>

          {/* Check Out */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>

          {/* Search Button */}
          <button className="btn btnBlock flex" onClick={handleSearchFlights}>
            Search Flights
          </button>
        </div>

        <div className="availableFlights">
          {availableFlights.length > 0 ? (
            availableFlights.map(flight => (
              <div key={flight.id} className="flight">
                <h5>{flight.airline}</h5>
                <p>{flight.origin} → {flight.destination}</p>
                <p>Departure: {new Date(flight.departure).toLocaleString()}</p>
                <p>Arrival: {new Date(flight.arrival).toLocaleString()}</p>
                <p>Class: {flight.class}</p>
                <p>Price per traveler: ${flight.price}</p>
                <p>Total price for {travelers} traveler(s): ${flight.totalPrice}</p>
              </div>
            ))
          ) : (
            <p>No flights found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
