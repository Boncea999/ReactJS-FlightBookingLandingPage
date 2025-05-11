import { useNavigate } from 'react-router-dom';
import SupportNav from './SupportNav';

const Insurance = () => {
  const navigate = useNavigate();

  return (
    <div className="container section">
      <SupportNav />
      <h1 className="text-2xl font-bold mb-4">Asigurare de Călătorie</h1>
      <p className="mb-6">
        Asigurarea de călătorie este importantă pentru a acoperi costurile neprevăzute precum îmbolnăviri, 
        anulări de zboruri sau pierderea bagajelor. Alegeți un plan care oferă acoperire internațională completă.
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

export default Insurance;