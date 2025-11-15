import React from 'react';
import HeaderComposant from './composant/Headercomposant'; // Assuming you have a Header component
import Carrosel from './composant/Carrosel';
import Section1 from './composant/Section1'; // Assuming you have a Section1 component
import Section2 from './composant/Section2';
import Footer from './composant/Footer'; // Assuming you have a Footer component
import EcosysHero from './composant/EcosysEnTete';
import MissionEntete from './composant/MissionEntete';
import CarteVision from './composant/CarteVision';
import NewsCarousel from './composant/CarroselDomaineIntervention';

const HomePage = () => {
  return (
    <>
      <HeaderComposant />
      <div className="method-1 relative">
        <div 
          className="container-fluid relative" 
          style={{
            backgroundColor: "rgba(238, 237, 243, 0.84)", 
            paddingBottom: "90px",
          }}
        >
          {/* Forme concave avec pseudo-élément */}
          <div 
            className="absolute top-0 left-0 w-full overflow-hidden"
            style={{ height: '100px' }}
          >
            <div
              className="absolute top-0 left-0 w-full bg-white"
              style={{
                height: '100px',
                borderRadius: '0 0 50% 50%',
                transform: 'translateY(-50px)'
              }}
            />
          </div>
          
          <div className="relative z-10">
            <Carrosel />
          </div>
        </div>
      </div>

      <div className="h-8"></div>
      <EcosysHero />
      <MissionEntete />
      <NewsCarousel />
      <CarteVision />
      <Footer />
    </>
  );
}

export default HomePage;