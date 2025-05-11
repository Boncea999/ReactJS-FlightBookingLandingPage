import { useNavigate } from 'react-router-dom';
import SupportNav from './SupportNav';

const USATravel = () => {
  const navigate = useNavigate();

  return (
    <div className="container section">
      <SupportNav />
      <h1 className="text-2xl font-bold mb-4">Cerințe de călătorie pentru SUA</h1>
      <p className="mb-6">
        Pentru a călători în SUA, este necesar să aveți pașaport valabil, viză sau ESTA pentru cetățenii eligibili. 
        Verificați cerințele specifice pe site-ul ambasadei înainte de călătorie. De asemenea, este recomandat 
        să aveți asigurare medicală de călătorie.
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

export default USATravel;