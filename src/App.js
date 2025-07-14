import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Portfolio from './Portfolio';
import CaseStudy from './CaseStudy';
import SEOCCaseStudy from './SEOCCaseStudy';
import Resume from './Resume';
import NotFound from './NotFound';
import EPSICaseStudy from './EPSICaseStudy';
import ResilienceCaseStudy from './ResilienceCaseStudy';
import CaseStudyPearl from './CaseStudyPearl';
import CaseStudyAyva from './CaseStudyAyva';
import './Portfolio.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/case-study/seoc" element={<SEOCCaseStudy />} />
          <Route path="/case-study/epsi" element={<EPSICaseStudy />} />
          <Route path="/case-study/resilience" element={<ResilienceCaseStudy />} />
          <Route path="/case-study/pearl" element={<CaseStudyPearl />} />
          <Route path="/case-study/ayva" element={<CaseStudyAyva />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; 