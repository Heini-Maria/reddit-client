import { NavLink } from 'react-router-dom';
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
            <NavLink to='/'>
            <button className="button-diy">Diy</button>
            </NavLink>
            <NavLink to='/crafts'>
            <button className="button-crafts">Crafts</button>
            </NavLink>       
        </nav>               
       <Search />
</header>
)          
}


export default Header;