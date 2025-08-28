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
        src="icon.png" // remplace par ton chemin d'image
        alt="NYA AGRITEK"
        style={{ width: "80px", marginBottom: "10px" }}
      />
      <h5 className="fw-light">NYA AGRITEK</h5>
    </div>

    <div className="container">
      <div className="row text-start">
        {/* Colonne 1 */}
        <div className="col-md-4 mb-4" style={{fontFamily: "Arial, sans-serif", fontSize: "18px"}}>
          <h6 className="fw-bold" style={{ color: "#9CC24D" , paddingBottom: "18px"}}>
            Domaines d'intervention
          </h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white text-decoration-none">Biodiversité et ressources naturelles</a></li>
            <li><a href="#" className="text-white text-decoration-none">Arbres et Forêts</a></li>
            <li><a href="#" className="text-white text-decoration-none">Agriculture durable</a></li>
            <li><a href="#" className="text-white text-decoration-none">Territoires</a></li>
            <li><a href="#" className="text-white text-decoration-none">Climat</a></li>
          </ul>
        </div>

        {/* Colonne 2 */}
        <div className="col-md-4 mb-4" style={{fontFamily: "Arial, sans-serif", fontSize: "18px"}}>
          <h6 className="fw-bold" style={{ color: "#9CC24D", paddingBottom: "18px" }}>
            Nos prestations
          </h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white text-decoration-none">Évaluations</a></li>
            <li><a href="#" className="text-white text-decoration-none">Études et planification</a></li>
            <li><a href="#" className="text-white text-decoration-none">AT et AMO</a></li>
            <li><a href="#" className="text-white text-decoration-none">Formation / communication</a></li>
            <li><a href="#" className="text-white text-decoration-none">Audit et expertise</a></li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div className="col-md-4 mb-4" style={{fontFamily: "Arial, sans-serif", fontSize: "18px"}}>
          <h6 className="fw-bold" style={{ color: "#9CC24D", paddingBottom: "18px" }}>
            L’entreprise
          </h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white text-decoration-none">Qui sommes-nous ?</a></li>
            <li><a href="#" className="text-white text-decoration-none">Nos actualités</a></li>
            <li><a href="#" className="text-white text-decoration-none">Offres d’emploi, de missions, de stages</a></li>
            <li><a href="#" className="text-white text-decoration-none">Contacts et implantations</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="text-center mt-4" style={{ fontSize: "14px" }}>
      © Nya Agritek 2023 - Mentions légales - Réalisation Agence Web Spin On
    </div>
  </footer>

  </>
  );
};

export default Footer;
