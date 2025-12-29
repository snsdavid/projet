import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ArrowRight, MapPin } from 'lucide-react';
import L from "leaflet";

// Fix Leaflet default icon path issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  shadowSize: [41, 41]
});

export default function CarteVision() {
  // Tous les projets avec leur ville
  const allProjects = [
    { name: "Contribution à la reforestation par le développement de l’Agroforesterie dans la filière Café-Cacoa", period: "Mars 2024 – Juin 2025", client: "Conseil du Café-Cacao", city: "Duekoue", position: [6.35, -7.45] },
    { name: "Projet de renforcement de la chaine d’approvisionnement de la coopérative SOCAK KATANA", period: "Jan-mai 2023", client: "SOCAK KATANA", city: "Duekoue", position: [6.35, -7.45] },
    { name: " Contribution à la reforestation par le développement de l’Agroforesterie dans la filière Café-Cacoa", period: "Mars 2024 – Juin 2025", client: "Conseil du Café-Cacao", city: "Guiglo", position: [6.25, -7.65] },
    { name: "Contribution à la reforestation par le développement de l’Agroforesterie dans la filière Café-Cacoa", period: "Mars 2024 – Juin 2025", client: "Conseil du Café-Cacao", city: "Tai", position: [6.45, -7.85] },
    { name: "Contribution à la reforestation par le développement de l’Agroforesterie dans la filière Café-Cacoa", period: "Mars 2024 – Juin 2025", client: "Conseil du Café-Cacao", city: "Blolequin", position: [6.05, -7.65] },
    { name: "Contribution à la reforestation par le développement de l’Agroforesterie dans la filière Café-Cacoa", period: "Mars 2024 – Juin 2025", client: "Conseil du Café-Cacao", city: "Toulepleu", position: [5.95, -7.55] },
    { name: "Contribution à la reforestation par le développement de l’Agroforesterie dans la filière Café-Cacoa", period: "Mars 2024 – Juin 2025", client: "Conseil du Café-Cacao", city: "Bangolo", position: [6.55, -7.25] },
    { name: "Projet de renforcement de la chaine d’approvisionnement de la coopérative SOCAK KATANA", period: "Jan-mai 2023", client: "SOCAK KATANA", city: "Bangolo", position: [6.55, -7.25] },
    { name: "Contribution à la reforestation par le développement de l’Agroforesterie dans la filière Café-Cacoa", period: "Mars 2024 – Juin 2025", client: "Conseil du Café-Cacao", city: "Kouibly", position: [6.5, -7.35] },
    { name: "Projet de renforcement de la chaine d’approvisionnement de la coopérative SOCAK KATANA", period: "Jan-mai 2023", client: "SOCAK KATANA", city: "Kouibly", position: [6.5, -7.35] },
    { name: "Projet de gestion durables des forêts du couvert forestier de la chaine d’approvisionnement Cargill West Africa (Green Project 2)", period: "Oct 2020-Sept 2022", client: "CARGILL WEST AFRICA", city: "Kouibly", position: [6.5, -7.35] },
    { name: " Contribution à la reforestation par le développement de l’Agroforesterie dans la filière Café-Cacoa", period: "Jan-mai 2023", client: "SOCAK KATANA", city: "Facobly", position: [6.4, -7.35] },
    { name: "Projet de renforcement de la chaine d’approvisionnement de la coopérative SOCAK KATANA", period: "Mars 2024 – Juin 2025", client: "Conseil du Café-Cacao", city: "Facobly", position: [6.4, -7.35] },
    { name: "Contribution à la reforestation par le développement de l’Agroforesterie dans la filière Café-Cacoa", period: "Mars 2024 – Juin 2025", client: "Conseil du Café-Cacao", city: "Man", position: [7.25, -7.55] },
    { name: "Projet de renforcement de la chaine d’approvisionnement de la coopérative SOCAK KATANA", period: "Janv 2021 – Juin 2025", client: "ETG/BEYOND BEANS", city: "Man", position: [7.25, -7.55] },
    { name: "Contribution à la reforestation par le développement de l’Agroforesterie dans la filière Café-Cacoa", period: "Mars 2024 – Juin 2025", client: "Conseil du Café-Cacao", city: "Danane", position: [6.75, -7.65] },
    { name: "Projet de renforcement de la chaine d’approvisionnement de la coopérative SOCAK KATANA", period: "Jan-mai 2023", client: "SOCAK KATANA", city: "Danane", position: [6.75, -7.65] },
    { name: "Contribution à la reforestation par le développement de l’Agroforesterie dans la filière Café-Cacoa", period: "Mars 2024 – Juin 2025", client: "Conseil du Café-Cacao", city: "Sipilou", position: [6.15, -7.75] },
    { name: "Contribution à la reforestation par le développement de l’Agroforesterie dans la filière Café-Cacoa", period: "Mars 2024 – Juin 2025", client: "Conseil du Café-Cacao", city: "Touba", position: [6.45, -7.45] },
    { name: "Projet de renforcement de la chaine d’approvisionnement de la coopérative SOCAK KATANA", period: "Jan-mai 2023", client: "SOCAK KATANA", city: "Touba", position: [6.45, -7.45] },
    { name: "Production et fourniture de plants forestiers et fruitiers", period: "Jan 2023 – juin 2025", client: "PUR PROJET", city: "Fresco", position: [4.95, -6.15] },
    { name: "Production et fourniture de plants forestiers et fruitiers", period: "Jan 2023 – juin 2025", client: "PUR PROJET", city: "Lakota", position: [5.25, -5.75] },
    { name: "Sensibilisation des sociétés coopératives et leurs membres dans les zones d’approvisionnement en cacao de CEMOI", period: "Janv - Mars 2022", client: "CEMOI CI", city: "Lakota", position: [5.25, -5.75] },
    { name: "Production et fourniture de plants forestiers et fruitiers", period: "Jan 2023 – juin 2025", client: "PUR PROJET", city: "Sassandra", position: [5.2, -6.05] },
    { name: "Production et fourniture de plants forestiers et fruitiers", period: "Jan 2023 – Juin 2025", client: "ETG/BEYOND BEANS", city: "Sassandra", position: [5.2, -6.05] },
    { name: "Projet de gestion durables des forêts du couvert forestier de la chaine d’approvisionnement Cargill West Africa (Green Project 2)", period: "Oct 2020-Sept 2022", client: "CARGILL WEST AFRICA", city: "Sassandra", position: [5.2, -6.05] },
    { name: "Sensibilisation des sociétés coopératives et leurs membres dans les zones d’approvisionnement en cacao de CEMOI", period: "Janv - Mars 2022", client: "CEMOI CI", city: "Sassandra", position: [5.2, -6.05] },
    { name: "Production et fourniture de plants forestiers et fruitiers", period: "Jan 2023 – juin 2025", client: "PUR PROJET", city: "Aboisso", position: [5.45, -3.25] },
    { name: "Fourniture de plants forestiers et mise en place des systèmes agroforestiers", period: "Jan – Oct 2023", client: "AGROMAP", city: "Vavoua", position: [7.3, -6.45] },
    { name: "Projet de reforestation communautaire", period: "Janv 2021 – Juin 2025", client: "ETG/BEYOND BEANS", city: "Vavoua", position: [7.3, -6.45] },
    { name: "Projet de production et de livraison de plants forestiers et fruitiers ", period: "Jan 2023 – Juin 2025", client: "ETG/BEYOND BEANS", city: "Vavoua", position: [7.3, -6.45] },
    { name: "Projet de reforestation communautaire", period: "Janv 2021 – Juin 2025", client: "ETG/BEYOND BEANS", city: "Daloa", position: [6.85, -6.45] },
    { name: "Projet de production et de livraison de plants forestiers et fruitiers", period: "Jan 2023 – Juin 2025", client: "ETG/BEYOND BEANS", city: "Daloa", position: [6.85, -6.45] },
    { name: "Projet de reforestation communautaire", period: "Janv 2021 – Juin 2025", client: "ETG/BEYOND BEANS", city: "Bouaflé", position: [6.55, -5.95] },
    { name: "Projet de reforestation communautaire", period: "Janv 2021 – Juin 2025", client: "ETG/BEYOND BEANS", city: "Séguéla", position: [7.85, -6.65] },
    { name: "Projet de production et de livraison de plants forestiers et fruitiers", period: "Jan 2023 – Juin 2025", client: "ETG/BEYOND BEANS", city: "Séguéla", position: [7.85, -6.65] },
    { name: "Projet de renforcement de la chaine d’approvisionnement de la coopérative SOCAK KATANA", period: "Jan-mai 2023", client: "SOCAK KATANA", city: "Biankouma", position: [7.75, -7.55] },
    { name: "Projet de participation des jeunes à la prévention et à la gestion des conflits identitaires liés à la profanation et a l’exploitation des forêts sacrées dans le département de Biankouma", period: "Aout 2020-Mai 2021", client: "PNUD/PBF", city: "Biankouma", position: [7.75, -7.55] },
    { name: "Projet de production et de livraison de plants forestiers et fruitiers", period: "Jan 2023 – Juin 2025", client: "ETG/BEYOND BEANS", city: "San Pedro", position: [4.75, -6.65] },
    { name: "Projet de gestion durables des forêts du couvert forestier de la chaine d’approvisionnement Cargill West Africa (Green Project 2)", period: "Oct 2020-Sept 2022", client: "CARGILL WEST AFRICA", city: "San Pedro", position: [4.75, -6.65] },
    { name: "Sensibilisation des sociétés coopératives et leurs membres dans les zones d’approvisionnement en cacao de CEMOI", period: "Janv - Mars 2022", client: "CEMOI CI", city: "San Pedro", position: [4.75, -6.65] },
    { name: "Projet de production et de livraison de plants forestiers et fruitiers", period: "Jan 2023 – Juin 2025", client: "ETG/BEYOND BEANS", city: "Grabo", position: [4.85, -6.75] },
    { name: "Projet de gestion durables des forêts du couvert forestier de la chaine d’approvisionnement Cargill West Africa (Green Project 2)", period: "Oct 2020-Sept 2022", client: "CARGILL WEST AFRICA", city: "Grabo", position: [4.85, -6.75] },
    { name: "Projet de production et de livraison de plants forestiers et fruitiers", period: "Jan 2023 – Juin 2025", client: "ETG/BEYOND BEANS", city: "Kani", position: [6.9, -6.35] },
    { name: "Projet de production et de livraison de plants forestiers et fruitiers", period: "Jan 2023 – Juin 2025", client: "ETG/BEYOND BEANS", city: "Zoukougbeu", position: [5.15, -6.1] },
    { name: "Projet de gestion durables des forêts du couvert forestier de la chaine d’approvisionnement Cargill West Africa (Green Project 2)", period: "Oct 2020-Sept 2022", client: "CARGILL WEST AFRICA", city: "Grand Bereby", position: [4.85, -6.55] },
    { name: "Projet de gestion durables des forêts du couvert forestier de la chaine d’approvisionnement Cargill West Africa (Green Project 2)", period: "Oct 2020-Sept 2022", client: "CARGILL WEST AFRICA", city: "Ouragahio", position: [6.35, -5.45] },
    { name: "Projet de gestion durables des forêts du couvert forestier de la chaine d’approvisionnement Cargill West Africa (Green Project 2)", period: "Oct 2020-Sept 2022", client: "CARGILL WEST AFRICA", city: "Issia", position: [6.45, -5.95] },
    { name: "Sensibilisation des sociétés coopératives et leurs membres dans les zones d’approvisionnement en cacao de CEMOI", period: "Janv - Mars 2022", client: "CEMOI CI", city: "Guitry", position: [5.85, -5.45] },
    { name: "Sensibilisation des sociétés coopératives et leurs membres dans les zones d’approvisionnement en cacao de CEMOI", period: "Janv - Mars 2022", client: "CEMOI CI", city: "Divo", position: [5.85, -5.35] },
    { name: "Sensibilisation des sociétés coopératives et leurs membres dans les zones d’approvisionnement en cacao de CEMOI", period: "Janv - Mars 2022", client: "CEMOI CI", city: "Abengourou", position: [6.75, -3.45] },
  ];

  // Grouper les projets par ville
  const citiesMap = {};
  allProjects.forEach(project => {
    if (!citiesMap[project.city]) {
      citiesMap[project.city] = {
        city: project.city,
        position: project.position,
        projects: []
      };
    }
    citiesMap[project.city].projects.push(project);
  });

  const cities = Object.values(citiesMap);

  return (
    <section style={styles.section}>
      <div className="container">
        <div style={styles.grid}>
          
          {/* Text Column */}
          <div style={styles.textCol}>
             <span style={styles.badge}>NOTRE IMPACT</span>
             <h2 style={styles.title}>Une Expertise De Terrain</h2>
             <p style={styles.text}>
               NYA AGRITEK intervient au plus près des réalités agricoles et environnementales.
               Nos équipes opèrent directement sur le terrain pour accompagner les projets, assurer un suivi rigoureux et garantir des résultats concrets.<br/>
               Grâce à notre expertise locale et à une présence active dans les zones stratégiques, nous apportons un appui technique fiable et adapté aux besoins des acteurs.<br/>
               Notre approche privilégie la proximité, la réactivité et une connaissance approfondie des contextes ruraux.
             </p>
             
             <ul style={styles.list}>
                <li style={styles.listItem}><MapPin size={20} color="#f3a31a"/> Présence opérationnelle dans les zones clés</li>
                <li style={styles.listItem}><MapPin size={20} color="#f3a31a"/> Suivi technique et coordination en temps réel</li>
                <li style={styles.listItem}><MapPin size={20} color="#f3a31a"/> Collaboration renforcée avec les communautés et partenaires locaux</li>
             </ul>

             <a href="/expertise" style={styles.button}>
                Découvrez notre expertise <ArrowRight size={18} />
             </a>
          </div>

          {/* Map Column */}
          <div style={styles.mapCol}>
             <div style={styles.mapWrapper}>
                <MapContainer
                    center={[6.8, -5.2]} 
                    zoom={7} 
                    scrollWheelZoom={false}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                      url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    />
          
                    {cities.map((cityData, idx) => (
                      <Marker key={idx} position={cityData.position} icon={customIcon}>
                        <Popup maxWidth={450} minWidth={400} maxHeight={500}>
                          <div style={{padding: '15px', maxHeight: '450px', overflowY: 'auto'}}>
                            <h5 style={{
                              margin: '0 0 20px 0', 
                              color: '#1879be', 
                              fontWeight: '700',
                              fontSize: '1.2rem',
                              borderBottom: '3px solid #f3a31a',
                              paddingBottom: '10px',
                              position: 'sticky',
                              top: '-15px',
                              background: 'white',
                              zIndex: 10
                            }}>
                              📍 {cityData.city}
                              <span style={{
                                fontSize: '0.85rem',
                                color: '#64748b',
                                fontWeight: '500',
                                marginLeft: '10px'
                              }}>
                                ({cityData.projects.length} projet{cityData.projects.length > 1 ? 's' : ''})
                              </span>
                            </h5>
                            
                            <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                              {cityData.projects.map((project, i) => (
                                <div key={i} style={{
                                  padding: '15px',
                                  background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
                                  borderRadius: '12px',
                                  border: '2px solid #e2e8f0',
                                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                  transition: 'all 0.3s ease'
                                }}>
                                  <div style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '10px',
                                    marginBottom: '12px'
                                  }}>
                                    <span style={{
                                      background: '#1879be',
                                      color: 'white',
                                      borderRadius: '50%',
                                      width: '28px',
                                      height: '28px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      fontWeight: '700',
                                      fontSize: '0.85rem',
                                      flexShrink: 0
                                    }}>
                                      {i + 1}
                                    </span>
                                    <h6 style={{
                                      margin: 0,
                                      color: '#1e334e',
                                      fontWeight: '700',
                                      fontSize: '1rem',
                                      lineHeight: '1.4',
                                      flex: 1
                                    }}>
                                      {project.name}
                                    </h6>
                                  </div>
                                  
                                  <div style={{
                                    paddingLeft: '38px',
                                    fontSize: '0.9rem',
                                    color: '#475569',
                                    lineHeight: '1.6'
                                  }}>
                                    <div style={{
                                      marginBottom: '8px',
                                      display: 'flex',
                                      alignItems: 'flex-start'
                                    }}>
                                      <strong style={{
                                        color: '#1879be',
                                        minWidth: '70px',
                                        flexShrink: 0
                                      }}>Période:</strong>
                                      <span style={{flex: 1}}>{project.period}</span>
                                    </div>
                                    <div style={{
                                      display: 'flex',
                                      alignItems: 'flex-start'
                                    }}>
                                      <strong style={{
                                        color: '#1879be',
                                        minWidth: '70px',
                                        flexShrink: 0
                                      }}>Client:</strong>
                                      <span style={{flex: 1, fontWeight: '600', color: '#1e334e'}}>
                                        {project.client}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                </MapContainer>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    background: 'white',
    fontFamily: "'Inter', sans-serif"
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    gap: '60px',
    alignItems: 'center'
  },
  textCol: {
    paddingRight: '20px',
  },
  badge: {
    color: '#1879be',
    fontWeight: '700',
    fontSize: '0.9rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '15px',
    display: 'block'
  },
  title: {
    fontSize: '2.5rem',
    color: '#1e334e',
    fontWeight: '900',
    fontFamily: "'Julius Sans One', sans-serif",
    marginBottom: '25px'
  },
  text: {
    fontSize: '1.1rem',
    color: '#64748b',
    lineHeight: '1.8',
    marginBottom: '30px',
    textAlign: 'justify'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '40px'
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#334155',
    marginBottom: '15px',
    fontWeight: '500'
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: '#1e334e',
    color: 'white',
    padding: '16px 36px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1rem',
    transition: 'all 0.3s',
    boxShadow: '0 10px 20px rgba(30, 51, 78, 0.2)'
  },
  mapCol: {
     height: '500px'
  },
  mapWrapper: {
    height: '100%',
    width: '100%',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
    border: '4px solid white'
  }
};