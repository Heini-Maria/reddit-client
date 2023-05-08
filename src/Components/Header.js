import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
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
      {/* <nav className="nav">
        <NavLink to="/">
          <button type="button" className="button-diy">Sewing</button>
        </NavLink>
        <NavLink to="/crafts">
          <button type="button" className="button-crafts">Crafts</button>
        </NavLink>
      </nav> */}
      <div className="switch-container">
          <label className="switch">
            <input
              type="checkbox"
              onClick={() => {toggleFeed(location)}}
              /* checked={theme === "dark"} */
            />
            <span className="slider"></span>
          </label>
        </div>
      <Search />
    </header>
  );
}

export default Header;
