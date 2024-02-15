// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PhotoGallery from './components/PhotoGallery';
import Follow from './components/Follow';
import ThankYouPage from './components/Thanks';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/follow" element={<Follow />} />
        <Route path="/thanks" element={<ThankYouPage />} />

      </Routes>
    </Router>
  );
}

export default App;
