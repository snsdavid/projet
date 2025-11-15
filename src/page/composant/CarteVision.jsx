import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import { customIcon } from "./ExpertiseSection";

export default function CarteVision() {
  const projects = [
    {
      id: 1,
      name: "Projet Agro-forestier",
      description: "Développement durable et reforestation.",
      position: [5.35, -3.99], // Exemple: Abidjan
    },
    {
      id: 2,
      name: "Projet Rizicole",
      description: "Modernisation de la filière riz. yakro est un projet de modernisation de la filière riz.",
      position: [6.78, -5.28], // Exemple: yakro
    },
    {
      id: 3,
      name: "Projet Cacao",
      description: "Optimisation de la production de cacao.",
      position: [7.38, -1.54], // Exemple: Kumasi
    },
  ];
  return (
    <div className="container py-5">
      <div className="row align-items-center g-5">
        {/* Colonne Image */}
        <div className="col-lg-6 col-md-12">
          <div 
            className="position-relative"
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
            }}
          >
                    <MapContainer
                      center={[6.5, -1.5]} // Position initiale (Afrique de l'Ouest)
                      zoom={6}
                      scrollWheelZoom={false}
                      style={{ height: "500px", borderRadius: "15px" }}
                    >
                      {/* Fond de carte */}
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
            
                      {/* Marqueurs */}
                      {projects.map((project) => (
                        <Marker key={project.id} position={project.position} icon={customIcon}>
                          {/* Popup (clic) */}
                          <Popup>
                            <strong>{project.name}</strong>
                            <br />
                            {project.description}
                          </Popup>
            
                          {/* Infobulle (au survol) */}
                          <Tooltip>{project.name}</Tooltip>
                        </Marker>
                      ))}
                    </MapContainer>
          </div>
        </div>
        
        {/* Colonne Texte */}
        <div className="col-lg-6 col-md-12">
          <h2 
            className="fw-bold mb-4" 
            style={{ 
              fontSize: '2.5rem',
              lineHeight: '1.2',
              color: '#1a1a1a'
            }}
          >
            Notre expertise 
          </h2>
          
          <p 
            className="mb-4" 
            style={{ 
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: '#6c757d'
            }}
          >
            NYA AGRITEK est le prolongement et la structuration d'une expertise forgée au travers de projets ambitieux dans la foresterie, la cartographie, l’agriculture et le développement durable
Cette expérience nous permet aujourd’hui de concevoir ...
          </p>
          
          <button 
            className="btn btn-outline-dark btn-lg px-4 py-3"
            style={{ 
              fontWeight: '600',
              borderWidth: '2px',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#1a1a1a';
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#1a1a1a';
            }}
            onClick={() => window.location.href = "/expertise"}
          >
            Découvrez notre expertise
          </button>
        </div>
      </div>
    </div>
  );
}