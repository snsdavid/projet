import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";

// Icône personnalisée 📌
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const ExpertiseSection = () => {
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
      description: "Modernisation de la filière riz.",
      position: [6.13, 1.22], // Exemple: Lomé
    },
    {
      id: 3,
      name: "Projet Cacao",
      description: "Optimisation de la production de cacao.",
      position: [7.38, -1.54], // Exemple: Kumasi
    },
  ];

  return (
    <section className="py-2" >
      <div className="container">
        <h2
          className="text-center fw-bold mb-4"
          style={{ color: '#8bc34a', fontSize: '1.8rem', letterSpacing: '1px' ,fontFamily: 'Julius Sans One' }}
        >
          Notre expertise
        </h2>
        <p className="text-center mb-5" style={{lineHeight: '1.6' , fontSize: '1.1rem' , fontWeight: 'semi-bold' , maxWidth: "700px" , margin: "0 auto"}}>
        NYA AGRITEK est le prolongement et la structuration d'une expertise forgée au travers de projets ambitieux dans la foresterie, la cartographie, l’agriculture et le développement durable <br />
        Cette expérience nous permet aujourd’hui de concevoir des solutions adaptées pour accompagner nos partenaires dans la réussite de leurs projets. <br />
        Notre approche repose sur une maîtrise technique solide et une vision tournée vers l’avenir, afin de transformer les défis en opportunités.
        </p>

        {/* Carte dynamique */}
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
    </section>
  );
};

export default ExpertiseSection;
