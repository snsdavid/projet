import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Footer.css"; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <>
    <footer
    className="text-white pt-5 pb-3 footer"
    style={{ backgroundColor: "#162B46" }} // bleu foncé
  >
    <div className="container text-center mb-4">
      {/* Logo */}
      <img
        src="/icon.png" // remplace par ton chemin d'image
        alt="NYA AGRITEK"
        style={{ width: "80px", marginBottom: "10px" }}
      />
      <h5 className="fw-light">NYA AGRITEK</h5>
    </div>

    <div className="container">
      <div className="row text-start">
        {/* Colonne 1 */}
        <div className="col-md-4 mb-4" style={{fontFamily: "Arial, sans-serif", fontSize: "16px"}}>
          <h6 className="fw-bold" style={{ color: "#9CC24D" , paddingBottom: "18px"}}>
            Domaines d'intervention
          </h6>
          <ul className="list-unstyled">
            <li><a href="/domaine-d-intervention/FORESTERIE_ENVIRONNEMENT" className="text-white text-decoration-none">FORESTERIE & ENVIRONNEMENT</a></li>
            <li><a href="/domaine-d-intervention/AGRICULTURE" className="text-white text-decoration-none">AGRICULTURE ET NEGOCE AGRICOLE</a></li>
            <li><a href="/domaine-d-intervention/ETUDE_ET_CONSEIL" className="text-white text-decoration-none">ETUDE ET CONSEIL</a></li>
            <li><a href="/domaine-d-intervention/DIGITALISATION_AGRICOLE" className="text-white text-decoration-none">DIGITALISATION AGRICOLE</a></li>
          </ul>
        </div>

        {/* Colonne 2 */}
        <div className="col-md-4 mb-4" style={{fontFamily: "Arial, sans-serif", fontSize: "16px"}}>
          <h6 className="fw-bold" style={{ color: "#9CC24D", paddingBottom: "18px" }}>
            Nos prestations
          </h6>
          <ul className="list-unstyled">
            <li><a href="/nos-prestation/Agroforesterie" className="text-white text-decoration-none">Agroforesterie & reforestation</a></li>
            <li><a href="/nos-prestation/Suivi" className="text-white text-decoration-none">Suivi de reboisement & réalisation de plans d’aménagement</a></li>
            <li><a href="/nos-prestation/Formation" className="text-white text-decoration-none">Formation en sylviculture & techniques de production de plants</a></li>
            <li><a href="/nos-prestation/Gestion" className="text-white text-decoration-none">Gestion des écosystèmes & sensibilisation des communautés</a></li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div className="col-md-4 mb-4" style={{fontFamily: "Arial, sans-serif", fontSize: "16px"}}>
          <h6 className="fw-bold" style={{ color: "#9CC24D", paddingBottom: "18px" }}>
            L’entreprise
          </h6>
          <ul className="list-unstyled">
            <li><a href="/entreprise/Qui_Somme_Nous" className="text-white text-decoration-none">Qui sommes-nous ?</a></li>
            <li><a href="/entreprise/Notre_Vision" className="text-white text-decoration-none">Notre vision</a></li>
            <li><a href="/entreprise/Notre_Mission" className="text-white text-decoration-none">Notre mission</a></li>
            <li><a href="/entreprise/Nos_Valeurs" className="text-white text-decoration-none">Nos valeurs</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="text-center mt-4" style={{ fontSize: "14px" }}>
      © Nya Agritek 2023 - Mentions légales - Réalisation Agence Web Spin On
    </div>
  </footer>
  <style jsx>{`
    .footer{
   clip-path: ellipse(150% 99% at 48% 110%);

    }
 
  `}</style>

  </>
  );
};

export default Footer;
