import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './Pages/Details';

import { Home } from './Pages/Home';

export const IndexRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </Router>
  );
};
