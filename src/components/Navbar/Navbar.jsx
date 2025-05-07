import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SiConsul } from 'react-icons/si';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsPhoneVibrate } from 'react-icons/bs';
import { CgMenuGridO } from 'react-icons/cg';
import logo from '../../assets/logo.png';
import './Navbar.css';

const defaultItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'offers', label: 'Offers', href: '#offers' },
  { id: 'seats', label: 'Seats', href: '#seats' },
  { id: 'destinations', label: 'Destinations', href: '#destinations' },
];

const Navbar = () => {
  const [active, setActive] = useState('navBarMenu');
  const [noBg, addBg] = useState('navBarTwo');
  const [menuItems, setMenuItems] = useState(defaultItems);

  useEffect(() => {
    const counts = JSON.parse(localStorage.getItem('menuClicks')) || {};
    const sorted = [...defaultItems].sort((a, b) => (counts[b.id] || 0) - (counts[a.id] || 0));
    setMenuItems(sorted);

    const addBgColor = () => {
      if (window.scrollY >= 10) addBg('navBarTwo navbar_With_Bg');
      else addBg('navBarTwo');
    };

    addBgColor();
    window.addEventListener('scroll', addBgColor);
    return () => window.removeEventListener('scroll', addBgColor);
  }, []);

  const showNavBar = () => setActive('navBarMenu showNavBar');
  const removeNavBar = () => setActive('navBarMenu');

  const handleClick = (id) => {
    removeNavBar();
    const current = JSON.parse(localStorage.getItem('menuClicks')) || {};
    current[id] = (current[id] || 0) + 1;
    localStorage.setItem('menuClicks', JSON.stringify(current));

    const sorted = [...defaultItems].sort((a, b) => (current[b.id] || 0) - (current[a.id] || 0));
    setMenuItems(sorted);
  };

  return (
    <div className='navBar flex'>
      {/* Top bar */}
      <div className="navBarOne flex">
        <div><SiConsul className='icon' /></div>
        <div className="none flex">
          <li className='flex'>
            <Link to="/support" className="flex">
              <BsPhoneVibrate className='icon' />Support
            </Link>
          </li>
          <li className='flex'>
            <Link to="/languages" className="flex">
              <AiOutlineGlobal className='icon' />Languages
            </Link>
          </li>
        </div>
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>

      {/* Main bar */}
      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className='logo' alt="logo" />
        </div>
        <div className={active}>
          <ul className="menu flex">
            {menuItems.map((item) => (
              <li key={item.id} onClick={() => handleClick(item.id)} className="listItem">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <button className='btn flex btnOne'>Contact</button>
        </div>
        <button className='btn flex btnTwo'>Contact</button>
        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className='icon' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
