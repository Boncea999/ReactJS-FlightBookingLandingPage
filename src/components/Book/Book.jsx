import React, { useState } from 'react';

const Book = () => {
  const [formData, setFormData] = useState({ name: '', email: '', people: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Numele este obligatoriu.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Email invalid.";
    if (!formData.people || isNaN(formData.people) || formData.people < 1)
      errs.people = "Introduceți un număr valid de persoane.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      console.log("Formular valid:", formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', people: '' });
    } else {
      setErrors(errs);
      setSubmitted(false);
    }
  };

  return (
    <div className="book">
      <h2>Rezervare Zbor</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <input
          type="text"
          placeholder="Nume"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="number"
          placeholder="Nr. persoane"
          value={formData.people}
          onChange={(e) => setFormData({ ...formData, people: e.target.value })}
        />
        {errors.people && <span className="error">{errors.people}</span>}

        <button type="submit">Trimite</button>
        {submitted && <p className="success">Formular trimis cu succes!</p>}
      </form>
    </div>
  );
};

export default Book;
