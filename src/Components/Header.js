import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';
import Search from '../Features/Search/Search';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const toggleFeed = (location) => {
    if (location.pathname === "/") {
      navigate("/crafts");
    } else {
      navigate(-1);
    }
    
  };

  return (
    <header className="App-header">
      <section className="logo">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="logo-text">Diddit</h1>
      </section>
      <div className="switch-container">
        <p>Sewing</p>
          <label className="switch">
            <input
              type="checkbox"
              onClick={() => {toggleFeed(location)}}
            />
            <span className="slider"></span>
          </label>
          <p>Crafts</p>
        </div>
      <Search />
    </header>
  );
}

export default Header;
