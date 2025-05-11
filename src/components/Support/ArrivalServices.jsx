import { useNavigate } from 'react-router-dom';
import SupportNav from './SupportNav';

const ArrivalServices = () => {
  const navigate = useNavigate();

  return (
    <div className="container section">
      <SupportNav />
      <h1 className="text-2xl font-bold mb-4">Servicii la Sosire</h1>
      <p className="mb-6">
        La sosire, puteți beneficia de servicii precum transport privat, ghizi locali, și suport pentru bagaje. 
        Rezervările în avans sunt recomandate pentru o experiență mai relaxată.
      </p>

      <button
        onClick={() => navigate('/support')}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        ← Înapoi la Suport
      </button>
    </div>
  );
};

export default ArrivalServices;
