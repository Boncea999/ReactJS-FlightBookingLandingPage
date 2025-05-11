import { useState } from 'react';

const Subscribers = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = () => {
    if (!email) {
      setMessage('Please enter an email address.');
      return;
    }

    // Aici poți trimite emailul către un server, dar momentan doar simulăm
    console.log(`Subscribed with email: ${email}`);
    setMessage('Subscribed successfully!');
    setEmail('');
  };

  return (
    <div className="subscribe section">
      <div className="sectionContainer container">
        <h2>Subscribe Newsletter to get Latest News</h2>
        <div className="inputDiv flex">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn" onClick={handleSubscribe}>Subscribe</button>
        </div>
        {message && <p style={{ marginTop: '1rem', color: '#0f62fe' }}>{message}</p>}
      </div>
    </div>
  );
};

export default Subscribers;
