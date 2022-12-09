import { Link } from 'react-router-dom';
import logo from '../Assets/images/logo.png';
import Search from '../Features/Search/Search'

const Header = () => {

return (

<header className="App-header">
        <section className="logo">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="logo-text">Diddit</h1>
        </section>
        <nav className="nav">
            <Link to='/'>
            <button className="button-diy">Diy</button>
            </Link>
            <Link to="/crafts">
            <button className="button-crafts">Crafts</button>
            </Link>
            <ul className='nav-mobile'>
                <li className='feed-button'><a>Diy</a></li>
                <li className='feed-button'><a>Crafts</a></li>
            </ul>
        </nav>
       <Search />
      </header>
);
}

export default Header;