import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Support from './components/Support/Support';
import Info from './components/Info/Info';
import Lounge from './components/Lounge/Lounge';
import Travelers from './components/Travelers/Travelers';
import Subscribers from './components/Subscribers/Subscribers';
import Footer from './components/Footer/Footer';
import Book from './components/Book/Book';
import SupportPage from './components/SupportPage/SupportPage';
import LanguagesPage from './components/LanguagesPage/LanguagesPage';
import LoungeDetails from './components/LoungeDetails/LoungeDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Search />
            <Support />
            <Info />
            <Lounge />
            <Travelers />
            <Subscribers />
          </>
        } />
         <Route path="/rezervare" element={<Book />} />
         <Route path="/support" element={<SupportPage />} />
         <Route path="/languages" element={<LanguagesPage />} />
         <Route path="/lounge-details" element={<LoungeDetails />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
