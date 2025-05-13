import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import BookInfo from './components/BookInfo/BookInfo';
import SafetyInfo from './components/SafetyInfo/SafetyInfo';
import SaveInfo from './components/SaveInfo/SaveInfo';
import AddTraveler from './components/AddTraveler/AddTraveler';
import USATravel from './components/Support/USATravel';
import ArrivalServices from './components/Support/ArrivalServices';
import Insurance from './components/Support/Insurance';
import SupportNav from './components/Support/SupportNav';
import ContactPage from './components/ContactPage/ContactPage';
import MyBookings from './components/MyBookings/MyBookings';
import Login from './components/Login/Login';
import AddAccount from './components/AddAccount.jsx/AddAccount';
import ViewAccounts from './components/ViewAccounts/ViewAccounts';
function LayoutWrapper({ children }) {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <>
      {isMainPage && <Navbar />}
      {children}
      {isMainPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper>
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
          <Route path="/book-info" element={<BookInfo />} />
          <Route path="/safety-info" element={<SafetyInfo />} />
          <Route path="/save-info" element={<SaveInfo />} />
          <Route path="/add-traveler" element={<AddTraveler />} />
          <Route path="/support/usa" element={<USATravel />} />
          <Route path="/support/insurance" element={<Insurance />} />
          <Route path="/support/arrival" element={<ArrivalServices />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-account" element={<AddAccount />} />
          <Route path="/view-accounts" element={<ViewAccounts />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;