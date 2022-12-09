import './App.css';
import Header from '../Components/Header';
import Diy from '../Features/Diy/Diy';
import Crafts from '../Features/Crafts/Crafts';
import { Routes, Route } from 'react-router-dom';
import Comments from '../Features/Comments/Comments';


function App() {

  return (
    <div className="App">
      <Header />
     {/*  <Comments /> */}
      <Routes>
        <Route path='/' element={<Diy />}/>
        <Route path='/crafts' element={<Crafts/>} />
       <Route path='/' element={<Comments />}/>
      </Routes>
    </div>
  );
}

export default App;
