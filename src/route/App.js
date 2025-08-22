// src/route/App.js
import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../page/HomePage';
import EntreprisePage from '../page/EntreprisePage';
import NewsPage from '../page/NewsPage';
import ContactPage from '../page/ContactPage';

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
        <Route path="/entreprise" element={<EntreprisePage />} />
        {/* Add more routes as needed */}
        <Route path="/actualites" element={<NewsPage></NewsPage>} />
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
      </Routes>
    </>
  );
};

export default AppRoute;
