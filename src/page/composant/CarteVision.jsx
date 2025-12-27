import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { ArrowRight, MapPin } from 'lucide-react';
import L from "leaflet";

// Fix Leaflet marker icon issue
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41]
});

export default function CarteVision() {
  const projects = [
    {
      id: 1,
      name: "Contribution à la reforestation par le développement de l'Agroforesterie dans la filière Café-Cacao",
      period: "Mars 2024 – Juin 2025",
      client: "Conseil du Café-Cacao",
      description: "<strong>Lieu :</strong> Duekoue",
      position: [6.35, -7.45],
    },
    {
      id: 2,
      name: "Contribution à la reforestation par le développement de l'Agroforesterie dans la filière Café-Cacao",
      period: "Mars 2024 – Juin 2025",
      client: "Conseil du Café-Cacao",
      description: "<strong>Lieu :</strong> Guiglo",
      position: [6.25, -7.65],
    },
    {
      id: 3,
      name: "Contribution à la reforestation par le développement de l'Agroforesterie dans la filière Café-Cacao",
      period: "Mars 2024 – Juin 2025",
      client: "Conseil du Café-Cacao",
      description: "<strong>Lieu :</strong> Tai",
      position: [6.45, -7.85],
    },
    {
      id: 4,
      name: "Contribution à la reforestation par le développement de l'Agroforesterie dans la filière Café-Cacao",
      period: "Mars 2024 – Juin 2025",
      client: "Conseil du Café-Cacao",
      description: "<strong>Lieu :</strong> Blolequin",
      position: [6.05, -7.65],
    },
    {
      id: 5,
      name: "Contribution à la reforestation par le développement de l'Agroforesterie dans la filière Café-Cacao",
      period: "Mars 2024 – Juin 2025",
      client: "Conseil du Café-Cacao",
      description: "<strong>Lieu :</strong> Toulepleu",
      position: [5.95, -7.55],
    },
    {
      id: 6,
      name: "Contribution à la reforestation par le développement de l'Agroforesterie dans la filière Café-Cacao",
      period: "Mars 2024 – Juin 2025",
      client: "Conseil du Café-Cacao",
      description: "<strong>Lieu :</strong> Bangolo",
      position: [6.55, -7.25],
    },
    {
      id: 7,
      name: "Contribution à la reforestation par le développement de l'Agroforesterie dans la filière Café-Cacao",
      period: "Mars 2024 – Juin 2025",
      client: "Conseil du Café-Cacao",
      description: "<strong>Lieu :</strong> Kouibly",
      position: [6.5, -7.35],
    },
    {
      id: 8,
      name: "Contribution à la reforestation par le développement de l'Agroforesterie dans la filière Café-Cacao",
      period: "Mars 2024 – Juin 2025",
      client: "Conseil du Café-Cacao",
      description: "<strong>Lieu :</strong> Man",
      position: [7.25, -7.55],
    },
    {
      id: 9,
      name: "Contribution à la reforestation par le développement de l'Agroforesterie dans la filière Café-Cacao",
      period: "Mars 2024 – Juin 2025",
      client: "Conseil du Café-Cacao",
      description: "<strong>Lieu :</strong> Danane",
      position: [6.75, -7.65],
    },
    {
      id: 10,
      name: "Contribution à la reforestation par le développement de l'Agroforesterie dans la filière Café-Cacao",
      period: "Mars 2024 – Juin 2025",
      client: "Conseil du Café-Cacao",
      description: "<strong>Lieu :</strong> Sipilou",
      position: [6.15, -7.75],
    },
    {
      id: 11,
      name: "Contribution à la reforestation par le développement de l'Agroforesterie dans la filière Café-Cacao",
      period: "Mars 2024 – Juin 2025",
      client: "Conseil du Café-Cacao",
      description: "<strong>Lieu :</strong> Touba",
      position: [6.45, -7.45],
    },
    {
      id: 12,
      name: "Production et fourniture de plants forestiers et fruitiers",
      period: "Jan 2023 – juin 2025",
      client: "PUR PROJET",
      description: "<strong>Lieu :</strong> Fresco",
      position: [4.95, -6.15],
    },
    {
      id: 13,
      name: "Production et fourniture de plants forestiers et fruitiers",
      period: "Jan 2023 – juin 2025",
      client: "PUR PROJET",
      description: "<strong>Lieu :</strong> Lakota",
      position: [5.25, -5.75],
    },
    {
      id: 14,
      name: "Production et fourniture de plants forestiers et fruitiers",
      period: "Jan 2023 – juin 2025",
      client: "PUR PROJET",
      description: "<strong>Lieu :</strong> Sassandra",
      position: [5.2, -6.05],
    },
    {
      id: 15,
      name: "Production et fourniture de plants forestiers et fruitiers",
      period: "Jan 2023 – juin 2025",
      client: "PUR PROJET",
      description: "<strong>Lieu :</strong> Aboisso",
      position: [5.45, -3.25],
    },
    {
      id: 16,
      name: "Fourniture de plants forestiers et mise en place des systèmes agroforestiers",
      period: "Jan – Oct 2023",
      client: "AGROMAP",
      description: "<strong>Lieu :</strong> Vavoua (Forêt classée du Haut Sassandra)",
      position: [7.3, -6.45],
    },
    {
      id: 17,
      name: "Projet de reforestation communautaire",
      period: "Janv 2021 – Juin 2025",
      client: "ETG/BEYOND BEANS",
      description: "<strong>Lieu :</strong> Daloa",
      position: [6.85, -6.45],
    },
    {
      id: 18,
      name: "Projet de reforestation communautaire",
      period: "Janv 2021 – Juin 2025",
      client: "ETG/BEYOND BEANS",
      description: "<strong>Lieu :</strong> Vavoua",
      position: [7.3, -6.45],
    },
    {
      id: 19,
      name: "Projet de reforestation communautaire",
      period: "Janv 2021 – Juin 2025",
      client: "ETG/BEYOND BEANS",
      description: "<strong>Lieu :</strong> Man",
      position: [7.25, -7.55],
    },
    {
      id: 20,
      name: "Projet de reforestation communautaire",
      period: "Janv 2021 – Juin 2025",
      client: "ETG/BEYOND BEANS",
      description: "<strong>Lieu :</strong> Bouaflé",
      position: [6.55, -5.95],
    },
    {
      id: 21,
      name: "Projet de reforestation communautaire",
      period: "Janv 2021 – Juin 2025",
      client: "ETG/BEYOND BEANS",
      description: "<strong>Lieu :</strong> Séguéla",
      position: [7.85, -6.65],
    },
    {
      id: 22,
      name: "Projet de renforcement de la chaine d'approvisionnement de la coopérative SOCAK KATANA",
      period: "Jan-mai 2023",
      client: "Société Coopérative SOCAK KATANA",
      description: "<strong>Lieu :</strong> Duékoué",
      position: [6.35, -7.45],
    },
    {
      id: 23,
      name: "Projet de renforcement de la chaine d'approvisionnement de la coopérative SOCAK KATANA",
      period: "Jan-mai 2023",
      client: "Société Coopérative SOCAK KATANA",
      description: "<strong>Lieu :</strong> Bangolo",
      position: [6.55, -7.25],
    },
    {
      id: 24,
      name: "Projet de renforcement de la chaine d'approvisionnement de la coopérative SOCAK KATANA",
      period: "Jan-mai 2023",
      client: "Société Coopérative SOCAK KATANA",
      description: "<strong>Lieu :</strong> Kouibly",
      position: [6.5, -7.35],
    },
    {
      id: 25,
      name: "Projet de renforcement de la chaine d'approvisionnement de la coopérative SOCAK KATANA",
      period: "Jan-mai 2023",
      client: "Société Coopérative SOCAK KATANA",
      description: "<strong>Lieu :</strong> Biankouma",
      position: [7.75, -7.55],
    },
    {
      id: 26,
      name: "Projet de renforcement de la chaine d'approvisionnement de la coopérative SOCAK KATANA",
      period: "Jan-mai 2023",
      client: "Société Coopérative SOCAK KATANA",
      description: "<strong>Lieu :</strong> Danané",
      position: [6.75, -7.65],
    },
    {
      id: 27,
      name: "Projet de renforcement de la chaine d'approvisionnement de la coopérative SOCAK KATANA",
      period: "Jan-mai 2023",
      client: "Société Coopérative SOCAK KATANA",
      description: "<strong>Lieu :</strong> Touba",
      position: [6.45, -7.45],
    },
    {
      id: 28,
      name: "Projet de renforcement de la chaine d'approvisionnement de la coopérative SOCAK KATANA",
      period: "Jan-mai 2023",
      client: "Société Coopérative SOCAK KATANA",
      description: "<strong>Lieu :</strong> Facobly",
      position: [6.4, -7.35],
    },
    {
      id: 29,
      name: "Projet de production et de livraison de plants forestiers et fruitiers",
      period: "Jan 2023 – Juin 2025",
      client: "ETG/BEYOND BEANS",
      description: "<strong>Lieu :</strong> Daloa",
      position: [6.85, -6.45],
    },
    {
      id: 30,
      name: "Projet de production et de livraison de plants forestiers et fruitiers",
      period: "Jan 2023 – Juin 2025",
      client: "ETG/BEYOND BEANS",
      description: "<strong>Lieu :</strong> Vavoua",
      position: [7.3, -6.45],
    },
    {
      id: 31,
      name: "Projet de production et de livraison de plants forestiers et fruitiers",
      period: "Jan 2023 – Juin 2025",
      client: "ETG/BEYOND BEANS",
      description: "<strong>Lieu :</strong> San pedro",
      position: [4.75, -6.65],
    },
    {
      id: 32,
      name: "Projet de production et de livraison de plants forestiers et fruitiers",
      period: "Jan 2023 – Juin 2025",
      client: "ETG/BEYOND BEANS",
      description: "<strong>Lieu :</strong> Grabo",
      position: [4.85, -6.75],
    },
    {
      id: 33,
      name: "Projet de production et de livraison de plants forestiers et fruitiers",
      period: "Jan 2023 – Juin 2025",
      client: "ETG/BEYOND BEANS",
      description: "<strong>Lieu :</strong> Kani",
      position: [6.9, -6.35],
    },
    {
      id: 34,
      name: "Projet de production et de livraison de plants forestiers et fruitiers",
      period: "Jan 2023 – Juin 2025",
      client: "ETG/BEYOND BEANS",
      description: "<strong>Lieu :</strong> Bouaflé",
      position: [6.55, -5.95],
    },
    {
      id: 35,
      name: "Projet de production et de livraison de plants forestiers et fruitiers",
      period: "Jan 2023 – Juin 2025",
      client: "ETG/BEYOND BEANS",
      description: "<strong>Lieu :</strong> Sassandra",
      position: [5.2, -6.05],
    },
    {
      id: 36,
      name: "Projet de production et de livraison de plants forestiers et fruitiers",
      period: "Jan 2023 – Juin 2025",
      client: "ETG/BEYOND BEANS",
      description: "<strong>Lieu :</strong> Zoukougneu",
      position: [5.15, -6.1],
    },
    {
      id: 37,
      name: "Projet de production et de livraison de plants forestiers et fruitiers",
      period: "Jan 2023 – Juin 2025",
      client: "ETG/BEYOND BEANS",
      description: "<strong>Lieu :</strong> Seguela",
      position: [7.85, -6.65],
    },
    {
      id: 38,
      name: "Projet de gestion durables des forêts du couvert forestier de la chaine d'approvisionnement Cargill West Africa (Green Project 2)",
      period: "Oct 2020-Sept 2022",
      client: "CARGILL WEST AFRICA",
      description: "<strong>Lieu :</strong> San Pedro",
      position: [4.75, -6.65],
    },
    {
      id: 39,
      name: "Projet de gestion durables des forêts du couvert forestier de la chaine d'approvisionnement Cargill West Africa (Green Project 2)",
      period: "Oct 2020-Sept 2022",
      client: "CARGILL WEST AFRICA",
      description: "<strong>Lieu :</strong> Grand berreby",
      position: [4.85, -6.55],
    },
    {
      id: 40,
      name: "Projet de gestion durables des forêts du couvert forestier de la chaine d'approvisionnement Cargill West Africa (Green Project 2)",
      period: "Oct 2020-Sept 2022",
      client: "CARGILL WEST AFRICA",
      description: "<strong>Lieu :</strong> Sassandra",
      position: [5.2, -6.05],
    },
    {
      id: 41,
      name: "Projet de gestion durables des forêts du couvert forestier de la chaine d'approvisionnement Cargill West Africa (Green Project 2)",
      period: "Oct 2020-Sept 2022",
      client: "CARGILL WEST AFRICA",
      description: "<strong>Lieu :</strong> Grabo",
      position: [4.85, -6.75],
    },
    {
      id: 42,
      name: "Projet de gestion durables des forêts du couvert forestier de la chaine d'approvisionnement Cargill West Africa (Green Project 2)",
      period: "Oct 2020-Sept 2022",
      client: "CARGILL WEST AFRICA",
      description: "<strong>Lieu :</strong> Ouragahio",
      position: [6.35, -5.45],
    },
    {
      id: 43,
      name: "Projet de gestion durables des forêts du couvert forestier de la chaine d'approvisionnement Cargill West Africa (Green Project 2)",
      period: "Oct 2020-Sept 2022",
      client: "CARGILL WEST AFRICA",
      description: "<strong>Lieu :</strong> Issia",
      position: [6.45, -5.95],
    },
    {
      id: 44,
      name: "Projet de gestion durables des forêts du couvert forestier de la chaine d'approvisionnement Cargill West Africa (Green Project 2)",
      period: "Oct 2020-Sept 2022",
      client: "CARGILL WEST AFRICA",
      description: "<strong>Lieu :</strong> Duekoue",
      position: [6.35, -7.45],
    },
    {
      id: 45,
      name: "Projet de gestion durables des forêts du couvert forestier de la chaine d'approvisionnement Cargill West Africa (Green Project 2)",
      period: "Oct 2020-Sept 2022",
      client: "CARGILL WEST AFRICA",
      description: "<strong>Lieu :</strong> Kouibly",
      position: [6.5, -7.35],
    },
    {
      id: 46,
      name: "Projet de participation des jeunes à la prévention et à la gestion des conflits identitaires liés à la profanation et a l'exploitation des forêts sacrées dans le département de Biankouma",
      period: "Aout 2020-Mai 2021",
      client: "PNUD/PBF",
      description: "<strong>Lieu :</strong> Biankouma",
      position: [7.75, -7.55],
    },
    {
      id: 47,
      name: "Sensibilisation des sociétés coopératives et leurs membres dans les zones d'approvisionnement en cacao de CEMOI",
      period: "Janv - Mars 2022",
      client: "CEMOI CI",
      description: "<strong>Lieu :</strong> San Pedro",
      position: [4.75, -6.65],
    },
    {
      id: 48,
      name: "Sensibilisation des sociétés coopératives et leurs membres dans les zones d'approvisionnement en cacao de CEMOI",
      period: "Janv - Mars 2022",
      client: "CEMOI CI",
      description: "<strong>Lieu :</strong> Sassandra",
      position: [5.2, -6.05],
    },
    {
      id: 49,
      name: "Sensibilisation des sociétés coopératives et leurs membres dans les zones d'approvisionnement en cacao de CEMOI",
      period: "Janv - Mars 2022",
      client: "CEMOI CI",
      description: "<strong>Lieu :</strong> Guitry",
      position: [5.85, -5.45],
    },
    {
      id: 50,
      name: "Sensibilisation des sociétés coopératives et leurs membres dans les zones d'approvisionnement en cacao de CEMOI",
      period: "Janv - Mars 2022",
      client: "CEMOI CI",
      description: "<strong>Lieu :</strong> Lakota",
      position: [5.25, -5.75],
    },
    {
      id: 51,
      name: "Sensibilisation des sociétés coopératives et leurs membres dans les zones d'approvisionnement en cacao de CEMOI",
      period: "Janv - Mars 2022",
      client: "CEMOI CI",
      description: "<strong>Lieu :</strong> Divo",
      position: [5.85, -5.35],
    },
    {
      id: 52,
      name: "Sensibilisation des sociétés coopératives et leurs membres dans les zones d'approvisionnement en cacao de CEMOI",
      period: "Janv - Mars 2022",
      client: "CEMOI CI",
      description: "<strong>Lieu :</strong> Aboisso",
      position: [5.45, -3.25],
    },
    {
      id: 53,
      name: "Sensibilisation des sociétés coopératives et leurs membres dans les zones d'approvisionnement en cacao de CEMOI",
      period: "Janv - Mars 2022",
      client: "CEMOI CI",
      description: "<strong>Lieu :</strong> Abengourou",
      position: [6.75, -3.45],
    },
  ];

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
                      url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" // Cleaner map style
                    />
          
                    {projects.map((project) => (
                      <Marker key={project.id} position={project.position} icon={customIcon}>
                        <Popup>
                          <strong>{project.name}</strong><br />
                          <span dangerouslySetInnerHTML={{__html: project.description}} />
                        </Popup>
                        <Tooltip direction="top" offset={[0, -25]} opacity={1} eventHandlers={{ mouseover: (e) => e.target.openTooltip() }}>
                           <div style={{width: '260px', whiteSpace: 'normal', padding: '8px'}}> 
                              <h6 style={{margin: '0 0 8px 0', color: '#1879be', fontWeight: '700', fontSize: '1rem', borderBottom: '1px solid #eee', paddingBottom: '4px'}}>{project.name}</h6>
                              <div style={{fontSize: '0.85rem', marginBottom: '4px', color: '#333', display: 'flex', justifyContent: 'space-between'}}>
                                <strong>Période:</strong> <span>{project.period}</span>
                              </div>
                              <div style={{fontSize: '0.85rem', marginBottom: '4px', color: '#333', display: 'flex', justifyContent: 'space-between'}}>
                                <strong>Client:</strong> <span>{project.client}</span>
                              </div>
                              <p style={{fontSize: '0.8rem', lineHeight: '1.5', margin: 0, color: '#555', textAlign: 'justify'}}>
                                <span dangerouslySetInnerHTML={{__html: project.description}} />
                              </p>
                           </div>
                        </Tooltip>
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', // Standard grid
    gap: '60px',
    alignItems: 'center'
  },
  textCol: {
    paddingRight: '20px',
    textAlign: 'justify'
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
    marginBottom: '30px'
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
    background: '#1e334e', // Dark Blue
    color: 'white',
    padding: '16px 36px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1rem',
    transition: 'all 0.3s',
    boxShadow: '0 10px 20px rgba(30, 51, 78, 0.2)'
  },
  mapCol:  {
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