import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScissors, faHammer } from '@fortawesome/free-solid-svg-icons';
import Search from '../Features/Search/Search';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePaht] = useState(location.pathname);

  const toggleFeed = (location) => {
    if (location.pathname === '/') {
      navigate('/crafts');
      setActivePaht('/crafts');
    } else {
      navigate(-1);
      setActivePaht('/');
    }
  };

  return (
    <header className="min-h-[8rem] flex md:justify-between flex-col md:flex-row justify-center items-center shadow-md md:px-10 px-4 relative">
      <section className="flex items-center mb-4">
        <img src={logo} className="h-14" alt="logo" />
        <h1 className="ml-1 font-titan text-4xl text-text">Diddit</h1>
      </section>
      <div className="flex items-center">
        <p className="font-actor text-2xl text-text">Sewing</p>
        <label className="relative inline-flex items-center w-16 h-8 mx-2">
          <input
            className="opacity-0 w-0 h-0"
            type="checkbox"
            onClick={() => {
              toggleFeed(location);
            }}
          />
          <span className="absolute inset-0 rounded-full bg-gray"></span>
          {activePath === '/crafts' ? (
            <span className="absolute right-1 flex items-center justify-center w-6 h-6 m-0.5 bg-white rounded-full transition-transform duration-400">
              <FontAwesomeIcon icon={faHammer} className="h-3.5" />
            </span>
          ) : (
            <span className="absolute left-1 flex items-center justify-center w-6 h-6 m-0.5 bg-white rounded-full transition-transform duration-400">
              <FontAwesomeIcon icon={faScissors} />
            </span>
          )}
        </label>
        <p className="font-actor text-2xl text-text">Crafts</p>
      </div>
      <Search />
    </header>
  );
}

export default Header;
