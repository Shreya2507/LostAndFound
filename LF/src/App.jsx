import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Lostitm from './Pages/Lostitm';
import Founditm from './Pages/Founditm';
import Report from './Pages/Report';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Lostitm" element={<Lostitm />} />
            <Route path="/Founditm" element={<Founditm />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
