// src/route/App.js
import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../page/HomePage';
import EntreprisePage from '../page/EntreprisePage';
import NewsPage from '../page/NewsPage';
import ContactPage from '../page/ContactPage';
import ExpertisePage from '../page/ExpertisePage';
import DomaineDintervention from '../page/DomaineDintervention';
import DomainesInterventionPage from '../page/DomainesInterventionPage'; // Import updated page
import NosPrestation from '../page/NosPrestation';
import NousRecrutons from '../page/NousRecrutons';
import Actualites from '../page/composant/ActualitePage';
import CandidatePage from '../page/CandidatePage';
import EspaceClient from '../page/EspaceClient';
import ActualiteDetail from '../page/ActualiteDetail';
import NosRealisations from '../page/NosRealisations';
import APropos from '../page/APropos'; // Import new A Propos page


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
        {/* New Consolidated Route */}
        <Route path="/a-propos" element={<APropos />} />
        
        {/* Legacy routes kept /entreprise/:id might still be used for links not updated, 
            but A propos link is now directed to /a-propos. 
             If user wants to remove /entreprise/:id completely we can, but safe to keep for now.
        */}
        <Route path="/entreprise/:id" element={<EntreprisePage />} />
        
        <Route path="/expertise" element={<ExpertisePage />} />
        {/* Add more routes as needed */}
        <Route path="/actualites" element={<Actualites></Actualites>} />
        <Route path="/actualites/:id" element={<ActualiteDetail />} />
        <Route path="/NosRealisations" element={<NosRealisations />} />
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
        {/* Updated route for all domains on one page */}
        <Route path="/domaines-intervention" element={<DomainesInterventionPage />} />
        {/* Keep legacy route just in case, or for specific ID access if needed later */}
        <Route path="/domaine-d-intervention/:id" element={<DomaineDintervention></DomaineDintervention>} />
        
        <Route path="/nos-prestation/:id" element={<NosPrestation></NosPrestation>} />
        <Route path="/nous-recrutons" element={<NousRecrutons></NousRecrutons>} />
        <Route path="/candidate" element={<CandidatePage></CandidatePage>} />
        <Route path="/espace-client-partenaire" element={<EspaceClient />} />
      </Routes>
    </>
  );
};

export default AppRoute;
