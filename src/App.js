import React from 'react';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/navBar/NavBar';
import './App.css'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
