import React, { useState } from 'react';

const languages = [
  'Română',
  'English',
  'Français',
  'Deutsch',
  'Español',
  'Italiano',
  'Magyar',
  'Polski',
  'Русский',
  '中文',
  '日本語',
  '한국어',
  'العربية',
];

const LanguagesPage = () => {
  const [selected, setSelected] = useState('Română');

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>Selectează limba preferată</h2>
      <p>Limba curentă selectată: <strong>{selected}</strong></p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {languages.map((lang) => (
          <li
            key={lang}
            onClick={() => setSelected(lang)}
            style={{
              padding: '10px 15px',
              marginBottom: '8px',
              border: selected === lang ? '2px solid #007bff' : '1px solid #ccc',
              borderRadius: '6px',
              cursor: 'pointer',
              backgroundColor: selected === lang ? '#e7f0ff' : '#f9f9f9',
            }}
          >
            {lang}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagesPage;
