import logo from './logo.svg';
import './App.css';
import HomeSection from './components/HomeSection';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
   
  <BrowserRouter className="App">
  <NavBar></NavBar>
  <Routes>
    <Route
      path="/"
      element={<HomeSection />}
    />
  </Routes>
</BrowserRouter>
  );
}

export default App;
