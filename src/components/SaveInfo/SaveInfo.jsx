import React, { useState } from 'react';

const SaveInfo = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Te rugăm introdu un email valid');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <h2>Reducere specială</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label htmlFor="email">Introdu adresa ta de email pentru a primi un voucher de reducere:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn" type="submit">Primește reducerea</button>
        </form>
      ) : (
        <p>Mulțumim! Vei primi un cod de reducere pe email în scurt timp.</p>
      )}
    </div>
  );
};

export default SaveInfo;
