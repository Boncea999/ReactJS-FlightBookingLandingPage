import { Link } from 'react-router-dom';

const SupportNav = () => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow mb-6 flex gap-4 justify-center text-sm font-medium">
      <Link to="/support/usa" className="text-blue-600 hover:underline">🇺🇸 Cerințe SUA</Link>
      <Link to="/support/insurance" className="text-blue-600 hover:underline">🛡️ Asigurare</Link>
      <Link to="/support/arrival" className="text-blue-600 hover:underline">🚖 Servicii la Sosire</Link>
    </div>
  );
};

export default SupportNav;