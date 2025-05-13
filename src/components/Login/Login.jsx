import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loggedUser, setLoggedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const storedAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
    setAccounts(storedAccounts);
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) setLoggedUser(user);
  }, []);

  const handleLogin = () => {
    const { email, password } = loginData;
    if (!email || !password) {
      toast.error('Completează emailul și parola!');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({ email, password }));
      setLoggedUser({ email, password });
      setLoading(false);
      toast.success('Autentificare reușită!');
    }, 1500);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggedUser(null);
    toast('Te-ai delogat cu succes!', { icon: '👋' });
  };

  const handleCreateAccount = () => {
    const { email, password } = loginData;
    if (!email || !password) {
      toast.error('Completează emailul și parola!');
      return;
    }
    const newAccount = { email, password };
    const updatedAccounts = [...accounts, newAccount];
    localStorage.setItem('accounts', JSON.stringify(updatedAccounts));
    setAccounts(updatedAccounts);
    toast.success('Cont creat cu succes!');
  };

  const handleAddAccount = () => {
    const { email, password } = loginData;
    if (!email || !password) {
      toast.error('Completează emailul și parola!');
      return;
    }
    const newAccount = { email, password };
    const updatedAccounts = [...accounts, newAccount];
    localStorage.setItem('accounts', JSON.stringify(updatedAccounts));
    setAccounts(updatedAccounts);
    toast.success('Cont adăugat!');
    setShowAddForm(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
      <Toaster position="top-right" reverseOrder={false} />

      <motion.div
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          {loggedUser ? 'Bine ai revenit!' : 'Autentificare'}
        </h2>

        <AnimatePresence mode="wait">
          {!loggedUser ? (
            <motion.div
              key="login-form"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
            >
              <input
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="password"
                placeholder="Parolă"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                onClick={handleLogin}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Se autentifică...
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
              <button
                onClick={handleCreateAccount}
                className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                Create Account
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="user-info"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <p className="mb-2 text-gray-700"><strong>Email:</strong> {loggedUser.email}</p>
              <p className="mb-4 text-gray-700"><strong>Parolă:</strong> {loggedUser.password}</p>

              <button
                onClick={() => navigate('/my-bookings')}
                className="w-full mb-3 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all duration-300"
              >
                Vezi Istoric Rezervări
              </button>

              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
              >
                Sign Out
              </button>

              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="w-full mt-3 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300"
              >
                {showAddForm ? 'Ascunde Formular' : 'Add Account'}
              </button>

              {showAddForm && (
                <div className="mt-4">
                  <input
                    type="email"
                    placeholder="Email nou"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    className="w-full px-4 py-2 mb-2 border rounded-lg"
                  />
                  <input
                    type="password"
                    placeholder="Parolă nouă"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="w-full px-4 py-2 mb-2 border rounded-lg"
                  />
                  <button
                    onClick={handleAddAccount}
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
                  >
                    Salvează contul
                  </button>
                </div>
              )}

              <button
                onClick={() => navigate('/view-accounts')}
                className="w-full mt-3 bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-all duration-300"
              >
                View Accounts
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => navigate('/')}
          className="w-full mt-4 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-all duration-300"
        >
          Back to Home
        </button>
      </motion.div>
    </div>
  );
};

export default Login;
