import React from 'react';
import HeaderComposant from './composant/Headercomposant';
import Footer from './composant/Footer';
import { Check, ArrowRight } from 'lucide-react';

const DomainesInterventionPage = () => {
  const domains = [
    {
      id: "foresterie",
      title: "FORESTERIE & ENVIRONNEMENT",
      description: "Accompagner les acteurs publics, privés et communautaires dans la mise en conformité réglementaire, la mise en œuvre de solutions fondées sur la nature et la gestion durable des écosystèmes, en s’appuyant sur des approches participatives, des outils de suivi terrain et des technologies de cartographie et de télédétection adaptées aux réalités locales.",
      image: "/images/domain_forestry.png",
      points: [
        "Appui à la conformité réglementaire et à la gouvernance forestière",
        "Solutions fondées sur la nature : production végétale et restauration des écosystèmes",
        "Cartographie opérationnelle et suivi forestier assisté par télédétection"
      ]
    },
    {
      id: "agriculture",
      title: "AGRICULTURE",
      description: "Accompagner la création, l’optimisation et la pérennisation des exploitations agricoles en offrant des solutions techniques, économiques et humaines intégrées, afin d’améliorer la productivité, la rentabilité et la durabilité des systèmes de production.",
      image: "/images/domain_agriculture.png",
      points: [
        "Développement et gestion des exploitations agricoles",
        "Appui-conseil et accompagnement de projets agricoles",
        "Formation et transfert de compétences agricoles"
      ]
    },
    {
      id: "negoce",
      title: "NEGOCE AGRICOLE",
      description: "Faciliter l’accès aux marchés, optimiser la chaîne de valeur et garantir la qualité des produits agricoles à travers des services intégrés de commercialisation, intermédiation et logistique, adaptés aux réalités des producteurs et aux exigences des acheteurs.",
      image: "/images/domain_trading.png",
      points: [
        "Commercialisation et valorisation des produits agricoles",
        "Intermédiation et partenariat marchand",
        "Logistique et gestion de la qualité"
      ]
    },
    {
      id: "etude",
      title: "ETUDE ET CONSEIL",
      description: "Fournir aux acteurs du secteur agricole des analyses fiables, des projets structurés et des solutions de financement adaptées, afin de sécuriser leurs investissements, optimiser leurs performances et renforcer leur compétitivité sur les marchés locaux et internationaux.",
      image: "/images/domain_cooperative.png", 
      points: [
        "Etudes de marché et analyse de filières agricoles",
        "Etudes de faisabilité et montage de projets agricoles",
        "Conseil en financement agricole et accompagnement institutionnel"
      ]
    },
    {
      id: "digitalisation",
      title: "DIGITALISATION AGRICOLE",
      description: "Accélérer la transformation numérique du secteur agricole en concevant, déployant et accompagnant des solutions digitales intégrées qui optimisent la gestion des exploitations, renforcent la traçabilité et facilitent l’accès aux marchés, tout en développant les compétences numériques des acteurs.",
      image: "/images/domain_smart_farming.png",
      points: [
        "Conception et déploiement de solutions numériques pour la gestion agricole",
        "Digitalisation des circuits de commercialisation et de traçabilité des produits agricoles",
        "Formation digitale et accompagnement à l’usage des outils numériques agricoles"
      ]
    }
  ];

  return (
    <div style={styles.pageWrapper}>
      <HeaderComposant />
      
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <span style={styles.heroBadge}>NOS DOMAINES</span>
            <h1 style={styles.heroTitle}>Nos Domaines d'Intervention</h1>
            <p style={styles.heroSubtitle}>
              Une expertise 360° pour accompagner la transformation durable du secteur agricole et environnemental en Côte d'Ivoire.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Quote */}
      <div style={styles.introSection}>
          <div style={styles.container}>
           <p style={styles.introText}>
      "Entre terrain, data et technologie, nous transformons les défis agricoles et environnementaux en opportunités durables."           </p>
          </div>
      </div>

      {/* Domains List */}
      <section style={styles.domainsContainer}>
        <div style={styles.container}>
          {domains.map((domain, index) => (
            <div key={domain.id} style={{
                ...styles.domainCard,
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
            }}>
              {/* Image Side */}
              <div style={styles.imageCol}>
                  <div style={styles.imageWrapper}>
                      <img src={domain.image} alt={domain.title} style={styles.domainImage} />
                      <div style={styles.imageOverlay}></div>
                  </div>
              </div>

              {/* Content Side */}
              <div style={styles.contentCol}>
                <div style={styles.contentPadding}>
                    <h2 style={styles.domainTitle}>{domain.title}</h2>
                    <p style={styles.domainDesc}>{domain.description}</p>

                    <div style={styles.activityTitle}>ACTIVITES</div>

                    <ul style={styles.pointsList}>
                        {domain.points.map((point, idx) => (
                            <li key={idx} style={styles.pointItem}>
                                <div style={styles.iconBox}>
                                    <Check size={18} color="white" />
                                </div>
                                <span style={styles.pointText}>{point}</span>
                            </li>
                        ))}
                    </ul>

                    {/* <button style={styles.learnMoreBtn}>En savoir plus <ArrowRight size={16}/></button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
            <h2 style={styles.ctaTitle}>Prêt à collaborer avec nous ?</h2>
            <p style={styles.ctaText}>Contactez notre équipe pour discuter de vos besoins spécifiques.</p>
            <a href="/contact" style={styles.ctaButton}>Contactez-nous</a>
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
        fontFamily: "'Inter', sans-serif",
        overflowX: 'hidden'
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
    },
    heroSection: {
        background: '#1879be',
        padding: '180px 0 100px',
        color: 'white',
        textAlign: 'center',
        position: 'relative'
    },
    heroBadge: {
        background: 'rgba(255,255,255,0.15)',
        padding: '8px 20px',
        borderRadius: '30px',
        fontSize: '0.9rem',
        fontWeight: '700',
        letterSpacing: '2px',
        marginBottom: '25px',
        display: 'inline-block',
        textTransform: 'uppercase'
    },
    heroTitle: {
        fontSize: '3.5rem',
        fontWeight: '900',
        marginBottom: '20px',
        fontFamily: "'Julius Sans One', sans-serif",
        lineHeight: '1.2'
    },
    heroSubtitle: {
        fontSize: '1.2rem',
        opacity: 0.9,
        maxWidth: '700px',
        margin: '0 auto',
        lineHeight: '1.6',
        fontWeight: '300'
    },
    introSection: {
        textAlign: 'center',
        padding: '80px 0',
        background: 'white'
    },
    introText: {
        fontSize: '1.8rem',
        color: '#1e334e',
        fontFamily: "'Julius Sans One', sans-serif",
        fontWeight: 'bold',
        maxWidth: '900px',
        margin: '0 auto',
        lineHeight: '1.4'
    },
    domainsContainer: {
        paddingBottom: '100px'
    },
    domainCard: {
        display: 'flex',
        alignItems: 'center',
        background: 'white',
        borderRadius: '24px',
        marginBottom: '80px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        minHeight: '500px'
    },
    imageCol: {
        flex: 1,
        height: '100%',
        minHeight: '500px'
    },
    imageWrapper: {
        height: '100%',
        width: '100%',
        position: 'relative',
        minHeight: '500px'
    },
    domainImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: 0
    },
    imageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2))'
    },
    contentCol: {
        flex: 1,
        display: 'flex',
        alignItems: 'center'
    },
    contentPadding: {
        padding: '60px'
    },
    domainTitle: {
        fontSize: '2rem',
        color: '#1e334e',
        marginBottom: '20px',
        fontWeight: '800',
        fontFamily: "'Julius Sans One', sans-serif",
        borderLeft: '5px solid #f3a31a', // Orange accent
        paddingLeft: '20px',
        lineHeight: '1.3'
    },
    domainDesc: {
        fontSize: '1.1rem',
        color: '#64748b',
        marginBottom: '30px',
        lineHeight: '1.6',
        textAlign: 'justify'
    },
    activityTitle: {
        background: '#1879be', // Blue background
        color: 'white', // White text
        padding: '5px 15px',
        borderRadius: '5px',
        fontSize: '1.1rem',
        fontWeight: '600',
        marginBottom: '20px',
        textAlign: 'left',
        display: 'inline-block'
    },
    pointsList: {
        listStyle: 'none',
        padding: 0,
        margin: 0
    },
    pointItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '15px',
        marginBottom: '20px'
    },
    iconBox: {
        background: '#1879be', // Primary Blue
        borderRadius: '50%',
        width: '28px',
        height: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        marginTop: '2px'
    },
    pointText: {
        color: '#334155',
        fontSize: '1rem',
        lineHeight: '1.5',
        fontWeight: '500'
    },
    learnMoreBtn: {
        background: 'transparent',
        border: 'none',
        color: '#f3a31a',
        fontWeight: '700',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        marginTop: '10px',
        padding: 0
    },
    ctaSection: {
        background: '#1e334e', // Dark Blue
        padding: '80px 0',
        textAlign: 'center'
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
        marginBottom: '40px'
    },
    ctaButton: {
        display: 'inline-block',
        background: '#f3a31a',
        color: 'white',
        padding: '16px 40px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: '700',
        fontSize: '1.1rem',
        transition: 'all 0.3s'
    }
};

export default DomainesInterventionPage;
