import React, { useEffect, useState, useRef } from 'react';
import HeaderComposant from './composant/Headercomposant';
import Footer from './composant/Footer';
import Carrosel from './composant/Carrosel'; // The improved slider
import NewsCarousel from './composant/CarroselDomaineIntervention';
import Section2 from './composant/Section2';
import CarteVision from './composant/CarteVision'; // The Map
import { Download, ArrowRight, Eye, Target } from 'lucide-react';
import 'animate.css';

const Reveal = ({ children, animation = 'animate__fadeInUp', delay = '0s', threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold });
    
    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={isVisible ? `animate__animated ${animation}` : 'opacity-0'} style={{ animationDelay: delay, opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s' }}>
      {children}
    </div>
  );
};

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const partners = [
    { image: "/images/partenaire1.png", name: "Partenaire 1" },
    { image: "/images/partenaire2.jpg", name: "Partenaire 2" },
    { image: "/images/partenaire3.jpeg", name: "Partenaire 3" },
    { image: "/images/partenaire4.png", name: "Partenaire 4" }
  ];

  return (
    <div style={styles.pageWrapper}>
      <HeaderComposant />

      {/* 1. Improved SLIDER */}
      <Reveal animation="animate__fadeIn">
        <Carrosel />
      </Reveal>

      {/* 2. PRESENTATION Section (New) */}
      <Reveal animation="animate__fadeInUp">
        <section style={styles.presentationSection}>
            <div style={styles.container}>
                <div style={styles.presentationGrid}>
                    <div style={styles.presentationImageWrapper}>
                        <img 
                          src="logo.png" 
                          alt="Agriculture Durable" 
                          style={styles.presentationImage}
                        />
                    </div>
                    <div style={styles.presentationContent}>
                        <h2 style={styles.presTitle}>NYA AGRITEK <span style={{color: '#f3a31a'}}>Cultivons l’avenir, une récolte à la fois.</span></h2>
                        <div style={styles.presDivider}></div>
                        <p style={styles.presText}>
Société ivoirienne engagée dans la transformation agricole et environnementale, NYA AGRITEK développe des solutions innovantes et adaptées aux réalités du terrain.
Grâce à l’alliance entre expertise technique, technologies modernes et accompagnement de confiance, NYA AGRITEK aide les organisations à améliorer leur performance, renforcer leur résilience et bâtir des modèles durables face aux enjeux actuels et futurs.                        </p>
                        
                        <div style={styles.presButtons}>
                            <a href="/a-propos" style={styles.presBtnPrimary}>
                                En savoir plus <ArrowRight size={18} />
                            </a>
                            <a href="/PLAQUETTE.pdf" target="_blank" rel="noopener noreferrer" style={styles.presBtnSecondary}>
                                <Download size={18} /> Télécharger notre brochure
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </Reveal>

      {/* 2.5. Vision & Mission Section (Design from APropos) */}
      <Reveal animation="animate__fadeInUp">
        <div style={styles.missionVisionSection}>
            <div style={styles.container}>
                <section style={styles.gridSection}>
                    {/* Vision */}
                    <div style={styles.card}>
                        <div style={styles.iconWrapper}>
                           <Eye size={32} color="#1879be" />
                        </div>
                        <h3 style={styles.cardTitle}>Notre Vision</h3>
                        <p style={styles.cardText}>
                           Soutenir le développement rural et agricole durable, c’est bien plus qu’un objectif : c’est notre raison d’être. Chez NYA AGRITEK, nous croyons que la transformation des territoires passe par des partenariats solides et une approche collaborative. Nous travaillons main dans la main avec nos partenaires pour concevoir des solutions innovantes, adaptées à leurs réalités et capables de répondre aux défis actuels tout en anticipant ceux de demain.
                        </p>
                        <div style={styles.quoteBox}>
                            "Soutenir le développement rural et agricole durable en forgeant des partenariats solides et en offrant des solutions novatrices, adaptées aux besoins uniques de nos partenaires, face aux défis actuels et futurs."
                        </div>
                    </div>

                    {/* Mission */}
                    <div style={styles.card}>
                        <div style={styles.iconWrapper}>
                           <Target size={32} color="#f3a31a" />
                        </div>
                        <h3 style={styles.cardTitle}>Notre Mission</h3>
                        <p style={styles.cardText}>
                            Nous combinons expertise stratégique, créativité et technologies pour fournir des prestations sur mesure qui répondent aux besoins uniques de chaque client.
                            Notre engagement envers l'excellence nous permet d'accompagner nos clients à chaque étape de mise en œuvre de leurs projets.
                        </p>
                        <div style={{...styles.quoteBox, borderColor: '#f3a31a'}}>
                            "Notre mission est simple : accompagner nos clients vers le succès."
                        </div>
                    </div>
                </section>
            </div>
        </div>
      </Reveal>

      {/* 3. Domaines Carousel (Slider Domaines) */}
      <Reveal animation="animate__fadeInRight">
        <div style={{background: '#f8fafc', paddingBottom: '60px'}}>
          <NewsCarousel /> 
        </div>
      </Reveal>

      {/* 4. Stats Section */}
      {/* 
      <Reveal animation="animate__fadeInUp">
        <div style={{marginTop: '-40px', position: 'relative', zIndex: 10}}> 
          <Section2 />
        </div>
      </Reveal>
      */}

      {/* 5. MAP (CarteVision) - "La carte maps dois etre tjr disponible" */}
      <Reveal animation="animate__zoomIn">
        <div style={{background: 'white', padding: '0px 0'}}>
           <CarteVision />
        </div>
      </Reveal>

      {/* 6. Partners Section */}
      <Reveal animation="animate__fadeInUp">
        <section style={styles.partnersSection}>
          <div style={styles.container}>
              <h2 style={styles.sectionTitle}>Ils nous font confiance</h2>
              <p style={styles.sectionSubtitle}>
                Nous collaborons avec les acteurs majeurs du développement agricole et rural.
              </p>
              
              <div style={styles.partnersGrid}>
                  {partners.map((p, idx) => (
                    <Reveal key={idx} animation="animate__fadeIn" delay={`${idx * 0.1}s`}>
                      <div style={styles.partnerCard}>
                          <img
                             src={p.image}
                             alt={p.name}
                             style={styles.partnerLogoImage}
                          />
                      </div>
                    </Reveal>
                  ))}
              </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  );
};

const styles = {
  missionVisionSection: {
      background: '#f8fafc',
      padding: '80px 0'
  },
  gridSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '40px',
  },
  card: {
      background: 'white',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      borderTop: '5px solid #1879be'
  },
  iconWrapper: {
      background: '#f0f9ff',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '25px'
  },
  cardTitle: {
      fontSize: '1.5rem',
      color: '#1e334e',
      marginBottom: '15px',
      fontWeight: '700'
  },
  cardText: {
      color: '#64748b',
      lineHeight: '1.6',
      marginBottom: '20px',
        textAlign: 'justify'

  },
  quoteBox: {
      borderLeft: '4px solid #1879be',
      paddingLeft: '15px',
      fontStyle: 'italic',
      color: '#334155',
      fontWeight: '500',
        textAlign: 'justify'

  },
  pageWrapper: {
    fontFamily: "'Inter', sans-serif",
    overflowX: 'hidden'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  
  // Presentation Section Styles
  presentationSection: {
    padding: '100px 0',
    background: 'white',
  },
  presentationGrid: {
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  presentationImageWrapper: {
    flex: '1 1 400px',
    width: '100%'
  },
  presentationImage: {
    width: '100%',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    objectFit: 'cover',
    height: '400px'
  },
  presentationContent: {
    flex: '1 1 400px',
    textAlign: 'left'
  },
  presTitle: {
    fontSize: '2.5rem',
    fontWeight: '900',
    color: '#1e334e',
    marginBottom: '20px',
    fontFamily: "'Julius Sans One', sans-serif"
  },
  presDivider: {
    width: '80px',
    height: '4px',
    background: '#1879be',
    margin: '0 0 30px 0'
  },
  presText: {
    fontSize: '1.2rem',
    color: '#64748b',
    lineHeight: '1.8',
    marginBottom: '50px',
    textAlign: 'justify'
  },
  presButtons: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '20px',
    flexWrap: 'wrap'
  },
  presBtnPrimary: {
    background: '#1879be',
    color: 'white',
    padding: '16px 36px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s',
    boxShadow: '0 10px 20px rgba(24, 121, 190, 0.2)'
  },
  presBtnSecondary: {
    background: 'white',
    color: '#1e334e',
    padding: '16px 36px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    border: '2px solid #e2e8f0',
    transition: 'all 0.3s'
  },

  partnersSection: {
    padding: '80px 0',
    background: '#f8fafc',
    textAlign: 'center'
  },
  sectionTitle: {
    fontSize: '2.2rem',
    color: '#1e334e',
    marginBottom: '15px',
    fontFamily: "'Julius Sans One', sans-serif",
    fontWeight: 'bold'
  },
  sectionSubtitle: {
    color: '#64748b',
    marginBottom: '50px',
    fontSize: '1.1rem'
  },
  partnersGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '40px',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  partnerCard: {
    width: '180px',
    height: '100px',
    opacity: 0.8,
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  partnerLogoImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
    transition: 'all 0.3s ease'
  }
};

export default HomePage;