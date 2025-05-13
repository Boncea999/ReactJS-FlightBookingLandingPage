// ViewAccounts.jsx
import { useState, useEffect } from 'react';

const ViewAccounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const storedAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
    setAccounts(storedAccounts);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Conturi Creare</h2>
        
        {accounts.length > 0 ? (
          <ul className="list-disc pl-6">
            {accounts.map((account, index) => (
              <li key={index} className="mb-2">
                <strong>{account.name}</strong> - {account.email}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-700">Nu există conturi create.</p>
        )}
      </div>
    </div>
  );
};

export default ViewAccounts;
