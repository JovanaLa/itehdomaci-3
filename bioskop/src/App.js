import logo from './logo.svg';
import './App.css';
import HomeSection from './components/HomeSection';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import React from 'react';
import Program from './components/pages/Program';
import Locations from './components/pages/Locations';

function App() {
  return (
   
  <BrowserRouter className="App">
  <NavBar></NavBar>
  <Routes>
    <Route
      path="/"
      element={<HomeSection />}
    />
    <Route path="/" element={<Program />}/>
      <Route path="/locations" element={<Locations />}/>
  </Routes>
</BrowserRouter>
  );
}

export default App;
