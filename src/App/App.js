import './App.css';
import Header from '../Components/Header';
import Diy from '../Features/Diy/Diy';
import Crafts from '../Features/Crafts/Crafts';
import ReactDom from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Diy />}/>
        <Route path='/crafts' element={<Crafts />} />
      </Routes>
    </div>
  );
}

export default App;
