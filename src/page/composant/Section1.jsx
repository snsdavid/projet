import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const Section1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="position-relative d-flex align-items-center justify-content-center min-vh-70 overflow-hidden pb-5" 
             style={{ background: "linear-gradient(135deg,rgb(98, 185, 16),rgb(105, 187, 12),rgb(107, 148, 13))" }}>

      {/* Contenu central limité à 400px */}
      <div className="container text-center position-relative" style={{ maxWidth: "700px", zIndex: 10 }}>
        
        {/* Logo */}
        <div className={`mb-5 ${isVisible ? "animate__animated animate__fadeInDown" : ""}`}>
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
          <div className="d-none w-100 d-flex justify-content-center align-items-center">
            <svg width="60" height="60" fill="white" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0..."></path>
            </svg>
          </div>
        </div>

        {/* Titre */}
        <h1 className={`fw-bold text-white mb-3 h2 ${isVisible ? "animate__animated animate__fadeInUp animate__delay-1s" : ""}`}>
          Découvrir <br />
          <span style={{color:' #0d9e92ff'}}>NYA AGRITEK</span>
        </h1>

        {/* Sous-titre */}
        <p className={`text-light mb-4 h4 ${isVisible ? "animate__animated animate__fadeInUp animate__delay-2s" : ""}`}>
          🌱 NYA AGRITEK – Cultivons l’avenir, une récolte à la fois ! 🌾
Experts en agriculture et négoce agricole, digitalisation et technologie agricole ...
        </p>

        {/* Boutons CTA */}
        <div className={`d-flex flex-column flex-sm-row gap-3 justify-content-center mb-4 ${isVisible ? "animate__animated animate__fadeInUp animate__delay-3s" : ""}`}>
          <button className="btn btn-outline-light px-3 py-2">
            En savoir plus
            <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </div>

{/* Features (4 détails bien larges) */}
<div className={`row g-4 justify-content-center mx-auto ${isVisible ? "animate__animated animate__fadeInUp animate__delay-4s" : ""}`} 
     style={{ maxWidth: "900px" }}>
  
  <div className="col-6 col-md-3">
    <div className="p-4 bg-white bg-opacity-25 rounded shadow-sm text-white h-100 text-center">
<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#75FB4C"><path d="M80-160v-60h240q-20-91-87.5-159.5T80-470q20-5 39.5-7.5T160-480q134 0 227 93t93 227H80Zm460 0q0-42-8-73.5T512-296q40-88 120-136t168-48q21 0 40.5 2.5T880-470q-85 22-154 91.5T640-220h240v60H540Zm-58-193q-9-76 13-142t64.5-115Q602-659 662-688t127-31q-56 35-105.5 95.5T621-494q-44 21-80 58.5T482-353Zm-61-76q-16-15-35-30t-32-23q3-12 4.5-26.5T360-532q0-76-24-144t-68-124q70 28 124 88.5T468-573q-18 32-30.5 69.5T421-429Z"/></svg>      <h6>AGRICULTURE & NEGOCE AGRICOLE</h6>
    </div>
  </div>

  <div className="col-6 col-md-3">
    <div className="p-4 bg-white bg-opacity-25 rounded shadow-sm text-white h-100 text-center">
<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#75FB4C"><path d="M480-60q-78-69-170.5-106T120-203v-429q94 0 186.5 43T480-469q81-77 173.5-120T840-632v429q-97 0-189.5 37T480-60Zm0-77q71-51 146.5-81.5T780-257v-310q-68 11-143.5 54.5T480-392q-88-81-160-123t-140-52v310q78 8 153.5 38.5T480-137Zm3-475q-65 0-109.5-44.5T329-766q0-65 44.5-109.5T483-920q65 0 109.5 44.5T637-766q0 65-44.5 109.5T483-612Zm.16-60q38.84 0 66.34-27.66t27.5-66.5q0-38.84-27.66-66.34t-66.5-27.5q-38.84 0-66.34 27.66t-27.5 66.5q0 38.84 27.66 66.34t66.5 27.5Zm-.16-94Zm-3 374Z"/></svg>      <h6>ETUDES & CONSEIL</h6>
    </div>
  </div>

  <div className="col-6 col-md-3">
    <div className="p-4 bg-white bg-opacity-25 rounded shadow-sm text-white h-100 text-center">
<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#75FB4C"><path d="M300-370h40v-140h-40v50h-60v40h60v50Zm100-50h320v-40H400v40Zm220-110h40v-50h60v-40h-60v-50h-40v140Zm-380-50h320v-40H240v40Zm90 460v-80H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H630v80H330ZM140-260h680v-520H140v520Zm0 0v-520 520Z"/></svg>      <h6>DIGITALISATION AGRICOLE</h6>
    </div>
  </div>

  <div className="col-6 col-md-3">
    <div className="p-4 bg-white bg-opacity-25 rounded shadow-sm text-white h-100 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#75FB4C"><path d="M145-599q-11.48 0-19.24-9-7.76-9-7.76-21t7.76-21q7.76-9 19.24-9h149q25.16 0 43.08 17.5Q355-624 360-599H145Zm84.88 379Q284-220 322-257.88q38-37.88 38-92T322.12-442q-37.88-38-92-38T138-442.12q-38 37.88-38 92T137.88-258q37.88 38 92 38Zm554.94 0Q816-220 838-241.82q22-21.83 22-53Q860-326 838.18-348q-21.83-22-53-22Q754-370 732-348.18q-22 21.83-22 53Q710-264 731.82-242q21.83 22 53 22Zm-554.7-60q-29.12 0-49.62-20.38-20.5-20.38-20.5-49.5t20.38-49.62q20.38-20.5 49.5-20.5t49.62 20.38q20.5 20.38 20.5 49.5t-20.38 49.62q-20.38 20.5-49.5 20.5ZM810-428q19 5 31.5 11t28.5 18v-260q0-26-17-43t-43-17H538l-49-49 62-62-18-18-141 141 18 19 61-61 49 47.64V-597q0 41.66-28.5 71.33T421-496h-69q17 14 26.5 27t21.5 33h21q65 0 112-48t47-113v-62h230v231ZM653-320q6-22 12.5-34.5T684-381H418q2 18 2 30.5t-2 30.5h235Zm132.5 160q-56.5 0-96-38.66Q650-237.31 650-292q0-57.17 40.41-97.59Q730.83-430 788-430q54.69 0 93.34 39.54Q920-350.93 920-295q0 57-39 96t-95.5 39ZM228-160q-79 0-133.5-55.57Q40-271.15 40-350q0-78.85 55.5-134.42Q151-540 229.89-540q78.9 0 134.5 55.61Q420-428.79 420-349.89q0 78.89-55.5 134.39Q309-160 228-160Zm394-360Z"/></svg>
      <h6>FORESTERIE & ENVIRONNEMENT</h6>
    </div>
  </div>
</div>

      </div>

      {/* Flèche bas */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
        <div className="text-white-50 animate__animated animate__bounce animate__infinite">
          <i className="bi bi-arrow-down fs-4"></i>
        </div>
      </div>
    </section>
  );
};

export default Section1;
