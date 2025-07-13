import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import CaseStudy from './CaseStudy';
import './Portfolio.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; 