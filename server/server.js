const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors({
  origin: 'http://localhost:5173'
}));

// Funcție pentru eliminarea diacriticelor și conversia în lowercase
function normalize(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

app.get('/api/getFlights', (req, res) => {
  const { location, destination, checkIn, checkOut, class: flightClass } = req.query;

  const flights = [
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
  ];

  const filtered = flights.filter(f =>
    (!location || normalize(f.origin).includes(normalize(location))) &&
    (!destination || normalize(f.destination).includes(normalize(destination))) &&
    (!checkIn || f.departure.slice(0, 10) >= checkIn) &&
    (!checkOut || f.arrival.slice(0, 10) <= checkOut) &&
    (!flightClass || f.class === flightClass)
  );

  res.json({ flights: filtered });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
