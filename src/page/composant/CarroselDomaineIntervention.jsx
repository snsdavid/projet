import React, { useState } from 'react';

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const articles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      title: "FORESTERIE & ENVIRONNEMENT",
      description: "Accompagner les acteurs publics, privés et communautaires dans la mise en conformité réglementaire (notamment RDUE), la mise en œuvre de solutions fondées sur la nature et la gestion durable des ...",
      link: "/domaine-d-intervention/FORESTERIE_ENVIRONNEMENT"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=400&fit=crop",
      title: "AGRICULTURE",
      description: "Accompagner la création, l’optimisation et la pérennisation des exploitations agricoles en offrant des solutions techniques, économiques et humaines intégrées, afin d’améliorer la productivité, la rentabilité et la durabilité des",
      link: "/domaine-d-intervention/AGRICULTURE"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=400&fit=crop",
      title: "NEGOCE AGRICOLE",
      description: "Faciliter l’accès aux marchés, optimiser la chaîne de valeur et garantir la qualité des produits agricoles à travers des services intégrés de commercialisation, intermédiation et logistique, adaptés aux réalités des producteurs et aux exigences des ...",
      link: "/domaine-d-intervention/NEGOCE_AGRICOLE"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=400&fit=crop",
      title: "ETUDE ET CONSEIL",
      description: "Fournir aux acteurs du secteur agricole des analyses fiables, des projets structurés, afin de sécuriser leurs investissements, optimiser leurs performances et renforcer leur compétitivité sur les marchés ...",
      link: "/domaine-d-intervention/ETUDE_ET_CONSEIL"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=400&fit=crop",
      title: "DIGITALISATION AGRICOLE",
      description: "Accélérer la transformation numérique du secteur agricole en concevant, déployant et accompagnant des solutions digitales intégrées qui optimisent la gestion des exploitations, renforcent la traçabilité et facilitent l’accès aux marchés, tout en développant les compétences ...",
      link: "/domaine-d-intervention/DIGITALISATION_AGRICOLE"
    }
  ];

  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleReadMore = (link) => {
    // Pour une vraie application React avec React Router, utilisez:
    // navigate(link);
    
    // Pour la démo, on affiche une alerte
    // alert(`Redirection vers: ${link}`);
    window.location.href = link;
    
    // Dans votre application, décommentez cette ligne si vous utilisez React Router:
    // window.location.href = link;
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.mainTitle}>Nos Domaines D' Intervention</h1>

        <div style={styles.carouselWrapper}>
          <button style={{...styles.carouselBtn, ...styles.prevBtn}} onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div style={styles.carouselContainer}>
            <div style={{
              ...styles.carouselTrack,
              transform: `translateX(-${currentIndex * (33.333 + 2)}%)`
            }}>
              {articles.map((article) => (
                <div key={article.id} style={styles.articleCard}>
                  <img src={article.image} alt={article.title} style={styles.articleImage} />
                  <div style={styles.articleContent}>
                    <div style={styles.articleMeta}>
                      <span>{article.date}</span>
                      
                    </div>
                    <h3 style={styles.articleTitle}>{article.title}</h3>
                    <p style={styles.articleDescription}>{article.description}</p>
                    <button 
                      style={styles.readMoreBtn}
                      onClick={() => handleReadMore(article.link)}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#157347';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#198754';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      Lire la suite
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginLeft: '8px'}}>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button style={{...styles.carouselBtn, ...styles.nextBtn}} onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div style={styles.carouselIndicators}>
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              style={i === currentIndex ? {...styles.indicator, ...styles.indicatorActive} : styles.indicator}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f8f9fa',
    padding: '40px 0',
    minHeight: '100vh'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  mainTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '60px',
    color: '#212529'
  },
  carouselWrapper: {
    position: 'relative',
    overflow: 'hidden',
    padding: '0 60px'
  },
  carouselContainer: {
    overflow: 'hidden'
  },
  carouselTrack: {
    display: 'flex',
    gap: '24px',
    transition: 'transform 0.5s ease-in-out'
  },
  articleCard: {
    minWidth: 'calc(33.333% - 16px)',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  articleImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },
  articleContent: {
    padding: '24px'
  },
  articleMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.875rem',
    color: '#6c757d',
    marginBottom: '16px'
  },
  articleDuration: {
    backgroundColor: '#d1f4e0',
    color: '#198754',
    padding: '4px 12px',
    borderRadius: '20px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  },
  articleTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: '12px',
    lineHeight: '1.4',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical'
  },
  articleDescription: {
    color: '#6c757d',
    fontSize: '0.9rem',
    marginBottom: '16px',
    lineHeight: '1.6',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical'
  },
  articleTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  tag: {
    backgroundColor: '#d1f4e0',
    color: '#198754',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  carouselBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    zIndex: 10
  },
  prevBtn: {
    left: 0
  },
  nextBtn: {
    right: 0
  },
  carouselIndicators: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '40px'
  },
  indicator: {
    width: '10px',
    height: '10px',
    backgroundColor: '#dee2e6',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  indicatorActive: {
    width: '32px',
    backgroundColor: '#198754',
    borderRadius: '10px'
  },
  readMoreBtn: {
    marginTop: '16px',
    width: '100%',
    padding: '12px 20px',
    backgroundColor: '#198754',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(25, 135, 84, 0.2)'
  }
};

export default NewsCarousel;