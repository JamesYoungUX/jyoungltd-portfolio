import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import CaseStudy from './CaseStudy';
import SEOCCaseStudy from './SEOCCaseStudy';
import CaseStudies from './CaseStudies';
import Resume from './Resume';
import NotFound from './NotFound';
import './Portfolio.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-study/seoc" element={<SEOCCaseStudy />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; 