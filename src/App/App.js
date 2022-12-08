import logo from '../Assets/images/logo.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="logo">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="logo-text">Diddit</h1>
        </section>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
