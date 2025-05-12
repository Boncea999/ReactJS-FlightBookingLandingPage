import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const flights = [
  { id: 1, origin: 'București', destination: 'Cluj-Napoca', class: 'Economy' },
  { id: 2, origin: 'București', destination: 'Timișoara', class: 'Business Class' },
  { id: 3, origin: 'Cluj-Napoca', destination: 'București', class: 'First Class' },
  { id: 4, origin: 'București', destination: 'Constanța', class: 'Economy' },
  { id: 5, origin: 'Iași', destination: 'Cluj-Napoca', class: 'Economy' },
  { id: 6, origin: 'București', destination: 'Oradea', class: 'Business Class' },
  { id: 7, origin: 'Cluj-Napoca', destination: 'București', class: 'Economy' },
  { id: 8, origin: 'Timișoara', destination: 'București', class: 'First Class' },
  { id: 9, origin: 'București', destination: 'Arad', class: 'Economy' },
  { id: 10, origin: 'Cluj-Napoca', destination: 'Timișoara', class: 'Business Class' }
];

const formatFlight = (flight) => `${flight.origin} - ${flight.destination}`;

const BookInfo = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', flight: '' });
  const [errors, setErrors] = useState({});
  const [savedReservations, setSavedReservations] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const flightId = queryParams.get('flight');
    if (flightId) {
      const found = flights.find(f => f.id === parseInt(flightId));
      if (found) {
        setFormData(prev => ({ ...prev, flight: formatFlight(found) }));
      }
    }

    // Citire rezervări din localStorage
    const saved = JSON.parse(localStorage.getItem('reservations') || '[]');
    setSavedReservations(saved);
  }, [location.search]);

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = 'Numele este obligatoriu';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Email invalid';
    if (!formData.password || formData.password.length < 6) errs.password = 'Parola trebuie să aibă cel puțin 6 caractere';
    if (!formData.flight) errs.flight = 'Selectează un zbor';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      const selectedFlight = flights.find(f => formatFlight(f) === formData.flight);
      navigate(`/?showFlights=true&flight=${selectedFlight?.id || ''}`);
    } else {
      setErrors(errs);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>Formular Rezervare Zbor</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="text" placeholder="Nume" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}

        <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

        <input type="password" placeholder="Parola" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}

        <select value={formData.flight} onChange={(e) => setFormData({ ...formData, flight: e.target.value })}>
          <option value="">Selectează zbor</option>
          {flights.map((f) => (
            <option key={f.id} value={formatFlight(f)}>{formatFlight(f)} ({f.class})</option>
          ))}
        </select>
        {errors.flight && <span style={{ color: 'red' }}>{errors.flight}</span>}

        <button type="submit" className="btn" style={{ background: '#1e90ff', color: 'white', padding: '0.5rem', border: 'none', borderRadius: '4px' }}>
          Trimite
        </button>
      </form>

      {savedReservations.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Zboruri rezervate</h3>
          {savedReservations.map((res, idx) => (
            <div key={idx} style={{ padding: '1rem', border: '1px solid #ccc', marginBottom: '1rem' }}>
              <p><strong>Nume:</strong> {res.name}</p>
              <p><strong>Email:</strong> {res.email}</p>
              <p><strong>Telefon:</strong> {res.phone}</p>
              <p><strong>Zbor:</strong> {res.flight} ({res.class})</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookInfo;
