import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';
import Search from '../Features/Search/Search';

function Header() {
  return (
    <header className="App-header">
      <section className="logo">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="logo-text">Diddit</h1>
      </section>
      <nav className="nav">
        <NavLink to="/">
          <button type="button" className="button-diy">Sewing</button>
        </NavLink>
        <NavLink to="/crafts">
          <button type="button" className="button-crafts">Crafts</button>
        </NavLink>
      </nav>
      <Search />
    </header>
  );
}

export default Header;
