import logo from './logo.svg';
import './App.css';
import HomeSection from './components/HomeSection';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import React from 'react';
import Program from './components/pages/Program';
import Locations from './components/pages/Locations';
import Footer from './components/Footer';

function App() {
  return (
   
  <BrowserRouter className="App">
  <NavBar></NavBar>
  <Routes>
    <Route
      path="/"
      element={<HomeSection />}
    />
    <Route path="/program" element={<Program />}/>
      <Route path="/locations" element={<Locations />}/>
  </Routes>
  <Footer></Footer>
</BrowserRouter>
  );
}

export default App;
