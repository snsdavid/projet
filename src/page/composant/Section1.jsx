import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const Section1 = () => {
  const [isHover, setIsHover] = useState(false);


  return (
<section
      className="d-flex align-items-center justify-content-center text-center text-white"
      style={{
        minHeight: "60vh",
        background: "linear-gradient(135deg, #7FB13D, #9CC24D)",
        padding: "20px",
      }}
    >
      <div className="container">
        {/* Icône feuille */}
        <div className="mb-3">
        <img 
            src="eco.png" 
            alt="Oréade-Brèche Logo"
            className="img-fluid rounded-circle shadow"
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
        </div>

        {/* Titre */}
        <h1 className="fw-light mb-4" style={{ letterSpacing: "2px"  , fontFamily: 'Julius Sans One', color: '#2c3101'}}>
          DÉCOUVRIR NYA AGRITEK
        </h1>

        {/* Texte */}
        <p className="mx-auto" style={{ maxWidth: "700px", lineHeight: "1.8" , letterSpacing: "2px" , fontSize: "18px" ,textAlign: "justify"}}>
        Soutenir le développement rural et agricole durable en forgeant des partenariats solides et en offrant des solutions novatrices, adaptées aux besoins uniques de nos partenaires, face aux défis actuels et futurs...

        </p>

        {/* Bouton / lien */}
        <a
      href="#"
      style={{
        textDecoration: isHover ? "underline" : "none",
        fontSize: "14px"
      }}
      className="fw-bold text-white text-uppercase"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      Lire la suite
    </a>
      </div>
    </section>
  );
};

export default Section1;
