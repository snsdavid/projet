import React from 'react';
import HeaderComposant from './composant/Headercomposant';
import Footer from './composant/Footer';
import { Lightbulb, Users, Globe, TrendingUp, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
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

const ExpertisePage = () => {
    return (
        <div style={styles.pageWrapper}>
            <HeaderComposant />

            {/* Hero Section */}
            <section style={styles.heroSection}>
                <div style={styles.container}>
                    <span style={styles.heroBadge}>NOTRE EXPERTISE</span>
                    <h1 style={styles.heroTitle}>L'Excellence au Service de l'Agriculture</h1>
                    <p style={styles.heroSubtitle}>
                        NYA AGRITEK déploie un savoir-faire unique, alliant techniques traditionnelles et technologies de pointe pour relever les défis de demain.
                    </p>
                </div>
            </section>

            <div style={styles.container}>
                
                {/* Introduction */}
                <section style={styles.introSection}>
                   <div style={styles.introContent}>
                        <h2 style={styles.sectionTitle}>Une Approche Multidisciplinaire</h2>
                        <div style={styles.divider}></div>
                        <p style={styles.introText}>
NYA AGRITEK est le prolongement et la structuration d'une expertise forgée au travers de projets ambitieux dans la foresterie, la cartographie, l’agriculture et le développement durable.
Cette expérience nous permet aujourd’hui de concevoir des solutions adaptées pour accompagner nos partenaires dans la réussite de leurs projets.
Notre approche repose sur une maîtrise technique solide et une vision tournée vers l’avenir, afin de transformer les défis en opportunités.                        </p>
                   </div>
                </section>

                {/* Map Section */}
                <section style={styles.mapSection}>
                  <div className="container">
                    <div style={styles.mapWrapperFull}>
                       <MapContainer
                           center={[6.8, -5.2]}
                           zoom={8}
                           scrollWheelZoom={false}
                           style={{ height: "600px", width: "100%" }}
                       >
                           <TileLayer
                             attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                             url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" // Cleaner map style
                           />

                           {[
                             // Project 1: Duekoue
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
                             // Project 2: Fresco
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
                             // Project 3: Vavoua
                             {
                               id: 16,
                               name: "Fourniture de plants forestiers et mise en place des systèmes agroforestiers",
                               period: "Jan – Oct 2023",
                               client: "AGROMAP",
                               description: "<strong>Lieu :</strong> Vavoua (Forêt classée du Haut Sassandra)",
                               position: [7.3, -6.45],
                             },
                             // Project 4: Daloa
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
                             // Project 5: Duékoué
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
                             // Project 6: Daloa
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
                             // Project 7: San Pedro
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
                             // Project 8: Biankouma
                             {
                               id: 46,
                               name: "Projet de participation des jeunes à la prévention et à la gestion des conflits identitaires liés à la profanation et a l'exploitation des forêts sacrées dans le département de Biankouma",
                               period: "Aout 2020-Mai 2021",
                               client: "PNUD/PBF",
                               description: "<strong>Lieu :</strong> Biankouma",
                               position: [7.75, -7.55],
                             },
                             // Project 9: San Pedro
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
                           ].map((project) => (
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
                </section> 


                {/* Domains of Intervention */}
                <section style={styles.skillsSection}>
                    <div style={styles.skillsContainer}>
                        <h3 style={styles.skillsTitle}>DOMAINES DE COMPETENCES</h3>
                        <div style={styles.skillsGrid}>
                            {[
                                "Gestion Durable des Écosystèmes Forestiers & Environnementaux",
                                "Production Agricole Intelligente & Gestion du Négoce Agricole",
                                "Études Techniques, Diagnostics & Ingénierie de Projets Agricoles et Forestiers",
                                "Digitalisation Agricole & Intégration de Solutions Technologiques",
                                "Développement Rural, Sécurité Alimentaire & Résilience des Communautés",
                                "Gestion Durable des Ressources Naturelles & Planification Territoriale"
                            ].map((domaine, index) => (
                                <div key={index} style={styles.skillItem}>
                                    <CheckCircle size={20} color="#f3a31a" />
                                    <span>{domaine}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Placeholder for an image since generation failed, use a abstract shape or solid color div representation or existing image if possible. 
                        Using a gradient box for modern abstract feel. 
                    */}
                    <div style={styles.visualBox}>
                         <div style={styles.visualContent}>
                            <Users size={60} color="white" />
                            <h4 style={{color:'white', marginTop:'20px'}}>+17 Experts</h4>
                            <p style={{color:'rgba(255,255,255,0.8)'}}>Pour vous accompagner vers le succès</p>
                         </div>
                    </div>
                </section>

                {/* CTA */}
                <section style={styles.ctaSection}>
                    <h2 style={styles.ctaTitle}>Besoin d'une expertise pointue ?</h2>
                    <a href="/contact" style={styles.ctaButton}>Solliciter nos experts</a>
                </section>

            </div>

            <Footer />
        </div>
    );
};

const styles = {
    pageWrapper: {
        background: '#f8fafc',
        fontFamily: "'Inter', sans-serif",
        minHeight: '100vh'
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
    },
    heroSection: {
        background: '#1879be',
        padding: '160px 0 100px',
        textAlign: 'center',
        color: 'white'
    },
    heroBadge: {
        background: 'rgba(255,255,255,0.2)',
        padding: '8px 20px',
        borderRadius: '30px',
        fontSize: '0.85rem',
        fontWeight: '700',
        letterSpacing: '1px',
        marginBottom: '20px',
        display: 'inline-block'
    },
    heroTitle: {
        fontSize: '3.5rem',
        fontWeight: '900',
        fontFamily: "'Julius Sans One', sans-serif",
        marginBottom: '20px',
        lineHeight: '1.2'
    },
    heroSubtitle: {
        fontSize: '1.2rem',
        opacity: 0.9,
        fontWeight: '300',
        maxWidth: '700px',
        margin: '0 auto',
        lineHeight: '1.6'
    },
    introSection: {
        padding: '80px 0',
        textAlign: 'center'
    },
    introContent: {
        maxWidth: '800px',
        margin: '0 auto'
    },
    sectionTitle: {
        fontSize: '2.2rem',
        color: '#1e334e',
        marginBottom: '20px',
        fontFamily: "'Julius Sans One', sans-serif",
        fontWeight: '800'
    },
    divider: {
        width: '60px',
        height: '4px',
        background: '#f3a31a',
        margin: '0 auto 30px'
    },
    introText: {
        fontSize: '1.1rem',
        color: '#64748b',
        lineHeight: '1.8'
    },
    gridSection: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        marginBottom: '100px'
    },
    card: {
        background: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        border: '1px solid #f1f5f9',
        transition: 'transform 0.3s ease'
    },
    iconWrapper: {
        width: '60px',
        height: '60px',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '25px'
    },
    cardTitle: {
        fontSize: '1.4rem',
        color: '#1e334e',
        marginBottom: '15px',
        fontWeight: '700'
    },
    cardText: {
        color: '#64748b',
        lineHeight: '1.6',
        fontSize: '0.95rem'
    },
    skillsSection: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: '60px',
        marginBottom: '100px',
        background: 'white',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
    },
    skillsContainer: {
        padding: '60px'
    },
    skillsTitle: {
        fontSize: '1.8rem',
        color: '#1e334e',
        marginBottom: '40px',
        fontFamily: "'Julius Sans One', sans-serif",
        fontWeight: 'bold'
    },
    skillsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
    },
    skillItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        color: '#334155',
        fontWeight: '500',
        fontSize: '1rem'
    },
    visualBox: {
        background: 'linear-gradient(135deg, #1879be 0%, #0b466fff 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px'
    },
    visualContent: {
        color: 'white'
    },
    ctaSection: {
        textAlign: 'center',
        padding: '60px 0 100px'
    },
    ctaTitle: {
        fontSize: '1.8rem',
        color: '#1e334e',
        marginBottom: '30px',
        fontFamily: "'Julius Sans One', sans-serif"
    },
    ctaButton: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f3a31a',
        color: 'white',
        padding: '16px 40px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: '700',
        fontSize: '1.1rem',
        transition: 'all 0.3s',
        boxShadow: '0 10px 20px rgba(243, 163, 26, 0.2)'
    },
    mapSection: {
      padding: '100px 0',
      background: 'white',
      fontFamily: "'Inter', sans-serif"
    },
    mapWrapperFull: {
      height: '600px',
      width: '100%',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
      border: '4px solid white'
    }
};

export default ExpertisePage;
