import { useEffect, useState } from 'react';
import paris from '../../assets/paris.webp';
import london from '../../assets/london.webp';
import bangkok from '../../assets/bangkok.webp';
import pakistan from '../../assets/pakistan.webp';
import traveler1 from '../../assets/traveler1.jpg';
import traveler2 from '../../assets/user2.jpg';
import traveler3 from '../../assets/user3.jpg';
import traveler4 from '../../assets/user4.jpg';

const defaultTravelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'Kenji Kishimoto',
    socialLink: '@kenji76',
    destination: 'Paris'
  },
  {
    id: 2,
    destinationImage: london,
    travelerImage: traveler2,
    travelerName: 'Haider Ibrahim',
    socialLink: '@haider32',
    destination: 'London'
  },
  {
    id: 3,
    destinationImage: bangkok,
    travelerImage: traveler3,
    travelerName: 'Alex Russo',
    socialLink: '@alex46',
    destination: 'Bangkok'
  },
  {
    id: 4,
    destinationImage: pakistan,
    travelerImage: traveler4,
    travelerName: 'Justin Sky',
    socialLink: '@justin990',
    destination: 'Pakistan'
  }
];

const Travelers = () => {
  const [selectedTraveler, setSelectedTraveler] = useState(null);
  const [allTravelers, setAllTravelers] = useState(defaultTravelers);

  useEffect(() => {
    const stored = localStorage.getItem('customTravelers');
    if (stored) {
      const parsed = JSON.parse(stored);
      setAllTravelers([...defaultTravelers, ...parsed]);
    }
  }, []);

  const deleteTraveler = (id) => {
    const stored = localStorage.getItem('customTravelers');
    if (!stored) return;

    const parsed = JSON.parse(stored);
    const updated = parsed.filter(traveler => traveler.id !== id);
    localStorage.setItem('customTravelers', JSON.stringify(updated));

    setAllTravelers([...defaultTravelers, ...updated]);
  };

  return (
    <div id="destinations" className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this Month!</h2>

        <div className="travelersContainer grid">
          {allTravelers.map((traveler) => (
            <div
              key={traveler.id}
              className="singleTraveler"
              onClick={() => setSelectedTraveler(traveler)}
            >
              <img src={traveler.destinationImage || paris} className="destinationImage" alt={traveler.destination} />
              <div className="travelersDetails">
                <div className="travelerPicture">
                  <img src={traveler.travelerImage} className="travelerImage" alt={traveler.travelerName} />
                </div>
                <div className="travelerName">
                  <span>{traveler.travelerName}</span>
                  <p>{traveler.socialLink}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="addTravelerButton">
          <button className="btn" onClick={() => window.location.href = '/add-traveler'}>
            Adaugă un nou utilizator
          </button>
        </div>

        {selectedTraveler && (
          <div className="modalBackdrop" onClick={() => setSelectedTraveler(null)}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
              <img src={selectedTraveler.travelerImage} alt="Traveler" className="modalImage" />
              <h3>{selectedTraveler.travelerName}</h3>
              <p>{selectedTraveler.socialLink}</p>
              <p>A vizitat: <strong>{selectedTraveler.destination}</strong></p>

              {selectedTraveler.id > 4 && (
                <button className="btn danger" onClick={() => {
                  deleteTraveler(selectedTraveler.id);
                  setSelectedTraveler(null);
                }}>
                  Șterge utilizatorul
                </button>
              )}
              <button onClick={() => setSelectedTraveler(null)} className="btn">Închide</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Travelers;
