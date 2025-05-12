import { useEffect, useState } from 'react';

const MyBookings = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.email) return;

    const allReservations = JSON.parse(localStorage.getItem('reservations') || '{}');
    const userFlights = allReservations[user.email] || [];
    setFlights(userFlights);
  }, []);

  if (!flights.length) {
    return <p>No bookings yet.</p>;
  }

  return (
    <div className="myBookingsPage">
      <h2>My Bookings</h2>
      {flights.map((flight, index) => (
        <div key={index} className="bookingCard">
          <h4>{flight.airline}</h4>
          <p>{flight.origin} → {flight.destination}</p>
          <p>Departure: {new Date(flight.departure).toLocaleString()}</p>
          <p>Travelers: {flight.travelers}</p>
          <p>Booked by: {flight.name} ({flight.phone})</p>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
