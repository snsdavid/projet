import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="p-5" style={{ color: "rgb(30, 58, 95)" , backgroundColor: "rgba(248, 249, 250, 0.72)" , width: "100%" }}>
      {/* ===== COMMENT NOUS TROUVER ===== */}
      <h2
        className="text-uppercase fw-bold mb-5"
        style={{ color: "#8bc34a" ,fontFamily: "Julius Sans One"}}
      >
        Comment nous trouver ?
      </h2>

      {/* Colonnes Agences */}
      <div className="row mb-5">
        {/* AGENCE SUD */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold text-uppercase" style={{ fontFamily: "Julius Sans One"}}>Agence Sud et Siège social</h5>
          <p className="mb-1 " style={{ fontFamily: "Julius Sans One"}}>Angré Nouveau CHU, Cocody</p>
          <p className="mb-1 " style={{ fontFamily: "Julius Sans One"}}>Abidjan, Côte d’Ivoire</p>
          <p className="mb-1 " style={{ fontFamily: "Julius Sans One"}}>
            Email :{" "}
            <a href="mailto:nya.agritek@gmail.com" className="text-dark">
              nya.agritek@gmail.com
            </a>
          </p>
          <p className="mb-1" style={{ fontFamily: "Julius Sans One"}}>
            <i className="bi bi-telephone text-success me-2"></i> 05 86 25 31 31
          </p>
          <p className="mb-1" style={{ fontFamily: "Julius Sans One"}}>
            <i className="bi bi-phone text-success me-2"></i> +225 86 25 31 31
          </p>
          <p className="mb-0" style={{ fontFamily: "Julius Sans One"}}>
            <i className="bi bi-linkedin text-success me-2"></i>
            <a
              href="https://www.linkedin.com/company/nya-agritek-sarl-0754ab311"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              nya-agritek-sarl
            </a>
          </p>
        </div>

        {/* AGENCE OUEST (exemple vide à compléter si besoin) */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold text-uppercase" style={{ fontFamily: "Julius Sans One"}}>Agence Ouest</h5>
          <p className="text-muted">À venir...</p>
        </div>

        {/* AGENCE EST (exemple vide à compléter si besoin) */}
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold text-uppercase" style={{ fontFamily: "Julius Sans One"}}>Agence Est</h5>
          <p className="text-muted">À venir...</p>
        </div>
      </div>

      {/* ===== NOS IMPLANTATIONS ===== */}
      <h2
        className="text-uppercase fw-bold mb-4"
        style={{ color: "#8bc34a" ,fontFamily: "Julius Sans One"}}
      >
        Nos implantations
      </h2>

      <p>
        Nya Agritek est implantée à Abidjan, en Côte d’Ivoire, au cœur d’un
        écosystème agricole dynamique. Grâce à ses partenariats et réseaux
        d’experts, l’entreprise développe progressivement une présence à
        l’international pour accompagner les projets agricoles, environnementaux
        et digitaux sur plusieurs continents.
      </p>

      <p>
        Nous intervenons principalement en Afrique de l’Ouest, mais également en
        Europe et en Asie, dans le cadre de la digitalisation agricole, du
        négoce et du développement durable.
      </p>

      <p>
        Nos équipes accompagnent des projets pilotes pour renforcer la
        traçabilité et la commercialisation des produits agricoles à l’échelle
        mondiale.
      </p>
    </div>
  );
};

export default Contact;
