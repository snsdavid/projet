// src/route/App.js
import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../page/HomePage';
import EntreprisePage from '../page/EntreprisePage';
import NewsPage from '../page/NewsPage';
import ContactPage from '../page/ContactPage';
import ExpertisePage from '../page/ExpertisePage';
import DomaineDintervention from '../page/DomaineDintervention';

const ScrollToTop = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const AppRoute = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/entreprise/:id" element={<EntreprisePage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        {/* Add more routes as needed */}
        <Route path="/actualites" element={<NewsPage></NewsPage>} />
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="/domaine-d-intervention/:id" element={<DomaineDintervention></DomaineDintervention>} />
      </Routes>
    </>
  );
};

export default AppRoute;
