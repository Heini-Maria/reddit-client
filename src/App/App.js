import './App.css';
import Header from '../Components/Header';
import Diy from '../Features/Diy/Diy';
import Crafts from '../Features/Crafts/Crafts';
import { Routes, Route } from 'react-router-dom';
import Comments from '../Features/Comments/Comments';
import React, {useState, useEffect} from 'react';


function App() {
const [articles, setArticles] = useState([]);
const [subreddit, setSubreddit] = useState('diy');

useEffect (() => {
  fetch("https://www.reddit.com/r/diy.json").then (res => {
    if (res.status != 200) {
      console.log('ERROOR');
      return;
    }
    res.json().then(data => {
      if(data !=null) {
        console.log(data);
      }
    })
  })
})

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Diy />}/>
        <Route path='/crafts' element={<Crafts/>} />
       <Route path='/' element={<Comments />}/>
      </Routes>
    </div>
  );
}

export default App;
