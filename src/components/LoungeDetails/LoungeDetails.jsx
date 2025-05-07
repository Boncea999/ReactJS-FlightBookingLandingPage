import React from 'react';

const LoungeDetails = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h2>Detalii despre Lounge pentru Minori Neînsoțiți</h2>
      <p>
        Lounge-ul dedicat minorilor neînsoțiți oferă un mediu sigur și confortabil pentru copii, în timp ce așteaptă zborul.
      </p>
      <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem' }}>
        <li>Asistență permanentă din partea personalului specializat</li>
        <li>Jocuri și activități recreative</li>
        <li>Servicii de gustare și hidratare</li>
        <li>Monitorizare și informare constantă privind statusul zborului</li>
        <li>Posibilitate de contact direct cu părinții/tutorele</li>
      </ul>
    </div>
  );
};

export default LoungeDetails;
