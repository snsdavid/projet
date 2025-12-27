import React from 'react';
import HeaderComposant from './composant/Headercomposant';
import Footer from './composant/Footer';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';

const NosRealisations = () => {
  const projects = [
    {
      id: 1,
      title: "Projet de production et de livraison de plants forestiers et fruitiers",
      category: "Foresterie & Environnement",
      location: "Guibéroua, Gagnoa",
      year: "Janv 2025",
      image: "/images/realisation1.png",
      description: "Implantation d'un programme de production et de livraison de plants forestiers et fruitiers de qualité supérieure pour les coopératives partenaires.<br/><br/><strong>Partenaire :</strong> ETG/BEYOND BEANS<br/><strong>Date de démarrage :</strong> Janvier 2025<br/><strong>Durée :</strong> 07 mois<br/><strong>Lieu :</strong> Guibéroua, Gagnoa",
      results: ["07 mois de collaboration", "Coopératives partenaires", "Plants forestiers et fruitiers"]
    },
    {
      id: 2,
      title: "Production et fourniture de plants forestiers et fruitiers",
      category: "Foresterie & Environnement",
      location: "Saioua, Daloa",
      year: "Novembre 2024",
      image: "/images/realisation2.png",
      description: "Développement d'une chaîne de valeur pour la production et la fourniture de plants forestiers et fruitiers adaptés au contexte local.<br/><br/><strong>Partenaire :</strong> PUR<br/><strong>Date de démarrage :</strong> Novembre 2024<br/><strong>Durée :</strong> 08 mois<br/><strong>Lieu :</strong> Saioua, Daloa",
      results: ["08 mois de projet", "Partenariat PUR", "Plants forestiers et fruitiers"]
    },
    {
      id: 3,
      title: "Test d'efficacité de biostimulants sur les Cacaoyers en milieu paysan",
      category: "Etude & Conseil",
      location: "Man",
      year: "Dec 2025",
      image: "/images/realisation3.png",
      description: "Évaluation scientifique de l'efficacité des biostimulants sur la productivité et la résilience des cacaoyers dans les conditions réelles des producteurs.<br/><br/><strong>Partenaire :</strong> ACADIAN PLANT HEALTH<br/><strong>Date de démarrage :</strong> Décembre 2025<br/><strong>Durée :</strong> 13 mois<br/><strong>Lieu :</strong> Man",
      results: ["13 mois de test", "Biostimulants cacaoyers", "Partenariat ACADIAN"]
    }
  ];

  return (
    <div style={styles.pageWrapper}>
      <HeaderComposant />
      
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <span style={styles.heroBadge}>PORTFOLIO</span>
            <h1 style={styles.heroTitle}>Nos Projets</h1>
            <p style={styles.heroSubtitle}>
              Découvrez comment NYA AGRITEK transforme le paysage agricole ivoirien à travers des projets concrets, durables et innovants.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={styles.projectsSection}>
        <div style={styles.container}>
          <div style={styles.grid}>
            {projects.map((project, index) => (
              <div key={project.id} style={styles.card}>
                <div style={styles.imageWrapper}>
                   <img src={project.image} alt={project.title} style={styles.image} />
                   <div style={styles.categoryBadge}>{project.category}</div>
                </div>
                
                <div style={styles.cardBody}>
                  <div style={styles.metaInfo}>
                    <span style={styles.metaItem}>
                        <MapPin size={16} /> {project.location}
                    </span>
                    <span style={styles.metaItem}>
                        <Calendar size={16} /> {project.year}
                    </span>
                  </div>

                  <h3 style={styles.cardTitle}>{project.title}</h3>
                  <p style={styles.cardDesc} dangerouslySetInnerHTML={{__html: project.description}}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
          <div style={styles.container}>
              <div style={styles.ctaContent}>
                  <h2 style={styles.ctaTitle}>Vous avez un projet ?</h2>
                  <p style={styles.ctaText}>
                      Nos experts sont prêts à vous accompagner dans la réalisation de vos objectifs agricoles et environnementaux.
                  </p>
                  <a href="/contact" style={styles.ctaButton}>Discutons-en</a>
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

const styles = {
    pageWrapper: {
        background: '#f8fafc',
        minHeight: '100vh',
        fontFamily: "'Inter', sans-serif"
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
    },
    heroSection: {
        background: '#1879be', // Solid Primary Blue
        padding: '160px 0 100px',
        color: 'white',
        textAlign: 'center'
    },
    heroContent: {
        maxWidth: '800px',
        margin: '0 auto'
    },
    heroBadge: {
        background: 'rgba(255, 255, 255, 0.2)',
        padding: '8px 16px',
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
        marginBottom: '20px',
        fontFamily: "'Julius Sans One', sans-serif", // Keeping brand font for titles
        lineHeight: '1.2'
    },
    heroSubtitle: {
        fontSize: '1.25rem',
        opacity: '0.9',
        lineHeight: '1.6',
        fontWeight: '300'
    },
    projectsSection: {
        padding: '80px 0',
        marginTop: '-60px' // Overlap effect
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '40px'
    },
    card: {
        background: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
        transition: 'transform 0.3s ease',
        border: '1px solid #f1f5f9'
    },
    cardBody: {
        padding: '30px'
    },
    imageWrapper: {
        position: 'relative',
        height: '260px',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease',
    },
    categoryBadge: {
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        background: '#f3a31a', // Secondary Orange
        color: 'white',
        padding: '6px 14px',
        borderRadius: '8px',
        fontSize: '0.8rem',
        fontWeight: '700',
        textTransform: 'uppercase'
    },
    metaInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '15px',
        color: '#94a3b8',
        fontSize: '0.9rem'
    },
    metaItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
    },
    cardTitle: {
        fontSize: '1.5rem',
        color: '#1e334e', // Dark Blue
        marginBottom: '15px',
        fontWeight: '700',
        fontFamily: "'Julius Sans One', sans-serif"
    },
    cardDesc: {
        color: '#64748b',
        lineHeight: '1.6',
        marginBottom: '20px',
        fontSize: '0.95rem'
    },
    resultsContainer: {
        background: '#f8fafc',
        padding: '15px',
        borderRadius: '12px',
        marginBottom: '0px'
    },
    resultItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '8px',
        fontSize: '0.9rem',
        color: '#475569',
        fontWeight: '500'
    },
    ctaSection: {
        background: '#1e334e', // Dark Blue
        padding: '80px 0',
        textAlign: 'center',
        marginTop: '0px'
    },
    ctaContent: {
        maxWidth: '700px',
        margin: '0 auto'
    },
    ctaTitle: {
        color: 'white',
        fontSize: '2.5rem',
        marginBottom: '20px',
        fontFamily: "'Julius Sans One', sans-serif"
    },
    ctaText: {
        color: '#cbd5e1',
        fontSize: '1.1rem',
        marginBottom: '40px',
        lineHeight: '1.6'
    },
    ctaButton: {
        display: 'inline-block',
        background: '#f3a31a', // Orange
        color: 'white',
        padding: '16px 40px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: '700',
        fontSize: '1.1rem',
        transition: 'all 0.3s'
    }
};

export default NosRealisations;
