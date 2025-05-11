import { useState } from 'react';

const AddTraveler = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTraveler = {
      id: Date.now(),
      destinationImage: '', // default or empty
      travelerImage: image,
      travelerName: name,
      socialLink: email,
      destination: `Vârstă: ${age}`
    };

    const stored = localStorage.getItem('customTravelers');
    const existing = stored ? JSON.parse(stored) : [];
    localStorage.setItem('customTravelers', JSON.stringify([...existing, newTraveler]));

    alert('Utilizator adăugat!');
    window.location.href = '/';
  };

  return (
    <div className="container section">
      <h2>Adaugă un nou utilizator</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label>Imagine:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {image && <img src={image} alt="Preview" className="previewImage" />}
        </div>

        <div className="formGroup">
          <label>Nume:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="formGroup">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="formGroup">
          <label>Vârstă:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </div>

        <button type="submit" className="btn">Salvează utilizator</button>
      </form>
    </div>
  );
};

export default AddTraveler;
