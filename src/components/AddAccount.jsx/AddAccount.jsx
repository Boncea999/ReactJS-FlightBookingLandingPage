// AddAccount.jsx
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddAccount = () => {
  const navigate = useNavigate();
  const [newAccount, setNewAccount] = useState({ email: '', password: '', name: '' });
  const [loading, setLoading] = useState(false);

  const handleAddAccount = () => {
    const { email, password, name } = newAccount;
    if (!email || !password || !name) {
      toast.error('Completează toate câmpurile!');
      return;
    }

    setLoading(true);

    const existingAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
    existingAccounts.push(newAccount);
    localStorage.setItem('accounts', JSON.stringify(existingAccounts));

    setLoading(false);
    toast.success('Contul a fost adăugat!');
    navigate('/view-accounts');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Adăugare Cont Nou</h2>
        
        <input
          type="text"
          placeholder="Nume"
          value={newAccount.name}
          onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="email"
          placeholder="Email"
          value={newAccount.email}
          onChange={(e) => setNewAccount({ ...newAccount, email: e.target.value })}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="password"
          placeholder="Parolă"
          value={newAccount.password}
          onChange={(e) => setNewAccount({ ...newAccount, password: e.target.value })}
          className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          onClick={handleAddAccount}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Se adaugă...' : 'Adaugă Cont'}
        </button>
      </div>
    </div>
  );
};

export default AddAccount;
