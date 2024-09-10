import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CamperDetailPage from './pages/CamperDetailPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar remains here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
