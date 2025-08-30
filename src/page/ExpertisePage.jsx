import React from 'react';
import Header from './composant/Headercomposant';
import ExpertiseSection from './composant/ExpertiseSection';
import Footer from './composant/Footer';
import Entreprise from './composant/Entreprise';

const ExpertisePage = () => {
    return (
        <div>
            <Header></Header>
            <Entreprise></Entreprise>
            <ExpertiseSection></ExpertiseSection>
            <Footer></Footer>
        </div>
    );
}

export default ExpertisePage;
