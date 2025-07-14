import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NotFound = () => (
  <div className="text-gray-300 transition-colors duration-300" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", margin: 0, overflowX: 'hidden', backgroundColor: 'var(--bg-primary)', color: 'var(--text-secondary)' }}>
    <div className="content min-h-screen transition-colors duration-300" style={{ position: 'relative', zIndex: 10, background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-tertiary))' }}>
      <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-16">
        <Header />
        <div className="flex flex-col items-center justify-center" style={{ marginTop: '4rem' }}>
          <h1 className="text-5xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
          <Link to="/" className="btn-text border px-6 py-3 rounded-md hover:bg-gray-200 transition-colors" style={{ color: '#000', background: '#fff', borderColor: '#000' }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound; 