import './App.css';
import Header from '../Components/Header';
import Sewing from '../Features/Diy/Sewing';
import Crafts from '../Features/Crafts/Crafts';
import { Routes, Route } from 'react-router-dom';
import Comments from '../Features/Comments/Comments';
import React from 'react';


function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Sewing />}/>
        <Route path='/crafts' element={<Crafts />} />
       <Route path='/' element={<Comments />}/>
      </Routes>
    </div>
  );
}

export default App;
