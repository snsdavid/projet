import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setCardsPerView(1);
      } else if (width >= 600 && width < 900) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const articles = [
    {
      id: 1,
      image: "/images/domain_forestry.png",
      title: "FORESTERIE & ENVIRONNEMENT",
      description: "Accompagner les acteurs publics et privés dans la conformité réglementaire et la gestion durable des écosystèmes...",
      link: "/domaine-d-intervention/FORESTERIE_ENVIRONNEMENT"
    },
    {
      id: 2,
      image: "/images/domain_agriculture.png",
      title: "AGRICULTURE",
      description: "Accompagner la création, l’optimisation et la pérennisation des exploitations agricoles en offrant des solutions techniques...",
      link: "/domaine-d-intervention/AGRICULTURE"
    },
    {
      id: 3,
      image: "/images/domain_trading.png",
      title: "NEGOCE AGRICOLE",
      description: "Faciliter l’accès aux marchés, optimiser la chaîne de valeur et garantir la qualité des produits agricoles à travers des services...",
      link: "/domaine-d-intervention/NEGOCE_AGRICOLE"
    },
    {
      id: 4,
      image: "/images/domain_cooperative.png",
      title: "ETUDE ET CONSEIL",
      description: "Analyses stratégiques, études de faisabilité et montage de projets pour sécuriser vos investissements...",
      link: "/domaine-d-intervention/ETUDE_ET_CONSEIL"
    },
    {
      id: 5,
      image: "/images/domain_smart_farming.png",
      title: "DIGITALISATION AGRICOLE",
      description: "Solutions numériques innovantes pour la gestion, la traçabilité et la performance des exploitations...",
      link: "/domaine-d-intervention/DIGITALISATION_AGRICOLE"
    }
  ];

  const totalSlides = articles.length;

  const nextSlide = () => {
    if (currentIndex < totalSlides - cardsPerView) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const getTranslateX = () => {
     // Calculate width percentage to shift based on cardsPerView
     const cardWidth = 100 / cardsPerView;
     return currentIndex * cardWidth;
  };

  return (
    <div style={styles.sectionWrapper}>
      <div style={styles.container}>
        <div style={styles.headerRow}>
           <div>
              <span style={styles.badge}>NOS PÔLES D'ACTIVITÉ</span>
              <h2 style={styles.mainTitle}>Nos Domaines d'Intervention</h2>
           </div>
           <div style={styles.controls}>
              <button 
                style={{...styles.controlBtn, ...(currentIndex === 0 ? styles.disabledBtn : {})}} 
                onClick={prevSlide}
                disabled={currentIndex === 0}
              >
                  <ChevronLeft size={24} />
              </button>
              <button 
                style={{...styles.controlBtn, ...(currentIndex >= totalSlides - cardsPerView ? styles.disabledBtn : {})}} 
                onClick={nextSlide}
                disabled={currentIndex >= totalSlides - cardsPerView}
              >
                  <ChevronRight size={24} />
              </button>
           </div>
        </div>

        <div style={styles.carouselContainer}>
            <div style={{
              ...styles.track,
              transform: `translateX(-${getTranslateX()}%)`,
              // Fix width calculation to ensure proper sliding
              width: `${(totalSlides / cardsPerView) * 100}%` 
            }}>
                {articles.map((article) => (
                    <div key={article.id} style={{
                        ...styles.cardWrapper,
                        width: `${100 / totalSlides}%`
                    }}>
                        <div style={styles.card}>
                            <div style={styles.imageBlock}>
                                <img src={article.image} alt={article.title} style={styles.image} />
                                <div style={styles.overlay}></div>
                            </div>
                            <div style={styles.content}>
                                <h3 style={styles.cardTitle}>{article.title}</h3>
                                <p style={styles.cardDesc}>{article.description}</p>
                                <a href="/domaines-intervention" style={styles.linkBtn}>
                                    En savoir plus <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div style={{textAlign: 'center', marginTop: '60px'}}>
            <a href="/domaines-intervention" style={styles.viewMoreBtn}>
               En savoir plus sur nos domaines <ArrowRight size={18} />
            </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  sectionWrapper: {
    padding: '80px 0',
    background: '#f8fafc',
    fontFamily: "'Inter', sans-serif"
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '50px',
    flexWrap: 'wrap',
    gap: '20px'
  },
  badge: {
    color: '#f3a31a',
    fontWeight: '700',
    fontSize: '0.9rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '10px'
  },
  mainTitle: {
    fontSize: '2.5rem',
    color: '#1e334e',
    fontWeight: '900',
    fontFamily: "'Julius Sans One', sans-serif', serif", // Fixed visual font suggestion
    margin: 0
  },
  controls: {
    display: 'flex',
    gap: '15px'
  },
  controlBtn: {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    border: '1px solid #cbd5e1',
    background: 'white',
    color: '#1e334e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  disabledBtn: {
    opacity: 0.5,
    cursor: 'default',
    background: '#f1f5f9'
  },
  carouselContainer: {
    overflow: 'hidden',
    width: '100%'
  },
  track: {
    display: 'flex',
    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
  },
  cardWrapper: {
    padding: '0 15px',
    boxSizing: 'border-box'
  },
  card: {
    background: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease',
    border: '1px solid #f1f5f9'
  },
  imageBlock: {
    height: '220px',
    position: 'relative',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 100%)'
  },
  content: {
    padding: '30px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: '#1e334e',
    marginBottom: '15px',
    fontFamily: "'Julius Sans One', sans-serif"
  },
  cardDesc: {
    color: '#64748b',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    marginBottom: '25px',
    flex: 1
  },
  linkBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: '#1879be', // Brand Blue
    color: 'white',
    padding: '12px 24px',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '0.9rem',
    textDecoration: 'none',
    alignSelf: 'flex-start',
    transition: 'all 0.3s'
  },
  viewMoreBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    background: 'transparent',
    color: '#1e334e',
    padding: '14px 34px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1rem',
    border: '2px solid #1e334e',
    transition: 'all 0.3s',
    cursor: 'pointer',
    marginTop: '20px'
  }
};

export default NewsCarousel;