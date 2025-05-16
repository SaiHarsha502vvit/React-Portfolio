import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import DesignerPortfolioHomepage from './pages/Home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DesignerPortfolioHomepage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;