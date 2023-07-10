import '../index.css';
import React from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import Header from '../Components/Header';
import Sewing from '../Features/Sewing/Sewing';
import Crafts from '../Features/Crafts/Crafts';
import Comments from '../Features/Comments/Comments';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Sewing />} />
          <Route path="/crafts" element={<Crafts />} />
          <Route path="/" element={<Comments />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
