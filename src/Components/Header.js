import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScissors, faHammer } from '@fortawesome/free-solid-svg-icons';
import Search from '../Features/Search/Search';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  const toggleFeed = (location) => {
    if (location.pathname === '/') {
      navigate('/crafts');
    } else {
      navigate(-1);
    }
    setIsActive(!isActive);
  };

  return (
    <header className="min-h-[6rem] flex justify-between items-center shadow px-10">
      <section className="flex items-center">
        <img src={logo} className="h-12" alt="logo" />
        <h1 className="font-titan text-3xl text-text">Diddit</h1>
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
          {isActive ? (
            <span className="absolute right-1 flex items-center justify-center w-6 h-6 bg-white rounded-full transition-transform duration-400">
              <FontAwesomeIcon icon={faHammer} />
            </span>
          ) : (
            <span className="absolute left-1 flex items-center justify-center w-6 h-6 bg-white rounded-full transition-transform duration-400">
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
