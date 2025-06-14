// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AATBusinessSolutions from './AATBusinessSolutions';
import AboutPage from './AboutPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AATBusinessSolutions />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
